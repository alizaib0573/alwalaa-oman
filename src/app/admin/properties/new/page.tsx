'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { generateSlug } from '@/lib/slugs';
import {
  Save,
  X,
  Upload,
  Trash2,
  Image as ImageIcon,
  MapPin,
  Info,
  Coins,
  BedDouble,
  Bath,
  Maximize,
  Globe,
  Star,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NewPropertyPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [bannerImageIndex, setBannerImageIndex] = useState<number | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [metadata, setMetadata] = useState<{ communities: any[], agents: any[] }>({ communities: [], agents: [] });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    type: 'VILLA',
    status: 'FOR_SALE',
    city: '',
    location: '',
    communityId: '',
    price: 0,
    currency: 'OMR',
    bedrooms: null,
    bathrooms: null,
    areaSqm: 0,
    bannerImageUrl: '',
    featured: false,
    coordinates: { lat: 0, lng: 0 },
    seoTitle: '',
    seoDescription: '',
  });

  useEffect(() => {
    async function fetchMetadata() {
      try {
        const res = await fetch('/api/admin/listing-metadata');
        if (res.ok) {
          const data = await res.json();
          setMetadata(data);
        }
      } catch (err) {
        console.error('Failed to fetch metadata', err);
      }
    }
    fetchMetadata();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    if (name === 'title') {
      setFormData(prev => ({
        ...prev,
        title: value,
        slug: value ? generateSlug(value) : '',
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: newValue,
      }));
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = 'Property title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.communityId) newErrors.communityId = 'Please select a community';
    if (formData.price <= 0) newErrors.price = 'Price must be greater than 0';
    if (formData.areaSqm <= 0) newErrors.areaSqm = 'Area must be greater than 0';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setImages(prev => [...prev, ...Array.from(files)]);
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const gallery = [];
      for (let i = 0; i < images.length; i++) {
        const file = images[i];
        const formDataImg = new FormData();
        formDataImg.append('file', file);
        formDataImg.append('slug', formData.slug);

        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formDataImg,
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(`Image upload failed: ${errData.error || res.statusText}`);
        }

        const data = await res.json();
        if (data.url) {
          gallery.push(data.url);
          if (i === bannerImageIndex) {
            setFormData(prev => ({ ...prev, bannerImageUrl: data.url }));
          }
        } else {
          throw new Error('Upload succeeded but no URL was returned');
        }
      }

      const response = await fetch('/api/admin/properties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, gallery }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          router.push('/admin/properties');
          router.refresh();
        }, 2000);
      } else {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to create property');
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 relative">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-3xl text-center space-y-4 shadow-2xl scale-in-center">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-medium text-white">Listing Added Successfully!</h3>
            <p className="text-zinc-400 text-sm">Redirecting you to the admin panel...</p>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-light tracking-tight">Create <span className="text-gold-500 font-medium">Property</span></h2>
          <p className="text-zinc-500 text-sm mt-1">Add a new exclusive listing to the portfolio</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/properties" className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-sm hover:bg-zinc-800 transition-all">
            Cancel
          </Link>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-medium rounded-xl hover:bg-gold-500 transition-all disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {isLoading ? 'Saving...' : 'Save Property'}
          </button>
        </div>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-2 text-zinc-400 mb-4">
              <Info className="w-4 h-4" />
              <h3 className="text-sm font-medium uppercase tracking-widest">Basic Information</h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">Property Title</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={cn(
                    "w-full px-4 py-3 bg-zinc-950/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all",
                    errors.title ? "border-red-500/50" : "border-white/10"
                  )}
                  placeholder="e.g. 6BR Alaya Villa"
                  required
                />
                {errors.title && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.title}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500">Property Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-950/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                  >
                    <option value="VILLA">Villa</option>
                    <option value="APARTMENT">Apartment</option>
                    <option value="PENTHOUSE">Penthouse</option>
                    <option value="TOWNHOUSE">Townhouse</option>
                    <option value="STUDIO">Studio</option>
                    <option value="LAND">Land</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 bg-zinc-950/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all",
                    errors.description ? "border-red-500/50" : "border-white/10"
                  )}
                  placeholder="Describe the luxury features, architecture, and lifestyle..."
                  required
                />
                {errors.description && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.description}</p>}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-2 text-zinc-400 mb-4">
              <MapPin className="w-4 h-4" />
              <h3 className="text-sm font-medium uppercase tracking-widest">Location & Community</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">City</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={cn(
                    "w-full px-4 py-3 bg-zinc-950/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all",
                    errors.city ? "border-red-500/50" : "border-white/10"
                  )}
                  placeholder="Muscat"
                  required
                />
                {errors.city && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.city}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">Location/Area</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className={cn(
                    "w-full px-4 py-3 bg-zinc-950/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all",
                    errors.location ? "border-red-500/50" : "border-white/10"
                  )}
                  placeholder="Al Mouj Muscat"
                  required
                />
                {errors.location && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.location}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">Community</label>
                <select
                  name="communityId"
                  value={formData.communityId}
                  onChange={handleInputChange}
                  className={cn(
                    "w-full px-4 py-3 bg-zinc-950/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all",
                    errors.communityId ? "border-red-500/50" : "border-white/10"
                  )}
                  required
                >
                  <option value="">Select Community</option>
                  {metadata.communities.map((c) => (
                    <option key={c.id} value={c.slug}>{c.name}</option>
                  ))}
                </select>
                {errors.communityId && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.communityId}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">Listing Agent</label>
                <div className="w-full px-4 py-3 bg-zinc-950/30 border border-white/10 rounded-xl text-sm text-zinc-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-500" />
                  Your account
                  <span className="ml-auto text-[10px] uppercase tracking-widest text-zinc-600">Auto-assigned</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-2 text-zinc-400 mb-4">
              <ImageIcon className="w-4 h-4" />
              <h3 className="text-sm font-medium uppercase tracking-widest">Media Gallery</h3>
            </div>

            <div
              className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center hover:border-gold-500/50 transition-all cursor-pointer group"
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <input
                id="file-upload"
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageSelect}
              />
              <div className="flex flex-col items-center gap-3">
                <div className="p-4 rounded-full bg-white/5 text-zinc-500 group-hover:text-gold-500 transition-all">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium">Click to upload properties images</p>
                  <p className="text-xs text-zinc-500 mt-1">WebP, JPG, PNG (Max 5MB each)</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((file, i) => (
                <div
                  key={i}
                  onClick={() => setBannerImageIndex(i)}
                  className={cn(
                    "relative aspect-square rounded-xl overflow-hidden border transition-all cursor-pointer group",
                    bannerImageIndex === i ? "border-gold-500 ring-2 ring-gold-500/20" : "border-white/10 bg-zinc-800"
                  )}
                >
                  <img
                    src={URL.createObjectURL(file)}
                    className="w-full h-full object-cover"
                    alt="Preview"
                  />
                  {bannerImageIndex === i && (
                    <div className="absolute bottom-2 left-2 bg-gold-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                      Banner
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(i);
                      if (bannerImageIndex === i) setBannerImageIndex(null);
                    }}
                    className="absolute top-2 right-2 p-1 rounded-full bg-black/60 text-white hover:bg-red-500 transition-all"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Details & SEO */}
        <div className="space-y-6">
          <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-2 text-zinc-400 mb-4">
              <Coins className="w-4 h-4" />
              <h3 className="text-sm font-medium uppercase tracking-widest">Pricing & Details</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">Price</label>
                <div className="relative">
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full pl-4 pr-12 py-3 bg-zinc-950/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all",
                      errors.price ? "border-red-500/50" : "border-white/10"
                    )}
                    required
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-500 font-medium">
                    {formData.currency}
                  </span>
                </div>
                {errors.price && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.price}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 flex items-center gap-1">
                    <BedDouble className="w-3 h-3" /> Bedrooms
                  </label>
                  <input
                    type="number"
                    name="bedrooms"
                    value={formData.bedrooms ?? ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-950/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 flex items-center gap-1">
                    <Bath className="w-3 h-3" /> Bathrooms
                  </label>
                  <input
                    type="number"
                    name="bathrooms"
                    value={formData.bathrooms ?? ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-950/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 flex items-center gap-1">
                  <Maximize className="w-3 h-3" /> Area (sqm)
                </label>
                <input
                  type="number"
                  name="areaSqm"
                  value={formData.areaSqm ?? ''}
                  onChange={handleInputChange}
                  className={cn(
                    "w-full px-4 py-3 bg-zinc-950/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all",
                    errors.areaSqm ? "border-red-500/50" : "border-white/10"
                  )}
                />
                {errors.areaSqm && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.areaSqm}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">Property Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                >
                  <option value="FOR_SALE">For Sale</option>
                  <option value="OFF_PLAN">Off-plan</option>
                  <option value="UNDER_CONSTRUCTION">Under Construction</option>
                  <option value="READY_TO_MOVE">Ready to Move</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <Star className="w-4 h-4 text-gold-500" />
                  <span className="text-sm font-medium">Featured Property</span>
                </div>
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="w-5 h-5 accent-gold-500 rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-2 text-zinc-400 mb-4">
              <Globe className="w-4 h-4" />
              <h3 className="text-sm font-medium uppercase tracking-widest">SEO Optimization</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">SEO Title</label>
                <input
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                  placeholder="Optimized title for search engines"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">SEO Description</label>
                <textarea
                  name="seoDescription"
                  value={formData.seoDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                  placeholder="Compelling description for search results..."
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

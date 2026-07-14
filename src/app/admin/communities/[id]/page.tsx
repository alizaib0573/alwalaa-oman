'use client';

import React, { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Save,
  X,
  Upload,
  Image as ImageIcon,
  MapPin,
  Info,
  Globe,
  Star,
  Loader2,
  CheckCircle2,
  Trash2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function EditCommunityPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [error, setError] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    location: '',
    imageUrl: '',
    featured: false,
  });

  useEffect(() => {
    async function fetchCommunity() {
      try {
        const res = await fetch(`/api/admin/communities/${id}`);
        if (!res.ok) throw new Error('Community not found');
        const data = await res.json();
        setFormData({
          name: data.name || '',
          slug: data.slug || '',
          description: data.description || '',
          location: data.location || '',
          imageUrl: data.imageUrl || '',
          featured: data.featured || false,
        });
        if (data.imageUrl) setImagePreview(data.imageUrl);
      } catch (e) {
        setError('Failed to load community data.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCommunity();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError('');

    try {
      let imageUrl = formData.imageUrl;

      if (imageFile) {
        const imgForm = new FormData();
        imgForm.append('file', imageFile);
        imgForm.append('slug', formData.slug);
        const uploadRes = await fetch('/api/admin/upload', {
          method: 'POST',
          body: imgForm,
        });
        if (!uploadRes.ok) throw new Error('Image upload failed');
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.url;
      }

      const payload = {
        name: formData.name,
        description: formData.description,
        location: formData.location,
        imageUrl: imageUrl || undefined,
        featured: formData.featured,
      };

      const res = await fetch(`/api/admin/communities/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to update community');
      }

      setShowSuccess(true);
      setTimeout(() => router.push('/admin/communities'), 1500);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-gold-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-xs uppercase tracking-widest text-zinc-500">Loading Community…</p>
        </div>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-96 space-y-4">
        <div className="w-16 h-16 rounded-full bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-gold-primary" />
        </div>
        <h3 className="text-xl font-serif text-white">Community Updated</h3>
        <p className="text-zinc-500 text-sm">Redirecting to community list…</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-4xl font-serif text-white tracking-tight">
            Edit <span className="text-gold-primary">Community</span>
          </h2>
          <p className="text-zinc-500 text-sm font-light">
            Update the details of this residential community.
          </p>
        </div>
        <Link
          href="/admin/communities"
          className="inline-flex items-center gap-2 px-4 py-2 border border-luxury-border text-zinc-400 text-xs uppercase tracking-widest rounded-lg hover:border-gold-primary/40 hover:text-white transition-all duration-300"
        >
          <X className="w-3.5 h-3.5" />
          Cancel
        </Link>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-4 text-red-400 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section: Basic Info */}
        <div className="bg-charcoal border border-luxury-border rounded-2xl p-6 space-y-5">
          <div className="flex items-center gap-2 text-gold-primary mb-2">
            <Info className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-semibold">Basic Information</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                Community Name <span className="text-red-400">*</span>
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-luxury-black border border-luxury-border rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold-primary/50 transition-colors placeholder:text-zinc-700"
              />
            </div>

            {/* Slug (read-only) */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                URL Slug <span className="text-zinc-600 normal-case text-[10px]">(read-only)</span>
              </label>
              <input
                name="slug"
                value={formData.slug}
                readOnly
                className="w-full bg-luxury-black border border-luxury-border rounded-xl px-4 py-3 text-zinc-600 text-sm outline-none cursor-not-allowed"
              />
            </div>

            {/* Location */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-zinc-400 font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-primary/60" />
                Location <span className="text-red-400">*</span>
              </label>
              <input
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="w-full bg-luxury-black border border-luxury-border rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold-primary/50 transition-colors placeholder:text-zinc-700"
              />
            </div>

            {/* Description */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-luxury-black border border-luxury-border rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold-primary/50 transition-colors placeholder:text-zinc-700 resize-none"
              />
            </div>
          </div>

          {/* Featured toggle */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, featured: !prev.featured }))}
              className={cn(
                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300',
                formData.featured ? 'bg-gold-primary' : 'bg-zinc-700'
              )}
            >
              <span
                className={cn(
                  'inline-block h-4 w-4 rounded-full bg-white transition-transform duration-300',
                  formData.featured ? 'translate-x-6' : 'translate-x-1'
                )}
              />
            </button>
            <div className="flex items-center gap-1.5 text-sm text-zinc-400">
              <Star className="w-3.5 h-3.5 text-gold-primary/60" />
              Mark as Featured Development
            </div>
          </div>
        </div>

        {/* Section: Cover Image */}
        <div className="bg-charcoal border border-luxury-border rounded-2xl p-6 space-y-5">
          <div className="flex items-center gap-2 text-gold-primary mb-2">
            <ImageIcon className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-semibold">Cover Image</span>
          </div>

          {imagePreview ? (
            <div className="relative aspect-video rounded-xl overflow-hidden border border-luxury-border">
              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => { setImageFile(null); setImagePreview(''); setFormData(prev => ({ ...prev, imageUrl: '' })); }}
                className="absolute top-3 right-3 bg-red-500/80 text-white rounded-full p-1.5 hover:bg-red-500 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center gap-4 h-48 border-2 border-dashed border-luxury-border rounded-xl cursor-pointer hover:border-gold-primary/40 transition-colors">
              <Upload className="w-8 h-8 text-zinc-700" />
              <span className="text-xs uppercase tracking-widest text-zinc-600">Click to replace image</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleImageSelect} />
            </label>
          )}

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-400 font-medium flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-gold-primary/60" />
              Or paste an image URL
            </label>
            <input
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="https://…"
              className="w-full bg-luxury-black border border-luxury-border rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold-primary/50 transition-colors placeholder:text-zinc-700"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSaving}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-primary text-luxury-black text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold-primary/20 disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isSaving ? 'Saving…' : 'Save Changes'}
          </button>
          <Link
            href="/admin/communities"
            className="px-6 py-3.5 border border-luxury-border text-zinc-400 text-xs uppercase tracking-widest rounded-xl hover:border-gold-primary/40 hover:text-white transition-all duration-300"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

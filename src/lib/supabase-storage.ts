import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseAdmin = createClient(supabaseUrl, supabaseKey);

export const storageService = {
  /**
   * Uploads a file to the properties folder
   * Path: properties/{slug}/{filename}
   */
  async uploadPropertyImage(slug: string, file: File) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `properties/${slug}/${fileName}`;

    const { data, error } = await supabaseAdmin.storage
      .from('real-estate')
      .upload(filePath, file);

    if (error) throw error;
    return data?.path;
  },

  /**
   * Deletes a file from storage
   */
  async deleteImage(path: string) {
    const { data, error } = await supabaseAdmin.storage
      .from('real-estate')
      .remove([path]);

    if (error) throw error;
    return data;
  },

  /**
   * Returns the public URL for a stored image
   */
  getPublicUrl(path: string) {
    const { data } = supabaseAdmin.storage
      .from('real-estate')
      .getPublicUrl(path);

    return data.publicUrl;
  },
};

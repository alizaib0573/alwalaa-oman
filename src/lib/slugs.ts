/**
 * Generates a URL-friendly slug from a given text.
 * @param text The text to be converted into a slug.
 * @returns A sanitized, lower-case slug.
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters except spaces and dashes
    .replace(/[\s_-]+/g, '-')     // Replace spaces, underscores, and multiple dashes with a single dash
    .replace(/^-+|-+$/g, '');      // Trim leading and trailing dashes
}

/**
 * Utility helpers for standardized file naming across exports.
 */

/** Convert a string to a URL friendly slug. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Generate a timestamp string in YYYYMMDD_HHmmss format. */
export function timestamp(date = new Date()): string {
  const pad = (n: number) => n.toString().padStart(2, '0');
  return (
    date.getFullYear().toString() +
    pad(date.getMonth() + 1) +
    pad(date.getDate()) +
    '_' +
    pad(date.getHours()) +
    pad(date.getMinutes()) +
    pad(date.getSeconds())
  );
}

/**
 * Build a filename using slug and timestamp.
 * @throws if slug is empty
 */
export function buildFilename(slug: string, ext: string, date = new Date()): string {
  if (!slug) throw new Error('slug is required');
  const name = slugify(slug);
  return `${name}_${timestamp(date)}.${ext}`;
}

import { buildFilename } from './filename_rules.js';

export type ExportFormat = 'json' | 'jsonl';

export interface ExportResult {
  filename: string;
  content: string;
}

/**
 * Convert data to JSON or JSONL and provide a download-ready payload.
 */
export function exportData(
  data: unknown[] | Record<string, unknown>,
  slug: string,
  format: ExportFormat = 'jsonl'
): ExportResult {
  if (!data || (Array.isArray(data) && data.length === 0)) {
    throw new Error('No data to export');
  }
  const ext = format === 'json' ? 'json' : 'jsonl';
  const filename = buildFilename(slug, ext);
  let content = '';
  if (format === 'json') {
    content = JSON.stringify(data, null, 2);
  } else {
    const arr = Array.isArray(data) ? data : [data];
    content = arr.map((item) => JSON.stringify(item)).join('\n');
  }
  return { filename, content };
}

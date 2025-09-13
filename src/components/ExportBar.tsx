import React, { useState } from 'react';
import { exportData, ExportFormat } from '../utils/export_jsonl.js';

interface ExportBarProps {
  data: unknown[];
  slug: string;
}

/**
 * Simple export bar with format selector and download action.
 */
export function ExportBar({ data, slug }: ExportBarProps): any {
  const [format, setFormat] = useState<ExportFormat>('jsonl');

  const handleExport = () => {
    try {
      const { filename, content } = exportData(data, slug, format);
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      alert('Export failed.');
    }
  };

  return (
    <div>
      <select value={format} onChange={(e: any) => setFormat((e.target as HTMLSelectElement).value as ExportFormat)}>
        <option value="jsonl">JSONL</option>
        <option value="json">JSON</option>
      </select>
      <button onClick={handleExport}>Export</button>
    </div>
  );
}

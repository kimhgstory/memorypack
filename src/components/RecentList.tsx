import React from 'react';
import { getRecent } from '../utils/storage_recent.js';

interface RecentListProps<T> {
  storageKey: string;
  storage?: Storage;
  renderItem: (item: T, index: number) => any;
}

/**
 * Render a list of recent items stored in localStorage.
 */
export function RecentList<T>({ storageKey, storage, renderItem }: RecentListProps<T>): any {
  const items = getRecent<T>({ key: storageKey, storage });
  if (items.length === 0) {
    return <div>No recent items</div>;
  }
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{renderItem(item, idx)}</li>
      ))}
    </ul>
  );
}

export interface RecentOptions<T> {
  key: string;
  storage?: Storage;
  max?: number;
}

const DEFAULT_MAX = 3;
const defaultStorage = typeof window !== 'undefined' ? window.localStorage : undefined;

/** Add an item to recent list keeping only the last `max` items. */
export function addRecent<T>(item: T, { key, storage = defaultStorage, max = DEFAULT_MAX }: RecentOptions<T>): void {
  if (!storage) throw new Error('Storage not available');
  const existing = getRecent<T>({ key, storage });
  existing.unshift(item);
  const slice = existing.slice(0, max);
  storage.setItem(key, JSON.stringify(slice));
}

/** Retrieve recent items from storage. */
export function getRecent<T>({ key, storage = defaultStorage }: RecentOptions<T>): T[] {
  if (!storage) throw new Error('Storage not available');
  const raw = storage.getItem(key);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as T[];
  } catch {
    console.warn(`Failed to parse recent items for key ${key}`);
    return [];
  }
}

/** Save a snapshot of current data. */
export function saveSnapshot<T>(snapshot: T, { key, storage = defaultStorage }: RecentOptions<T>): void {
  if (!storage) throw new Error('Storage not available');
  storage.setItem(`${key}_snapshot`, JSON.stringify(snapshot));
}

/** Retrieve snapshot if available. */
export function getSnapshot<T>({ key, storage = defaultStorage }: RecentOptions<T>): T | null {
  if (!storage) throw new Error('Storage not available');
  const raw = storage.getItem(`${key}_snapshot`);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    console.warn(`Failed to parse snapshot for key ${key}`);
    return null;
  }
}

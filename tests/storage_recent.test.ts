import test from 'node:test';
import assert from 'node:assert/strict';
import { addRecent, getRecent, saveSnapshot, getSnapshot } from '../src/utils/storage_recent.js';

class MemoryStorage implements Storage {
  private map = new Map<string, string>();
  get length() { return this.map.size; }
  clear(): void { this.map.clear(); }
  getItem(key: string): string | null { return this.map.get(key) ?? null; }
  key(index: number): string | null { return Array.from(this.map.keys())[index] ?? null; }
  removeItem(key: string): void { this.map.delete(key); }
  setItem(key: string, value: string): void { this.map.set(key, value); }
}

const storage = new MemoryStorage();

test('keeps only max recent items', () => {
  addRecent('one', { key: 'test', storage, max: 3 });
  addRecent('two', { key: 'test', storage, max: 3 });
  addRecent('three', { key: 'test', storage, max: 3 });
  addRecent('four', { key: 'test', storage, max: 3 });
  const items = getRecent<string>({ key: 'test', storage });
  assert.deepEqual(items, ['four', 'three', 'two']);
});

test('saves and retrieves snapshot', () => {
  saveSnapshot({ v: 1 }, { key: 'snap', storage });
  const snap = getSnapshot<{ v: number }>({ key: 'snap', storage });
  assert.deepEqual(snap, { v: 1 });
});

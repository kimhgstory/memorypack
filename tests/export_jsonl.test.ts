import test from 'node:test';
import assert from 'node:assert/strict';
import { exportData } from '../src/utils/export_jsonl.js';

test('exports array to JSONL', () => {
  const data = [{ a: 1 }, { b: 2 }];
  const result = exportData(data, 'test', 'jsonl');
  assert.ok(result.filename.startsWith('test_'));
  assert.equal(result.content.split('\n').length, 2);
});

test('exports object to JSON', () => {
  const obj = { a: 1 };
  const result = exportData(obj, 'single', 'json');
  assert.ok(result.filename.endsWith('.json'));
  const parsed = JSON.parse(result.content);
  assert.deepEqual(parsed, obj);
});

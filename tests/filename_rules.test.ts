import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify, buildFilename } from '../src/utils/filename_rules.js';

test('slugify converts to url friendly format', () => {
  assert.equal(slugify('Hello World!'), 'hello-world');
});

test('buildFilename combines slug and timestamp', () => {
  const date = new Date('2025-08-11T10:20:30Z');
  const name = buildFilename('My File', 'json', date);
  assert.equal(name, 'my-file_20250811_102030.json');
});

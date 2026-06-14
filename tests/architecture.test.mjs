import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/Users/gdrom/Desktop/allkons/ascendhr-web/public-skill-repo/presentation-feature-video-ads';

const exists = (relativePath) => fs.existsSync(path.join(ROOT, relativePath));

test('progressive-disclosure entrypoints exist', () => {
  assert.equal(exists('SKILL.md'), true);
  assert.equal(exists('reference/STYLE_INDEX.md'), true);
  assert.equal(exists('templates/index.json'), true);
});

test('MCP surface is removed from the public package', () => {
  assert.equal(exists('mcp'), false);
});

test('default template docs exist for on-demand loading', () => {
  assert.equal(exists('templates/presentation-feature-core/preview.md'), true);
  assert.equal(exists('templates/presentation-feature-core/design.md'), true);
  assert.equal(exists('templates/presentation-feature-core/examples/about-us-brief.md'), true);
  assert.equal(exists('templates/presentation-feature-core/examples/pricing-brief.md'), true);
});

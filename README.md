# presentation-feature-video-ads

One-command skill pack for turning briefs, pages, or empty projects into code-ready, multi-scene, UI-first presentation video ads.

```bash
npx skills add Rommadon/presentation-video-ads-skill
```

Built for Codex, Claude Code, OpenCode, Cursor, and any agent that reads skill folders.

## What changed in this architecture

This repo now uses **progressive disclosure**:

- `SKILL.md` is the workflow map
- `reference/PRODUCT_PILLARS.md` defines the delivery promises
- `reference/STYLE_INDEX.md` is the template chooser
- `templates/index.json` is the compact metadata layer
- `templates/*/preview.md` are the generated visual preview cards
- `templates/*/design.md` are loaded only after selection

There is **no MCP layer**. This package is markdown-first and self-contained.

## Default behavior

A short prompt like `Use presentation-feature-video-ads to implement the Apple Inc about us presentation` is enough.

That means the skill should create real source files in the current app workspace, split rich content into more focused scenes, keep scenes text-light, use motion in every beat, use 20+ micro-scenes for normal-length content, use modern product mockups when needed, and keep the transport chrome minimal and player-like.

If a scene needs more than two short lines of copy, split it into another scene. Some scenes can be visual-only.

Before delivery, the skill should run a recheck pass to catch duplicate layouts, text overlap, clipped controls, and any frame that still reads like a slide deck instead of a video ad.

Animations should be bound to the active scene, not just to page load, so word reveals and fades still read when each scene becomes visible.

If the user has not expressed a visual preference, choose from the generated preview cards first so the result feels intentionally styled instead of generically templated.

## Starter templates

- `presentation-feature-core` — the current best default
- `soft-editorial`
- `emerald-editorial`
- `vellum`
- `capsule`
- `cobalt-grid`

Each template stays inside the same core concept: premium video presentation style, player-first shell, UI-heavy storytelling, clean product surfaces, and a zero-dependency delivery model.

## Start here

1. Read `SKILL.md`
2. Read `reference/STYLE_INDEX.md`
3. Read `templates/index.json`
4. Read only shortlisted `preview.md` files
5. Read one selected `design.md`

If you just want starter prompts, use `examples/`.

## Repository structure

```text
presentation-feature-video-ads/
├── README.md
├── CLAUDE.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
├── SKILL.md
├── manifest.json
├── docs/
├── examples/
├── reference/
│   ├── PRODUCT_PILLARS.md
│   ├── STYLE_INDEX.md
│   ├── RECHECK.md
│   ├── STYLE_GUIDE.md
│   └── scene-grammar.json
└── templates/
```

## Why this pack is different

- implementation-first
- zero-dependency HTML delivery for the presentation itself
- generated visual previews for style discovery
- curated styles that avoid generic AI aesthetics
- text-light, motion-heavy scenes with hard copy budgets
- accessible, fixed 16:9 and 9:16 production-quality output
- UI-first video-ad storytelling
- shared base style with multiple on-demand templates
- progressive disclosure instead of one giant contract
- a final recheck loop that repairs overlap, duplicate layouts, and slide-like pacing before handoff
- no private paths, no MCP, no external runtime dependency

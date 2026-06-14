# presentation-feature-video-ads

One-command skill pack for turning briefs, pages, or empty projects into code-ready, multi-scene, UI-first presentation video ads.

```bash
npx skills add Rommadon/presentation-video-ads-skill
```

Built for Codex, Claude Code, OpenCode, Cursor, and any agent that reads skill folders.

## What changed in this architecture

This repo now uses **progressive disclosure**:

- `SKILL.md` is the workflow map
- `reference/STYLE_INDEX.md` is the template chooser
- `templates/index.json` is the compact metadata layer
- `templates/*/preview.md` are tiny style cards
- `templates/*/design.md` are loaded only after selection

There is **no MCP layer**. This package is markdown-first and self-contained.

## Default behavior

A short prompt like `Use presentation-feature-video-ads to implement the Apple Inc about us presentation` is enough.

That means the skill should create real source files in the current app workspace, split rich content into more focused scenes, use modern product mockups, and keep the transport chrome minimal and player-like.

## Starter templates

- `presentation-feature-core` — the current best default
- `soft-editorial`
- `emerald-editorial`
- `vellum`
- `capsule`
- `cobalt-grid`

Each template stays inside the same core concept: premium video presentation style, player-first shell, UI-heavy storytelling, and clean product surfaces.

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
└── templates/
```

## Why this pack is different

- implementation-first
- UI-first video-ad storytelling
- shared base style with multiple on-demand templates
- progressive disclosure instead of one giant contract
- no private paths, no MCP, no external runtime dependency

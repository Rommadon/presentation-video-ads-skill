# Usage

## Install

```bash
npx skills add Rommadon/presentation-video-ads-skill
```

## Default prompt

```text
Use presentation-feature-video-ads to implement the Apple Inc about us presentation.
```

That short prompt already implies:

- create the actual source files in the current app workspace
- scaffold the smallest runnable React/Vite structure first if no app exists
- split rich content into more, shorter scenes
- keep one focus and one visible UI state per scene
- use modern product mockups and refined motion
- keep the transport chrome minimal and player-like

## Progressive-disclosure flow

1. Read `SKILL.md`
2. Read `reference/STYLE_INDEX.md`
3. Read `templates/index.json`
4. Shortlist candidates from metadata only
5. Read only shortlisted `preview.md` files
6. Read one selected `design.md`
7. Generate the implementation

## User-facing starting prompts

- `examples/empty-project.md`
- `examples/about-us.md`
- `examples/pricing.md`
- `examples/react-implementation.md`

Use these only when you need a starting prompt. They are not the architecture.

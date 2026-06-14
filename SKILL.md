---
name: presentation-feature-video-ads
description: "Generate premium, multi-scene, UI-first video-ad presentations from a progressive-disclosure skill pack with on-demand template loading."
---

# presentation-feature-video-ads

Turn product briefs, pages, screenshots, notes, or an empty project into a cinematic presentation implementation that feels like `PresentationFeature`.

## Core rules

1. **Implementation-first** — default to real source files in the current app workspace.
2. **Progressive disclosure** — load only the files needed for the current phase.
3. **UI-first storytelling** — prefer product surfaces, state changes, counters, timelines, chips, and staged simulations over dense text.
4. **One focus per scene** — split rich content into more, shorter beats.
5. **Shared house style** — keep the player-first, premium, simulation-driven system while allowing template-level variation.

## File loading map

| File | Purpose | Load when |
| --- | --- | --- |
| `SKILL.md` | Workflow map and rules | Always |
| `reference/STYLE_INDEX.md` | Lightweight template chooser | Template selection |
| `templates/index.json` | Compact template metadata | Template selection |
| `templates/*/preview.md` | Shortlisted preview cards | After shortlisting |
| `reference/STYLE_GUIDE.md` | Shared house-style authority | Generation |
| `reference/scene-grammar.json` | Shared scene/pacing contract | Generation |
| `templates/*/design.md` | Selected template design recipe | After user selection |
| `templates/presentation-feature-core/examples/*` | Base-template example briefs | When the selected template is the default and the use case matches |
| `examples/*.md` | User-facing starting prompts | Only when the user needs a starting prompt |

Do not bulk-read every template `design.md`.

## Workflow

### Phase 1 — detect the starting point

Classify the job:

- current app implementation
- empty-project scaffold
- page-to-presentation adaptation
- brief/notes-to-presentation adaptation

If there is no app shell, scaffold the smallest runnable React/Vite structure first.

### Phase 2 — choose a template

1. Read `reference/STYLE_INDEX.md`.
2. Read `templates/index.json`.
3. Shortlist up to 3 templates from metadata only.
4. Read only those templates' `preview.md` files.
5. If the user chooses one, read exactly that template's `design.md`.
6. If the user does not choose, default to `presentation-feature-core`.

### Phase 3 — generate

Read:

- `reference/STYLE_GUIDE.md`
- `reference/scene-grammar.json`
- the selected template's `design.md`
- the selected template's example briefs only if they help the current use case

Then implement the presentation in the current app workspace.

## Implementation contract

For React projects, the expected result usually includes:

- a presentation component
- a route/page wrapper
- styling for the presentation shell
- any small supporting components
- tests for controls and scene flow

Write into the current app workspace, not into `examples/`, `reference/`, or `templates/`.

Only edit the skill package itself when the user explicitly asks to improve or rewrite the skill.

## Shared quality bar

- more, shorter scenes when the content is rich
- one focus and one visible UI state per scene
- modern product mockups, not literal desktop chrome
- crisp, tactile, refined motion
- minimal music-player-like transport chrome
- premium CTA close

If a result feels like a slide deck instead of a product video ad, revise it toward the shared references.

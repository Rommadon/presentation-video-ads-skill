# Output contract

This skill is intended to produce implementation-ready code in the current app workspace.

The resulting deck should feel like a premium video ad: more scenes when the content is rich, one focus per scene, UI/simulation first, and a compact music-player-like transport bar instead of a chunky presentation footer.

When the source has an important product flow, the deck should show that flow over 2–3 consecutive scenes instead of compressing it into one text block.

Use split copy-left / product-right scenes, modern product mockups, counters, timelines, chips, and state-change reveals whenever they make the story easier to understand.

The motion should feel like `emil-design-eng`: crisp, tactile, subtle, and detail-driven.

## Default deliverable

When asked to create a presentation video ad, the assistant should produce the code needed to run it in the target project. A short prompt is still a code-generation request.

## For React projects

Prefer output that includes:

- a presentation component
- a route/page wrapper
- styling for the presentation shell
- any supporting components
- test coverage for the controls and scene flow

When the brief has multiple major ideas, split them into more, shorter scenes instead of building one dense slide.

Each scene should be allowed to own one primary UI state or product moment.

Strong features should often get their own mini-sequence of scenes so the viewer can watch the interface evolve.

## For empty projects

Create the smallest working structure that can run:

- a component folder
- a page or route wrapper
- styles
- tests

If there is no app shell yet, scaffold the minimal React/Vite structure first.

Do not fall back to a docs-only or example-only result.

The transport section should be minimal and elegant, closer to Spotify or Apple Music than a generic presentation toolbar.

## If you only want an outline

Say so explicitly.

Otherwise, the skill should assume code generation mode.

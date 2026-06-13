# Output contract

This skill is intended to produce implementation-ready code in the current app workspace.

## Default deliverable

When asked to create a presentation video ad, the assistant should produce the code needed to run it in the target project. A short prompt is still a code-generation request.

## For React projects

Prefer output that includes:

- a presentation component
- a route/page wrapper
- styling for the presentation shell
- any supporting components
- test coverage for the controls and slide flow

## For empty projects

Create the smallest working structure that can run:

- a component folder
- a page or route wrapper
- styles
- tests

If there is no app shell yet, scaffold the minimal React/Vite structure first.

Do not fall back to a docs-only or example-only result.

## If you only want an outline

Say so explicitly.

Otherwise, the skill should assume code generation mode.

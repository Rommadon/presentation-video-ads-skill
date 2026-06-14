# Repository rules

This repo packages a public, portable skill for generating PresentationFeature-style presentation video ads.

## Core rule

The bundled markdown files are the authority. Do not add upstream paths or hidden dependencies back into the public package.

## Repo layout

- `SKILL.md` is the workflow map.
- `reference/` is the shared authority.
- `templates/` contains on-demand template assets.
- `examples/` are user-facing starter prompts.

## Editing rules

- Keep `README.md` consumer-friendly.
- Keep `PUBLISHING.md` maintainer-focused.
- Keep JSON files valid.
- Keep templates compact enough for progressive disclosure.

## Before release

1. Validate JSON files.
2. Run the architecture tests.
3. Verify the repo has no private-path coupling.
4. Confirm the markdown-only loading path is clear from `README.md`.

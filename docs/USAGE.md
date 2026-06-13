# Usage

This skill is designed to be easy to add and easy to use.

## Install

```bash
npx skills add Rommadon/presentation-video-ads-skill
```

No scaffold suffix is needed. The skill generates the code by default.

## Default prompt

Use `presentation-feature-video-ads` to implement the AI 360 Feedback presentation.

That short prompt already means:

- create the actual source files in the current app workspace
- add tests for the presentation flow
- if no app exists, scaffold the minimal React/Vite structure first
- do not stop at an outline or an example brief
- do not edit `.agents/skills/` or `examples/` unless the user explicitly asked to rewrite the skill

## Use with Codex

After installing, ask Codex to use the `presentation-feature-video-ads` skill on your source material **and to implement the result as code**.

Example:

```text
Use presentation-feature-video-ads to implement the AI 360 Feedback presentation.
```

## Use with Claude Code

Install the skill, then ask Claude Code to transform the source content into a cinematic presentation **as runnable code**.

Example:

```text
Use presentation-feature-video-ads to implement the AI 360 Feedback presentation.
```

## Use with OpenCode

Install the skill, then point OpenCode at the source content and ask for a presentation-style output **in code**.

Example:

```text
Use presentation-feature-video-ads to implement the AI 360 Feedback presentation.
```

## Best first prompt

If you are starting from nothing, use `examples/empty-project.md`.

If you already have a page, use the example that matches it:

- `examples/about-us.md`
- `examples/pricing.md`

If you want the React/code version explicitly, use `examples/react-implementation.md`.

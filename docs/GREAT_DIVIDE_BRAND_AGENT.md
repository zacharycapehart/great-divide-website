# Great Divide Brand Agent

## Purpose

The Brand Agent ensures that every part of the Great Divide Restaurant website consistently
reflects the restaurant's identity: a locally owned, farm-to-table establishment with warm,
modern, and approachable character.

## Brand Identity

| Attribute | Value |
|-----------|-------|
| Name | Great Divide Restaurant |
| Concept | Farm-to-table, seasonal, neighborhood dining |
| Tone | Warm, approachable, confident, unpretentious |
| Voice | Conversational but polished; no jargon |
| Colors | Warm off-white (`#f9f6f1`), accent terra cotta (`#8b3f2f`) |
| Typography | Clean sans-serif (Arial/Helvetica fallback stack) |

## Audit Checklist

### Identity

- [ ] The restaurant name **Great Divide** appears consistently across all pages and assets.
- [ ] The tagline or descriptor (e.g. "Farm to Table") is used consistently.
- [ ] Color values match the approved palette (see CSS variables in `assets/css/styles.css`).
- [ ] No conflicting brand language (e.g., "fast food", "chain", or corporate terminology) appears.

### Tone & Voice

- [ ] All copy is warm and welcoming, not stiff or overly formal.
- [ ] Language is written in second person ("Join us", "Your table") where applicable.
- [ ] No spelling errors, grammatical mistakes, or inconsistent capitalization of the brand name.

### Visual Consistency

- [ ] The accent color (`--accent: #8b3f2f`) is used only for calls-to-action, highlights, and
  interactive elements.
- [ ] No unlicensed or off-brand imagery is used.
- [ ] The logo/wordmark always renders at legible sizes.

## How This Agent Works

1. **Triggered on:** Any pull request that modifies `index.html`, `assets/css/styles.css`, or
   any new content files.
2. **Action:** Reviews diffs against the checklist above and comments on deviations.
3. **Pass criteria:** All checklist items are satisfied or have an approved exception noted.

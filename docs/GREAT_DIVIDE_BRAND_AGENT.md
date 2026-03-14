# Great Divide Brand Agent

## Purpose
This document defines the brand identity standards for the Great Divide Restaurant website. All contributors and agents must follow these guidelines to maintain a consistent, professional brand presence.

---

## Brand Identity

**Restaurant Name:** Great Divide Restaurant  
**Tagline:** Farm to Table  
**Brand Voice:** Warm, approachable, locally rooted, and confident.

---

## Color Palette

| Token           | Value     | Usage                              |
|-----------------|-----------|------------------------------------|
| `--bg`          | `#f9f6f1` | Page background                    |
| `--surface`     | `#ffffff`  | Cards, header, footer              |
| `--surface-muted` | `#f0ebe3` | Alternate section backgrounds    |
| `--text`        | `#1f1f1f` | Body copy                          |
| `--accent`      | `#8b3f2f` | Primary accent (buttons, links)    |
| `--accent-dark` | `#6f3124` | Hover states on accent elements    |
| `--border`      | `#ddd4c7` | Subtle borders and dividers        |

- Do **not** introduce new colors outside this palette without updating this document.
- Accent color (`#8b3f2f`) must maintain a minimum 4.5:1 contrast ratio against white backgrounds for WCAG AA compliance.

---

## Typography

- **Primary Font:** Arial, Helvetica, sans-serif (system stack)
- **Logo / Heading Size:** `1.4rem` for the site logo; fluid headings via `clamp()` for hero
- **Eyebrow Text:** Uppercase, `0.75rem`, `letter-spacing: 0.12em`, weighted `700`, accent color
- Do not use more than two type sizes per component.

---

## Logo Usage

- The logo is displayed as the text "Great Divide" in the site header.
- It must always appear on a white/light surface; do not place on dark or image backgrounds without sufficient contrast.
- Do not alter the logo text, typeface, or color.

---

## Tone of Voice

| Context       | Tone                                          |
|---------------|-----------------------------------------------|
| Headlines     | Direct, welcoming, short                      |
| Body copy     | Conversational, warm, informative             |
| CTAs          | Action-oriented ("Reserve a Table", "Visit Us") |
| Error states  | Helpful, non-technical                        |

---

## Imagery Guidelines

- Use warm, natural-light photography of food, ingredients, and the dining space.
- Avoid stock photos that appear generic or overly staged.
- All images must have descriptive `alt` text.

---

## Component Standards

- **Buttons:** Rounded corners (`0.45rem`), accent background, white text.
- **Cards:** White background, subtle border (`var(--border)`), `0.6rem` border-radius.
- **Sections:** Alternate between `--bg` and `--surface-muted` to create visual rhythm.
- **Header:** Sticky, white, bordered bottom — always visible.

---

## Checklist for Brand Compliance

- [ ] Colors are drawn exclusively from the defined palette
- [ ] Font stack matches the brand specification
- [ ] Buttons and cards use correct radius and color tokens
- [ ] All links and CTAs use brand voice
- [ ] Imagery has descriptive alt text and matches warm, natural aesthetic
- [ ] Logo text is unmodified

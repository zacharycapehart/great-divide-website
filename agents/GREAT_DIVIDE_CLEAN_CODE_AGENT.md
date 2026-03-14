# Great Divide Clean Code Agent

## Purpose
Ensure that all code in the Great Divide Restaurant website is readable, maintainable, consistent, and follows established best practices for HTML, CSS, and JavaScript.

---

## HTML Standards

### Structure
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- One `<h1>` per page.
- Logical heading hierarchy (h1 → h2 → h3).
- All interactive elements are keyboard-accessible.
- `lang` attribute set on `<html>` tag.

### Formatting
- 4-space indentation.
- Lowercase element and attribute names.
- Double quotes for attribute values.
- Boolean attributes written without values (e.g., `<input required>` not `<input required="required">`).
- Closing tags present on all non-void elements.

### Accessibility
- All `<img>` elements have meaningful `alt` attributes.
- Form elements have associated `<label>` elements.
- ARIA roles/attributes used only when native HTML semantics are insufficient.
- Color is not the sole means of conveying information.
- Minimum contrast ratio of 4.5:1 for body text.

---

## CSS Standards

### Organization
```
1. Custom properties (CSS variables) in :root
2. Reset / base styles
3. Layout utilities (.container, .grid, etc.)
4. Component styles (header, nav, hero, card, etc.)
5. Utility / modifier classes
6. Media queries (at the end or co-located with components)
```

### Naming
- Use descriptive, hyphenated class names (BEM-lite approach is acceptable).
- Class names reflect purpose, not appearance (e.g., `.section-muted` not `.section-grey`).
- Avoid IDs for styling; use classes.

### Properties
- Use CSS custom properties for all repeated values (colors, spacing, etc.).
- Avoid `!important` unless overriding third-party styles.
- Prefer shorthand properties where clarity is maintained.
- Use `clamp()`, `min()`, `max()` for responsive sizing.
- Prefer `gap` over margin hacks in flex/grid layouts.

### Formatting
- 4-space indentation.
- One property per line.
- Blank line between rule sets.
- Alphabetical property order within rules (or consistent logical grouping).

---

## JavaScript Standards

### Style
- Use `const` by default; use `let` when reassignment is needed; never use `var`.
- Prefer arrow functions for callbacks.
- Use template literals over string concatenation.
- Semicolons at the end of statements.
- 4-space indentation.

### Safety
- Always null-check DOM queries before acting on them:
  ```js
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
  ```
- No `eval()`, `document.write()`, or `innerHTML` with untrusted content.
- No global variable pollution; wrap code in modules or IIFE if not using ES modules.

### Comments
- Comment the *why*, not the *what*.
- Remove all `console.log()` calls before committing.
- Use JSDoc for any exported functions (future).

---

## File & Folder Structure

```
great-divide-website/
├── agents/           # Governance and audit agent markdown files
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── images/       # (future) Optimized images
├── index.html
├── README.md
└── .gitignore
```

---

## Clean Code Audit Checklist

- [ ] No commented-out dead code in production files.
- [ ] No `console.log()` statements in committed JS.
- [ ] All IDs on the page are unique.
- [ ] No duplicate CSS rule sets.
- [ ] CSS variables used for all brand colors.
- [ ] HTML validates with zero errors via W3C Validator.
- [ ] JavaScript passes ESLint with no errors (if linting is configured).
- [ ] No unused CSS classes.
- [ ] File names use lowercase with hyphens (kebab-case).
- [ ] All files use UTF-8 encoding and LF line endings.

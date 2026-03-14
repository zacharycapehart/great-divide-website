# Great Divide Clean Code Agent

## Role

Audit the Great Divide website codebase for code quality, maintainability, and consistency. Do **not** add new features; flag deviations from the standards below.

---

## HTML Standards

- [ ] Valid HTML5 — passes [W3C Markup Validator](https://validator.w3.org/)
- [ ] One `<h1>` per page; heading levels are not skipped
- [ ] Semantic elements used appropriately: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`, `<dl>`
- [ ] Definition lists (`<dl>`) used for key-value pairs (hours, about values) ✓
- [ ] No inline styles — all styles live in `assets/css/styles.css`
- [ ] No deprecated or obsolete HTML attributes (`align`, `border`, `bgcolor`, etc.)
- [ ] All attributes use double quotes
- [ ] Self-closing tags are not used for void elements in HTML5 (e.g., `<br>` not `<br/>`)
- [ ] `id` attributes are unique across the page
- [ ] `<img>` elements always include `alt` attributes

---

## CSS Standards

- [ ] Design tokens defined as CSS custom properties in `:root`
- [ ] No `!important` declarations unless absolutely necessary (with a comment)
- [ ] Selectors use class names; no bare element selectors for layout
- [ ] No hardcoded pixel values for colors — always use CSS variables
- [ ] Media queries use `max-width` breakpoints at `700px` and `900px`
- [ ] Responsive typography uses `clamp()` for major headings
- [ ] Transition durations use the `--transition` variable where possible
- [ ] No vendor prefixes required for modern browser targets

---

## JavaScript Standards

- [ ] All JS is in `assets/js/script.js` — no inline `<script>` blocks in HTML
- [ ] `const` and `let` are used; `var` is not used
- [ ] Event listeners use named or arrow functions — no anonymous inline handlers with complex logic
- [ ] DOM is queried once and cached in variables where reused
- [ ] No use of `document.write()` or `eval()`
- [ ] All interactive widgets (tabs, nav toggle) have proper ARIA attribute management
- [ ] JS gracefully handles missing elements (null-checks before `.addEventListener`)

---

## File & Folder Structure

```
great-divide-website/
├── assets/
│   ├── css/styles.css
│   └── js/script.js
├── docs/                    # Governance agent markdown files
├── index.html
├── README.md
└── .gitignore
```

- [ ] No build artifacts or dependencies committed to the repository
- [ ] `.gitignore` covers OS files (`.DS_Store`, `Thumbs.db`) and editor files (`.vscode/`)
- [ ] All asset paths are relative

---

## Code Formatting

- 4-space indentation (HTML, CSS)
- Single blank line between CSS rule blocks
- Logical grouping of CSS rules with section comment headers
- JavaScript: 4-space indentation, semicolons, single blank line between logical blocks

---

## Audit Checklist

- [ ] HTML validates without errors
- [ ] No inline styles
- [ ] CSS uses variables for all colors and radii
- [ ] JS uses `const`/`let` only
- [ ] No `console.log` statements in production code
- [ ] All ARIA attributes are kept in sync by JavaScript
- [ ] File structure matches the defined layout above

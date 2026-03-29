# Great Divide Clean Code Agent

## Purpose
This document defines clean code standards for the Great Divide Restaurant website. Consistent, readable code makes the project easier to maintain and extend.

---

## HTML Standards

- Use semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`.
- One `<main>` element per page.
- All elements must be properly nested and closed.
- Attributes must use double quotes.
- IDs must be unique per page; classes may be reused.
- Keep indentation consistent: **4 spaces** (no tabs).
- Remove commented-out dead code before committing.
- Each `<section>` should have a descriptive `id` attribute for anchor navigation.

### Example
```html
<!-- Good -->
<section id="about" class="section">
    <div class="container">
        <h3>About Us</h3>
        <p>...</p>
    </div>
</section>

<!-- Bad -->
<div id="s1">
    <div><h3>About Us</h3><p>...</p></div>
</div>
```

---

## CSS Standards

- Use CSS custom properties (variables) for all repeating values (colors, radii, spacing tokens).
- Follow a mobile-first approach; use `min-width` media queries.
- Group properties logically: positioning → box model → typography → visual → misc.
- Do not use `!important` except as a last resort (and document why).
- Class names must be lowercase, hyphenated BEM-inspired: `.site-header`, `.menu-grid`, `.card`.
- Avoid inline styles in HTML.
- Remove unused CSS rules before committing.

---

## JavaScript Standards

- Use `const` by default; use `let` only when reassignment is needed. Never use `var`.
- Prefer vanilla JS; do not add a framework unless the project requirements change significantly.
- Guard DOM queries before using them:
  ```js
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
  ```
- Keep the JS file focused on behavior only; no styling logic in JS.
- Use meaningful variable names; avoid single-letter names outside loop counters.
- Add a comment only when the *why* is non-obvious, not the *what*.

---

## File Organization

```
/
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
├── docs/           ← governance documents
├── index.html
└── README.md
```

- One CSS file and one JS file for this project (split only if the site grows significantly).
- Images go in `assets/images/` when added.
- Governance and documentation goes in `docs/`.

---

## Git Commit Standards

- Write commit messages in the imperative mood: "Add hero section", "Fix nav link color".
- Keep the subject line under 72 characters.
- Reference issue numbers when applicable: `Fix CTA button color (#12)`.
- Do not commit build artifacts, editor config, or OS files (`.DS_Store`, `Thumbs.db`, `.vscode/`).

---

## Checklist for Clean Code Compliance

- [ ] Semantic HTML5 elements used throughout
- [ ] Indentation is 4 spaces, consistent throughout all files
- [ ] CSS uses only defined custom property tokens for colors
- [ ] No `var` declarations in JavaScript
- [ ] No inline styles in HTML
- [ ] Unused code (HTML, CSS, JS) is removed
- [ ] Commit messages follow imperative-mood convention
- [ ] No IDE/OS artifacts committed (`.DS_Store`, etc.)

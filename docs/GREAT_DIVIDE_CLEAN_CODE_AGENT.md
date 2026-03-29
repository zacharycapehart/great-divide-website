# Great Divide Clean Code Agent

## Purpose

The Clean Code Agent ensures that all source files in the Great Divide Restaurant website are
readable, maintainable, and follow consistent style conventions so that any contributor can
quickly understand and extend the codebase.

## Standards

### HTML (`index.html`)

- [ ] Indentation is consistent: **4 spaces** (no tabs).
- [ ] All elements are properly nested and closed.
- [ ] Semantic HTML5 elements are used where appropriate
  (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`).
- [ ] `id` and `class` names are lowercase-kebab-case (e.g. `site-header`, `menu-grid`).
- [ ] No commented-out dead code is left in production files.
- [ ] No inline `style=""` attributes; all styling lives in `assets/css/styles.css`.

### CSS (`assets/css/styles.css`)

- [ ] CSS custom properties (variables) are declared in `:root` and referenced throughout.
- [ ] Selectors target classes or elements—no `#id` selectors used for styling.
- [ ] No `!important` declarations unless absolutely unavoidable and documented.
- [ ] Properties within a rule are ordered logically (e.g. layout → box-model → typography →
  visual → misc).
- [ ] Media queries are grouped at the bottom of the file.
- [ ] No duplicate property declarations within the same rule.

### JavaScript (`assets/js/script.js`)

- [ ] `const` is used by default; `let` only where reassignment is needed; `var` is not used.
- [ ] Functions are small and single-purpose.
- [ ] No `console.log` or debug statements left in production code.
- [ ] Event listeners are cleaned up if elements are removed from the DOM.
- [ ] No global namespace pollution (wrap logic in a module or IIFE if the file grows).

### General

- [ ] No trailing whitespace at end of lines.
- [ ] Files end with a single newline character.
- [ ] No files larger than 500 lines without a documented reason.

## How This Agent Works

1. **Triggered on:** Any pull request that modifies HTML, CSS, or JS files.
2. **Action:** Reviews diffs against this checklist and suggests corrections.
3. **Pass criteria:** All checklist items are met; exceptions are documented with a comment.

# Great Divide UX Agent

## Purpose

The UX Agent ensures that the Great Divide Restaurant website delivers an intuitive, accessible,
and delightful experience for all visitors across devices and assistive technologies.

## UX Standards

### Navigation

- [ ] The navigation is keyboard-accessible (Tab → Enter/Space activates links).
- [ ] The active/current page or section is visually indicated.
- [ ] A "skip to main content" link is present (or will be added when JavaScript grows).
- [ ] On mobile, the navigation collapses or stacks gracefully without overlapping content.

### Readability & Typography

- [ ] Body text contrast ratio is at least **4.5:1** (WCAG AA) against its background.
- [ ] Minimum body font size is `1rem` (16px equivalent); no text below `0.75rem` except
  decorative/eyebrow labels which must still meet contrast.
- [ ] Line length (measure) stays within 55–80 characters for comfortable reading.
- [ ] Line height (`line-height`) is at least `1.5` for body copy.

### Interactive Elements

- [ ] All clickable elements have a visible focus ring (`:focus` or `:focus-visible` styles are
  not suppressed).
- [ ] Buttons and links have a minimum touch target of **44×44px** on mobile.
- [ ] Hover states are defined for all interactive elements.
- [ ] Call-to-action ("Reserve a Table") is above the fold on desktop.

### Accessibility (a11y)

- [ ] All images have meaningful `alt` text (or `alt=""` for decorative images).
- [ ] `<nav>` has an `aria-label` (e.g. `aria-label="Main navigation"`).
- [ ] Page language is declared: `<html lang="en">`.
- [ ] Color alone is never the only means of conveying information.
- [ ] No content flashes more than 3 times per second (no seizure risk).

### Responsive Design

- [ ] Site is fully usable at viewport widths from **320px** to **1440px**.
- [ ] No horizontal scroll is introduced at any standard breakpoint.
- [ ] Images and media scale within their containers (`max-width: 100%`).

## How This Agent Works

1. **Triggered on:** Any pull request that modifies `index.html` or `assets/css/styles.css`.
2. **Action:** Reviews diffs against this checklist; flags accessibility regressions.
3. **Pass criteria:** No WCAG AA violations; all checklist items are met or have an approved
   exception.

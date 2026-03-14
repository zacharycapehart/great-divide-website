# Great Divide UX Agent

## Purpose
This document defines the User Experience (UX) and accessibility standards for the Great Divide Restaurant website. Every visitor — regardless of device, browser, or ability — should have a clear, comfortable experience.

---

## Accessibility (WCAG 2.1 AA)

### Color Contrast
- Normal text (< 18pt): minimum 4.5:1 contrast ratio against its background.
- Large text (≥ 18pt or bold 14pt): minimum 3:1.
- Interactive elements (buttons, links) must meet at least 3:1 against adjacent colors.
- Use a tool like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify.

### Keyboard Navigation
- All interactive elements (links, buttons, form fields) must be reachable and operable via keyboard alone.
- Visible focus indicator must be present on all focusable elements. Do not remove the default `:focus` outline without providing a clear custom replacement.
- Tab order must match the visual reading order.
- The skip-to-content link (`<a href="#main-content" class="skip-link">`) is recommended for multi-section pages.

### Screen Reader Support
- All images must have descriptive `alt` text.
- Navigation landmark (`<nav>`) must have an `aria-label` (e.g., `aria-label="Main navigation"`).
- Interactive controls must have accessible names (via visible label, `aria-label`, or `aria-labelledby`).
- Use `role` attributes only when a native semantic element is unavailable.

### Motion & Animation
- Respect `prefers-reduced-motion` for any CSS transitions or JS animations:
  ```css
  @media (prefers-reduced-motion: reduce) {
      * { animation: none !important; transition: none !important; }
  }
  ```

---

## Responsive Design

- The layout must be fully usable at all viewport widths from 320 px upward.
- The sticky header must not obscure page content when navigating to anchor links; apply a `scroll-margin-top` offset on section targets.
- Touch targets (buttons, links) must be at least 44 × 44 px on mobile.
- Font sizes must not be fixed in `px` where they prevent browser zoom from working correctly; prefer `rem` or `em`.

---

## Navigation UX

- The primary navigation must clearly indicate the current section (via scroll-based active state or visual cue).
- On mobile (≤ 700 px), navigation items must remain tappable without overflow or overlap.
- All navigation links must accurately reflect the page sections they link to.

---

## Content Readability

- Maximum line length for body copy: ~70–80 characters (use `max-width` on text containers).
- Line height for body copy: minimum `1.5` (currently `1.6` — maintain or increase).
- Use clear visual hierarchy: eyebrow → heading → body → CTA.
- CTAs must describe the action (e.g., "Reserve a Table"), not generic labels ("Click here").

---

## Error & Empty States

- If a form is added, provide inline validation feedback near each field.
- Error messages must identify the field, explain the problem, and suggest a fix.
- Do not rely on color alone to communicate errors.

---

## Checklist for UX Compliance

- [ ] Color contrast meets WCAG AA minimums (4.5:1 normal text, 3:1 large text)
- [ ] All interactive elements are keyboard-navigable
- [ ] Visible focus indicator is present
- [ ] `<nav>` has a descriptive `aria-label`
- [ ] All images have meaningful `alt` text
- [ ] Layout is tested and functional at 320 px, 768 px, and 1280 px viewports
- [ ] Touch targets are at least 44 × 44 px on mobile
- [ ] CTAs use descriptive, action-oriented text
- [ ] `prefers-reduced-motion` is respected if animations are added
- [ ] Scroll-margin offset added to anchor sections if sticky header is present

# Great Divide UX Agent

## Role

Audit the Great Divide website for user experience quality. Do **not** redesign; identify friction points and suggest focused improvements.

---

## Navigation

- [ ] Logo links back to the top of the page (`#home`) ✓
- [ ] All navigation links scroll smoothly to their target sections ✓
- [ ] Active section is highlighted in the navigation (scroll spy) ✓
- [ ] Mobile navigation opens/closes cleanly with the hamburger button ✓
- [ ] Navigation closes automatically after a link is tapped on mobile ✓
- [ ] Skip link present and functional for keyboard users ✓

---

## Hero / First Impression

- [ ] Primary action (Reserve a Table) is the most visually prominent element after the headline
- [ ] Hero headline is direct and communicates the restaurant's value proposition immediately
- [ ] Eyebrow label reinforces positioning ("Farm to Table") ✓
- [ ] Page loads with content visible above the fold on all common viewport sizes

---

## Menu Section

- [ ] Tabs are keyboard accessible (arrow key navigation recommended enhancement)
- [ ] Active tab state is visually distinct ✓
- [ ] Menu items display name, description, and price ✓
- [ ] Dietary tags (Vegetarian, Vegan, 0% ABV) are visible ✓
- [ ] Menu note about seasonal changes sets expectations ✓
- [ ] Tab panels update without full page reload ✓

---

## Visit / Contact

- [ ] Address is displayed in `<address>` semantic element ✓
- [ ] Phone number is a `tel:` link (tappable on mobile) ✓
- [ ] Email is a `mailto:` link ✓
- [ ] Hours are formatted in a scannable definition list ✓
- [ ] "Closed Monday" is explicitly stated ✓
- [ ] CTA button ("Call to Reserve") is present in the Visit section ✓

---

## Accessibility

- [ ] Color contrast meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
  - Accent `#8b3f2f` on white `#ffffff` — verify with a contrast checker
- [ ] All interactive elements have visible `:focus-visible` styles ✓
- [ ] ARIA roles and labels are present on landmark regions ✓
- [ ] Tab order follows visual reading order
- [ ] Images (if added) have meaningful `alt` attributes
- [ ] Menu tabs use full ARIA tab pattern: `role="tab"`, `aria-selected`, `aria-controls` ✓
- [ ] Tab panels use `role="tabpanel"`, `hidden` attribute ✓

---

## Mobile Experience

- [ ] Touch targets are at least 44×44px (buttons, nav links)
- [ ] No horizontal scroll on narrow viewports
- [ ] Font sizes remain readable (minimum 16px for body text recommended)
- [ ] Hero actions stack vertically on small screens ✓
- [ ] Menu grid reflows to a single column on small screens ✓

---

## Microcopy & Content UX

- [ ] CTAs are action-oriented ("Reserve a Table", "Call to Reserve", "View Menu")
- [ ] Error states for any future forms should use inline, specific messages
- [ ] Placeholder text in any future inputs should not replace labels

---

## Audit Checklist

- [ ] All internal links are functional
- [ ] Mobile nav opens and closes correctly
- [ ] Menu tabs switch panels correctly
- [ ] Keyboard navigation works throughout
- [ ] No content is hidden or inaccessible via keyboard
- [ ] Contrast ratios meet WCAG AA
- [ ] Page is usable without JavaScript (progressive enhancement)

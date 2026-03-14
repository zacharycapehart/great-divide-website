# Great Divide UX Agent

## Purpose
Ensure the Great Divide Restaurant website delivers an outstanding user experience — intuitive navigation, accessible content, and a frictionless path from landing to reservation.

---

## Core UX Principles

1. **Clarity** – Visitors understand what the restaurant is and how to visit within 5 seconds of landing.
2. **Accessibility** – The site is usable by people of all abilities and on all devices.
3. **Speed** – Perceived and actual performance is optimized.
4. **Trust** – The site looks professional, up-to-date, and genuine.
5. **Conversion** – Every page guides the visitor toward making a reservation or visiting in person.

---

## User Goals (Primary Personas)

| Persona | Goal | Key Touchpoint |
|---------|------|----------------|
| New visitor | Find out what the restaurant is like | Hero section, About section |
| Returning guest | Check hours or reserve a table | Visit/Contact section |
| Mobile browser | Quickly find address or phone number | Visit section, footer |
| Food explorer | Browse the menu | Menu section |

---

## Navigation

- [ ] Navigation is sticky — always accessible while scrolling.
- [ ] Active section is visually highlighted in the nav (scroll spy or static).
- [ ] Mobile navigation is usable with thumb reach.
- [ ] Skip-to-content link provided for keyboard/screen reader users.
- [ ] All nav links are descriptive (no "click here").

---

## Hero Section

- [ ] Headline clearly communicates the restaurant's identity.
- [ ] Supporting copy provides context (cuisine type, vibe, occasion).
- [ ] A single, prominent CTA ("Reserve a Table") is above the fold on all devices.
- [ ] Hero is visually engaging without overwhelming text.

---

## Content Sections

### About
- [ ] Conveys personality and values in 2–4 sentences.
- [ ] Avoids corporate boilerplate language.

### Menu
- [ ] Menu highlights are easy to scan.
- [ ] Uses a readable card-based or list layout.
- [ ] Seasonal/rotating nature of menu is communicated.
- [ ] Allergen or dietary preference callouts provided if applicable.

### Visit
- [ ] Address is clickable and links to Google Maps.
- [ ] Phone number is a `tel:` link for mobile tap-to-call.
- [ ] Hours are displayed clearly; day ranges are unambiguous.
- [ ] Reservation option (link, phone, or embedded form) is prominent.

---

## Accessibility (WCAG 2.1 AA)

- [ ] All images have descriptive `alt` text.
- [ ] Color contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text.
- [ ] All interactive elements are focusable and have visible focus styles.
- [ ] Page is navigable by keyboard alone.
- [ ] Screen reader landmarks used (`<header>`, `<nav>`, `<main>`, `<footer>`).
- [ ] No flashing content (photosensitive epilepsy risk).
- [ ] Text resizes up to 200% without loss of content or functionality.

---

## Responsive Design

- [ ] Layout is fully functional at 320px, 768px, and 1200px widths.
- [ ] No horizontal scrollbar on mobile.
- [ ] Touch targets are at least 44×44px.
- [ ] Font sizes are legible on mobile without pinch-to-zoom.
- [ ] Images scale correctly and are not cropped awkwardly.

---

## Interaction Design

- [ ] Button and link hover states are visible and consistent.
- [ ] CTA button has sufficient contrast and stands out visually.
- [ ] Smooth scroll behavior for in-page anchor links.
- [ ] Footer copyright year updates automatically.
- [ ] Page does not shift layout on scroll (no cumulative layout shift).

---

## UX Audit Checklist

| Category | Check | Status |
|----------|-------|--------|
| First impression | Value prop clear in 5 sec | ☐ |
| Navigation | Sticky and accessible | ☐ |
| CTA | Prominent reservation/visit action | ☐ |
| Mobile | Usable at 320px | ☐ |
| Accessibility | WCAG 2.1 AA compliant | ☐ |
| Performance | LCP < 2.5s | ☐ |
| Trust signals | Hours, phone, address visible | ☐ |

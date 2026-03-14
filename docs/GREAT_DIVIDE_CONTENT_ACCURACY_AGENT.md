# Great Divide Content Accuracy Agent

## Purpose

The Content Accuracy Agent ensures that all publicly visible text on the Great Divide Restaurant
website is factually correct, up to date, and consistent with the restaurant's actual details
(address, hours, phone number, menu items, and promotional copy).

## Content Standards

### Contact & Location Information

- [ ] The street address shown on the website matches the restaurant's current operating address.
- [ ] The city, state/province, and postal code are present and correct.
- [ ] The phone number is current and formatted consistently (e.g. `(555) 123-4567`).
- [ ] A map link or embed, if present, points to the correct physical location.

### Hours of Operation

- [ ] Operating days and times match the restaurant's current schedule.
- [ ] Holiday or seasonal hours exceptions are noted if applicable.
- [ ] The hours are expressed in a consistent format (e.g. `Tue–Sun 11:00 AM – 10:00 PM`).

### Menu Content

- [ ] Menu items listed are currently offered (or clearly marked as seasonal/limited).
- [ ] Dish names are spelled correctly and consistently.
- [ ] No allergen claims or dietary labels (vegan, gluten-free, etc.) are displayed unless
  verified with the kitchen.
- [ ] Prices, if shown, reflect the current menu.

### Promotional Copy

- [ ] Any limited-time offers or events reference accurate dates.
- [ ] Past events or expired promotions are removed promptly.
- [ ] Superlatives ("best in the city") are used sparingly and only when substantiated.

### Legal & Compliance

- [ ] The copyright year in the footer matches the current year (auto-updated via JavaScript).
- [ ] Any third-party trademarks or brand names in the copy are used appropriately.
- [ ] No content makes unsubstantiated health or nutritional claims.

## Review Cadence

| Trigger | Reviewer |
|---------|----------|
| Any PR modifying `index.html` | Content Accuracy Agent |
| Quarterly review | Restaurant owner or content manager |
| Menu season change | Restaurant owner or content manager |

## How This Agent Works

1. **Triggered on:** Any pull request that modifies `index.html` or content-bearing files.
2. **Action:** Compares visible text against the checklist above and flags outdated or
   inconsistent information.
3. **Pass criteria:** All factual data matches verified restaurant information and no expired
   content is present.

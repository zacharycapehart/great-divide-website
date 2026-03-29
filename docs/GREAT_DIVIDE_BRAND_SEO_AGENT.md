# Great Divide Brand SEO Agent

## Purpose

The Brand SEO Agent ensures that the Great Divide Restaurant website is optimized for local and
organic search so that diners can discover the restaurant when searching for nearby dining options.

## SEO Standards

### Required Meta Tags (per page)

| Tag | Required Value / Pattern |
|-----|--------------------------|
| `<title>` | Includes "Great Divide Restaurant" + location keyword |
| `<meta name="description">` | 120–160 characters; includes restaurant name and key offering |
| `<meta name="viewport">` | `width=device-width, initial-scale=1.0` |
| `<html lang="...">` | Language attribute set (e.g. `lang="en"`) |

### Heading Hierarchy

- [ ] One `<h1>` per page (the brand name).
- [ ] Sections use `<h2>` or lower; no heading levels are skipped.

### Local SEO

- [ ] Full street address, city, and state/province are present on the page.
- [ ] Phone number is present and formatted consistently.
- [ ] Operating hours are present.
- [ ] A `<footer>` or contact section carries structured address info.

### Performance-Related SEO

- [ ] Images (if added) have descriptive `alt` attributes.
- [ ] All internal links use relative paths.
- [ ] No broken anchor targets (every `href="#id"` has a matching element with that `id`).

### Content Keywords

Focus keywords for organic search:
- "Great Divide Restaurant"
- "farm to table [city]"
- "seasonal restaurant [city]"
- "local restaurant brunch lunch dinner"

- [ ] At least one focus keyword appears in the page `<title>`.
- [ ] At least one focus keyword appears naturally in the first paragraph of the hero section.
- [ ] Keywords are **not** stuffed; prose reads naturally.

## How This Agent Works

1. **Triggered on:** Any pull request that modifies `index.html`.
2. **Action:** Validates meta tags, heading hierarchy, and keyword presence against this checklist.
3. **Pass criteria:** All required fields are present and no keyword stuffing is detected.

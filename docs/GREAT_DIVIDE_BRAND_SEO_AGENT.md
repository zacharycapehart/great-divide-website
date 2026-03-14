# Great Divide Brand SEO Agent

## Purpose
This document defines the Search Engine Optimization (SEO) standards for the Great Divide Restaurant website. Following these guidelines ensures the site ranks well in local search and accurately represents the restaurant to search engines and users.

---

## On-Page SEO Requirements

### Title Tag
- Format: `{Page Name} | Great Divide Restaurant`
- For the home page: `Great Divide Restaurant – Farm to Table Dining`
- Keep under 60 characters.

### Meta Description
- Clearly describe the page content and include a call to action.
- Keep between 140–160 characters.
- Include at least one local keyword (e.g., the city or neighborhood name once confirmed).
- Example: `Great Divide Restaurant serves fresh seasonal dishes in a warm, modern setting. Reserve your table today.`

### Heading Hierarchy
- One `<h1>` per page (the logo/brand name counts as the visual brand but the main page heading must be a proper `<h2>` or `<h1>` within `<main>`).
- Subheadings must follow logical order: `h1 → h2 → h3 → h4`.
- Include primary keywords naturally in at least one heading.

### Image Alt Text
- Every `<img>` must have a descriptive `alt` attribute.
- Do not leave `alt=""` unless the image is purely decorative.
- Format: describe subject and context (e.g., `alt="Grilled salmon with seasonal vegetables at Great Divide Restaurant"`).

---

## Local SEO

- Include the full business address in the `#visit` section using proper semantic markup.
- Add `<address>` element around contact/location details.
- Recommended: Add a JSON-LD `LocalBusiness` structured data block in `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Great Divide Restaurant",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Your City",
    "addressRegion": "ST",
    "postalCode": "00000"
  },
  "telephone": "(555) 123-4567",
  "openingHours": ["Tu-Su 11:00-22:00"],
  "servesCuisine": "American, Farm to Table"
}
</script>
```

---

## Technical SEO

- `<html lang="en">` must be present on every page.
- The site must be mobile-responsive (viewport meta tag required).
- No broken internal links (`<a href="#">` placeholders should be resolved before launch).
- Canonical URL tag recommended once the domain is live.
- `robots.txt` and `sitemap.xml` should be added before launch.

---

## Keyword Strategy

| Target Keyword                       | Placement                   |
|--------------------------------------|-----------------------------|
| "Great Divide Restaurant"            | Title, H1, meta description |
| "Farm to Table"                      | Eyebrow, about section      |
| "Seasonal ingredients"               | About/hero body copy        |
| "Reserve a table [city]"             | CTA button, visit section   |

---

## Checklist for SEO Compliance

- [ ] Title tag is present, under 60 chars, and includes the restaurant name
- [ ] Meta description is 140–160 chars and includes a local keyword
- [ ] Heading hierarchy is logical (no skipped levels)
- [ ] All images have descriptive `alt` attributes
- [ ] Address is in the `#visit` section (and ideally wrapped in `<address>`)
- [ ] JSON-LD structured data block is in `<head>`
- [ ] `lang="en"` attribute is set on `<html>`
- [ ] No placeholder `href="#"` links remain on production

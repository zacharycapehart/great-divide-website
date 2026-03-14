# Great Divide SEO Agent

## Role

Audit the Great Divide website for search engine optimization best practices. Do **not** rewrite content; flag gaps and suggest improvements.

---

## On-Page SEO Standards

### `<head>` Requirements

- [ ] `<title>` tag is present, unique, and under 60 characters
  - Current: `Great Divide Restaurant | Farm to Table Dining`
- [ ] `<meta name="description">` is present and under 160 characters
- [ ] `<meta name="keywords">` is present (supporting signal)
- [ ] Open Graph tags: `og:title`, `og:description`, `og:type` are present
- [ ] `<html lang="en">` is set
- [ ] `<link rel="canonical">` should be added when hosted on a live domain

### Heading Hierarchy

- [ ] One `<h1>` per page — currently the hero heading
- [ ] `<h2>` used for section headings (About, Menu, Visit)
- [ ] `<h3>` used for sub-headings within sections (menu item names, contact sub-sections)
- [ ] No heading levels are skipped

### Structured Data

Consider adding `application/ld+json` structured data for:

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Great Divide Restaurant",
  "description": "Farm-to-table restaurant in Denver, CO.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1840 Ridgeline Avenue",
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "postalCode": "80203",
    "addressCountry": "US"
  },
  "telephone": "+17205550182",
  "openingHours": [
    "Tu-Th 11:30-21:30",
    "Fr-Sa 11:30-22:30",
    "Su 10:00-21:00"
  ],
  "servesCuisine": "American",
  "priceRange": "$$"
}
```

---

## Performance & Crawlability

- [ ] `robots.txt` is present at the domain root
- [ ] `sitemap.xml` is present (even for single-page sites)
- [ ] No `noindex` meta tags are present unintentionally
- [ ] All internal links use descriptive anchor text (not "click here")
- [ ] Images have descriptive `alt` attributes

---

## Local SEO

- [ ] NAP (Name, Address, Phone) is consistent across the page and any local listings
- [ ] Address is in `<address>` semantic element ✓
- [ ] Phone number uses `tel:` link ✓
- [ ] Claim and keep up to date: Google Business Profile, Yelp, TripAdvisor

---

## Audit Checklist

- [ ] Title tag present and under 60 chars
- [ ] Meta description present and under 160 chars
- [ ] Single H1 on the page
- [ ] No broken internal links
- [ ] Structured data (Restaurant schema) added
- [ ] robots.txt created at domain root
- [ ] sitemap.xml created at domain root
- [ ] Images have meaningful alt text
- [ ] Page loads in under 3 seconds (Core Web Vitals)

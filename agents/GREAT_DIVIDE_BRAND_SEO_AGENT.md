# Great Divide SEO Agent

## Purpose
Ensure the Great Divide Restaurant website follows SEO best practices to maximize organic visibility, local search ranking, and click-through rates.

---

## Target Keywords

### Primary
- `Great Divide Restaurant`
- `farm to table restaurant`
- `seasonal dining [city]`

### Secondary
- `locally sourced ingredients restaurant`
- `neighborhood restaurant [city]`
- `best brunch [city]`
- `weekend brunch [city]`

### Long-tail
- `farm to table restaurant near me`
- `locally sourced dinner [city]`
- `seasonal menu restaurant [city]`

---

## On-Page SEO Requirements

### `<head>` Tags
```html
<!-- Required -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Great Divide Restaurant – Farm to Table Dining in [City]</title>
<meta name="description" content="Great Divide Restaurant offers seasonal farm-to-table dishes in [City]. Join us for lunch, dinner, and weekend brunch. Reserve your table today.">

<!-- Open Graph (Social Sharing) -->
<meta property="og:title" content="Great Divide Restaurant">
<meta property="og:description" content="Farm-to-table seasonal dining in [City]. Fresh ingredients, bold flavors.">
<meta property="og:type" content="restaurant.restaurant">
<meta property="og:url" content="https://www.greatdividerestaurant.com">
<meta property="og:image" content="assets/images/og-image.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Great Divide Restaurant">
<meta name="twitter:description" content="Farm-to-table seasonal dining in [City].">
```

### Heading Hierarchy
- One `<h1>` per page (site name or primary page headline).
- `<h2>` for major section headings.
- `<h3>` for subsections.
- Never skip heading levels.

### URL Structure
- Use descriptive, hyphenated slugs: `/menu`, `/about`, `/contact`
- No query strings in page URLs.
- Prefer lowercase.

---

## Local SEO

### Google Business Profile
- Ensure NAP (Name, Address, Phone) is consistent across all platforms.
- Claim and verify Google Business Profile.
- Encourage guest reviews on Google.

### Structured Data (Schema.org)
Add `Restaurant` schema to `index.html`:
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Great Divide Restaurant",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[ZIP]"
  },
  "telephone": "(555) 123-4567",
  "openingHours": ["Tu-Su 11:00-22:00"],
  "servesCuisine": "American",
  "priceRange": "$$",
  "url": "https://www.greatdividerestaurant.com"
}
```

---

## Technical SEO

- [ ] Page loads under 3 seconds (mobile and desktop).
- [ ] Mobile-responsive layout confirmed.
- [ ] All images have descriptive `alt` attributes.
- [ ] No broken links (404 errors).
- [ ] `robots.txt` file present (for multi-page sites).
- [ ] `sitemap.xml` generated and submitted to Google Search Console.
- [ ] HTTPS enforced (no mixed content warnings).
- [ ] Canonical tags present if duplicate content risk exists.

---

## Content SEO

- [ ] Each section heading naturally includes target keywords.
- [ ] Meta description is between 150–160 characters.
- [ ] Page title is under 60 characters.
- [ ] Internal links connect related sections.
- [ ] NAP information is in text format (not image).
- [ ] Menu items use descriptive language reflecting ingredients.

# Great Divide Performance Agent

## Purpose
This document defines the performance standards for the Great Divide Restaurant website. Fast load times improve visitor satisfaction, reduce bounce rate, and support SEO rankings.

---

## Performance Targets

| Metric                          | Target         |
|---------------------------------|----------------|
| Largest Contentful Paint (LCP)  | ≤ 2.5 s        |
| First Input Delay (FID)         | ≤ 100 ms       |
| Cumulative Layout Shift (CLS)   | ≤ 0.1          |
| Total Page Weight               | ≤ 500 KB       |
| Lighthouse Performance Score    | ≥ 90           |

Measure with [Google PageSpeed Insights](https://pagespeed.web.dev/) or Lighthouse in Chrome DevTools before each significant release.

---

## HTML

- Keep the HTML document lean; avoid deeply nested wrappers.
- Place `<link rel="stylesheet">` in `<head>` to avoid render blocking.
- Place `<script>` tags just before `</body>` (or use `defer`/`async`) to avoid blocking parsing.
- Minify HTML for production (use a build step or hosting-level compression if possible).

---

## CSS

- Keep `styles.css` focused; remove unused rules.
- Avoid large, complex selectors that slow style recalculation.
- Use CSS custom properties (already in place) to avoid duplicate values.
- Do not import additional CSS files from within `styles.css` (use `<link>` in HTML if needed, or consolidate).
- Minify CSS for production.

---

## JavaScript

- The site currently has minimal JS (footer year). Keep it that way unless functionality requires more.
- Use `defer` attribute on script tags to prevent render blocking:
  ```html
  <script src="assets/js/script.js" defer></script>
  ```
- Never block the main thread with synchronous network requests or heavy computations.
- Minify JS for production.

---

## Images

When images are added to the site:
- Use modern formats: **WebP** (with JPEG/PNG fallback via `<picture>`).
- Always specify `width` and `height` attributes to prevent layout shift (CLS).
- Use `loading="lazy"` on images below the fold.
- Compress images before committing (target < 150 KB per image; < 80 KB for thumbnails).
- Use responsive images with `srcset` for different screen densities.

```html
<picture>
  <source srcset="assets/images/hero.webp" type="image/webp">
  <img src="assets/images/hero.jpg" alt="..." width="1200" height="600" loading="lazy">
</picture>
```

---

## Fonts

- The current font stack is system fonts (Arial, Helvetica, sans-serif) — this is ideal for performance. Maintain this unless a custom font is required.
- If a custom web font is added:
  - Use `font-display: swap`.
  - Subset the font to only needed characters.
  - Self-host if possible; otherwise use `preconnect` for third-party origins.
  - Limit to 1–2 font families with a maximum of 2 weights each.

---

## Caching & Hosting

- Enable GZIP or Brotli compression on the server.
- Set long-lived cache headers (`Cache-Control: max-age=31536000, immutable`) for versioned static assets.
- Use a CDN for image delivery when the site receives significant traffic.

---

## Checklist for Performance Compliance

- [ ] Lighthouse Performance score ≥ 90
- [ ] LCP ≤ 2.5 s, CLS ≤ 0.1
- [ ] `<script>` tags use `defer` attribute
- [ ] CSS and JS are minified in production
- [ ] Images use WebP format with fallback
- [ ] Images have `width`, `height`, and `loading="lazy"` attributes
- [ ] System font stack maintained (or custom fonts properly optimized)
- [ ] Unused CSS rules removed
- [ ] GZIP/Brotli compression enabled on hosting

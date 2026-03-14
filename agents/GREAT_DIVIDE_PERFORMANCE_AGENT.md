# Great Divide Performance Agent

## Purpose
Ensure the Great Divide Restaurant website meets modern web performance standards, delivering fast load times and a smooth experience on all devices and network conditions.

---

## Performance Targets (Core Web Vitals)

| Metric | Target | Description |
|--------|--------|-------------|
| **LCP** (Largest Contentful Paint) | < 2.5 s | Time to render the largest visible content |
| **FID** (First Input Delay) | < 100 ms | Time from first interaction to browser response |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Visual stability — no unexpected layout shifts |
| **FCP** (First Contentful Paint) | < 1.8 s | Time to render any content |
| **TTFB** (Time to First Byte) | < 800 ms | Server response time |
| **Total Page Weight** | < 500 KB | Total compressed asset size |

---

## HTML Performance

- [ ] `<!DOCTYPE html>` declared.
- [ ] Critical CSS is minimal and inlined (or loaded without render-blocking).
- [ ] `<link rel="stylesheet">` in `<head>` (not `<body>`).
- [ ] `<script>` tags placed before `</body>` or use `defer`/`async`.
- [ ] No render-blocking third-party scripts.

---

## CSS Performance

- [ ] Single stylesheet file for the site.
- [ ] No unused CSS rules (audit with browser DevTools Coverage tab).
- [ ] CSS file is minified for production.
- [ ] No `@import` inside CSS files (prefer `<link>` tags).
- [ ] Animations use `transform` and `opacity` (GPU-composited), not `top`/`left`.
- [ ] `will-change` used sparingly and only when measurable benefit is confirmed.

---

## JavaScript Performance

- [ ] JS file is minified for production.
- [ ] Script uses `defer` attribute:
  ```html
  <script src="assets/js/script.js" defer></script>
  ```
- [ ] No synchronous JavaScript in `<head>`.
- [ ] No unnecessary framework or library loaded (vanilla JS preferred for simple interactions).

---

## Image Performance (Future)

When images are added to the site:
- [ ] Images are in modern formats: **WebP** (primary), JPEG/PNG as fallback.
- [ ] Images are appropriately sized — serve different sizes with `srcset`:
  ```html
  <img src="hero.webp" srcset="hero-480.webp 480w, hero-1200.webp 1200w"
       sizes="(max-width: 600px) 480px, 1200px" alt="...">
  ```
- [ ] Images have explicit `width` and `height` attributes to prevent CLS.
- [ ] Hero image uses `loading="eager"`; below-fold images use `loading="lazy"`.
- [ ] Image file sizes are optimized (compress before uploading).

---

## Caching & Delivery

- [ ] Static assets are served with long-lived cache headers (`Cache-Control: max-age=31536000`).
- [ ] HTML is served with `Cache-Control: no-cache` (revalidation on each visit).
- [ ] Assets are served from a CDN when hosted on platforms like Netlify, Vercel, or GitHub Pages.
- [ ] Gzip or Brotli compression enabled on the server/CDN.

---

## Font Performance

If web fonts are added:
- [ ] Use `font-display: swap` to prevent invisible text during load.
- [ ] Subset fonts to required character sets.
- [ ] Preload critical fonts:
  ```html
  <link rel="preload" href="assets/fonts/font.woff2" as="font" type="font/woff2" crossorigin>
  ```
- [ ] Limit to 2 font families; prefer system fonts where possible.

---

## Performance Audit Checklist

| Tool | Usage |
|------|-------|
| Google PageSpeed Insights | Run on production URL monthly |
| Lighthouse (Chrome DevTools) | Run before each deployment |
| WebPageTest | Use for waterfall analysis on performance regressions |
| Chrome DevTools Coverage | Identify unused CSS/JS |

### Pre-Deployment Checks
- [ ] Lighthouse Performance score ≥ 90 (mobile and desktop).
- [ ] No render-blocking resources flagged by Lighthouse.
- [ ] Total page weight < 500 KB uncompressed.
- [ ] All images have width/height attributes.
- [ ] Scripts use `defer` or `async`.

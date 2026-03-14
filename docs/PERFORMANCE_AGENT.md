# Great Divide Performance Agent

## Role

Audit the Great Divide website for loading performance and runtime efficiency. Do **not** add build tooling unless requested; focus on what can be done in a plain static site.

---

## Asset Loading

- [ ] CSS is loaded in `<head>` to avoid flash of unstyled content ✓
- [ ] JavaScript is loaded at the end of `<body>` to avoid render blocking ✓
- [ ] No render-blocking external fonts are loaded (currently using system fonts) ✓
- [ ] No external CDN dependencies (jQuery, Bootstrap, etc.) ✓

---

## Image Optimization (when images are added)

- [ ] Use modern formats: WebP with JPEG fallback
- [ ] Provide `srcset` and `sizes` attributes for responsive images
- [ ] All images have explicit `width` and `height` attributes to prevent layout shift (CLS)
- [ ] Hero image (if added) should be preloaded: `<link rel="preload" as="image" href="...">`
- [ ] Decorative images use `alt=""` and `role="presentation"` to skip screen readers

---

## Core Web Vitals Targets

| Metric | Target | Notes |
|--------|--------|-------|
| LCP (Largest Contentful Paint) | < 2.5s | Hero section content should render quickly |
| FID / INP (Interaction to Next Paint) | < 200ms | JS is minimal; should not be an issue |
| CLS (Cumulative Layout Shift) | < 0.1 | Set explicit dimensions on any images added |
| TTFB (Time to First Byte) | < 600ms | Depends on hosting provider |

---

## CSS Performance

- [ ] CSS uses `min()` / `clamp()` for responsive sizing instead of many breakpoints ✓
- [ ] `position: sticky` on the header — ensure no layout thrashing in JS ✓
- [ ] Transitions use `transform` and `opacity` where possible (GPU composited)
- [ ] No large unused CSS blocks

---

## JavaScript Performance

- [ ] Scroll event listener uses `{ passive: true }` ✓
- [ ] No expensive DOM queries inside scroll/resize handlers (query once, cache) ✓
- [ ] No synchronous `XMLHttpRequest` or blocking operations
- [ ] Total JS is minimal (~70 lines) ✓

---

## Caching & Hosting

- [ ] Static assets should be served with long `Cache-Control` headers (e.g., `max-age=31536000, immutable` for versioned files)
- [ ] `index.html` should use a shorter cache duration (e.g., `max-age=3600`) to allow content updates
- [ ] Enable HTTP/2 or HTTP/3 at the host level
- [ ] Enable gzip or Brotli compression at the host level

---

## Audit Checklist

- [ ] Google PageSpeed Insights score ≥ 90 (mobile and desktop)
- [ ] No render-blocking resources
- [ ] No unused CSS > 20% of total stylesheet
- [ ] Total page weight < 200 KB uncompressed (currently ~6 KB without images) ✓
- [ ] LCP < 2.5s on a simulated mid-tier mobile device
- [ ] CLS < 0.1 — no layout shifts on load
- [ ] All images (when added) are compressed and responsive

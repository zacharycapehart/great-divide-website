# Great Divide Performance Agent

## Purpose

The Performance Agent ensures that the Great Divide Restaurant website loads quickly and remains
snappy on all connections, including mobile networks, so that potential diners are not lost to
slow page loads.

## Performance Standards

### Page Weight

| Asset type | Budget |
|------------|--------|
| HTML | < 50 KB (uncompressed) |
| CSS (total) | < 30 KB (uncompressed) |
| JavaScript (total) | < 20 KB (uncompressed) |
| Images (per image) | < 200 KB (optimized); prefer WebP |
| Total page weight | < 500 KB on first load |

### Loading

- [ ] There are **no render-blocking scripts** in `<head>`; scripts use `defer` or are placed
  before `</body>`.
- [ ] CSS is linked in `<head>` with `<link rel="stylesheet">` (non-blocking for rendering is
  handled by a single stylesheet under budget).
- [ ] No synchronous XHR calls.
- [ ] Font loading does not block first render (use `font-display: swap` if custom fonts are
  added).

### Images (when added)

- [ ] Images are provided in a next-gen format (WebP or AVIF) with `<picture>` fallbacks.
- [ ] Lazy loading (`loading="lazy"`) is applied to all images below the fold.
- [ ] Hero images use `fetchpriority="high"` to prioritize the largest contentful paint element.
- [ ] No images are scaled down via CSS alone; source dimensions should be close to display size.

### Caching & Compression

- [ ] If a hosting config is present, static assets are served with long-lived
  `Cache-Control` headers (`max-age=31536000, immutable` for versioned assets).
- [ ] Gzip or Brotli compression is enabled on the host for HTML, CSS, and JS files.

### Core Web Vitals Targets

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5 s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| INP (Interaction to Next Paint) | < 200 ms |

## How This Agent Works

1. **Triggered on:** Any pull request that adds or modifies HTML, CSS, JS, or image files.
2. **Action:** Checks file sizes against budgets, reviews loading strategy, and flags any
   additions that exceed thresholds.
3. **Pass criteria:** All asset budgets are within limits and no render-blocking resources are
   introduced.

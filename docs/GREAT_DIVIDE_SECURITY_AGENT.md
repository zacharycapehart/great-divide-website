# Great Divide Security Agent

## Purpose

The Security Agent verifies that the Great Divide Restaurant website does not expose visitors or
the hosting environment to common web vulnerabilities, even though the site is static HTML/CSS/JS.

## Security Standards

### Content Security

- [ ] No inline `<script>` blocks execute untrusted user input.
- [ ] No `eval()`, `new Function()`, or dynamic code execution in `assets/js/script.js` or
  any additional JavaScript files.
- [ ] No hard-coded API keys, passwords, tokens, or private URLs in any committed file.
- [ ] No `<iframe>` embeds from untrusted third-party origins without a
  `sandbox` attribute.

### Link & Resource Integrity

- [ ] All external resources (fonts, CDN scripts, etc.) loaded via `<link>` or `<script>` use
  HTTPS, not HTTP.
- [ ] Subresource Integrity (`integrity` + `crossorigin`) attributes are added for every
  third-party script or stylesheet loaded from a CDN.
- [ ] No relative protocol URLs (`//example.com/...`).

### Form Handling

- [ ] Any `<form>` that collects visitor information points to an HTTPS endpoint.
- [ ] No form sends data to an unencrypted HTTP endpoint.
- [ ] `autocomplete="off"` is used on sensitive fields (e.g. phone, email) only where
  appropriate—not blanket-applied.

### Headers & Hosting

- [ ] If a hosting config file is present (e.g., `_headers`, `netlify.toml`, `.htaccess`),
  it sets at minimum:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`

### Dependency Safety

- [ ] No npm/yarn packages with known high/critical CVEs are included in any lock file.
- [ ] No abandoned or unmaintained third-party libraries are added without review.

## How This Agent Works

1. **Triggered on:** Any pull request that modifies `index.html`, JS files, CSS files, or
   hosting configuration files.
2. **Action:** Reviews diffs against this checklist; flags any potential vulnerability.
3. **Pass criteria:** No high or critical issues found; all medium issues have documented
   mitigations.

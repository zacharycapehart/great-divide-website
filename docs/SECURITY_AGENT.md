# Great Divide Security Agent

## Role

Audit the Great Divide website for security best practices. This is a static HTML/CSS/JS site with no server-side processing. Audit accordingly and flag any risks.

---

## HTTP Security Headers

When hosting (Netlify, Vercel, GitHub Pages, etc.), configure the following response headers:

| Header | Recommended Value | Purpose |
|--------|------------------|---------|
| `Content-Security-Policy` | `default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self';` | Prevent XSS and data injection |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME sniffing |
| `X-Frame-Options` | `DENY` | Prevent clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limit referrer leakage |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Restrict browser features |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | Enforce HTTPS |

---

## HTTPS

- [ ] Site is served over HTTPS only (no HTTP fallback)
- [ ] SSL/TLS certificate is valid and auto-renewing
- [ ] All asset URLs (`css`, `js`, images) use relative paths (not `http://`) ✓

---

## Dependency & Supply Chain

- [ ] No external CDN scripts are loaded (currently none) ✓
- [ ] No third-party analytics or tag manager scripts are injected without a CSP allowing them
- [ ] If any external scripts are added in the future, use `integrity` (SRI) and `crossorigin="anonymous"` attributes

---

## Form & Input Security

- Currently no forms exist on the site ✓
- If a contact/reservation form is added in the future:
  - [ ] Use server-side validation and sanitization
  - [ ] Add CSRF protection
  - [ ] Use honeypot fields to deter spam bots
  - [ ] Never expose API keys in client-side code

---

## Email & Phone Link Security

- [ ] `tel:` links are acceptable; no security concern ✓
- [ ] `mailto:` links expose the email address to scrapers — consider obfuscation or a contact form if spam becomes an issue

---

## Privacy

- [ ] No cookies are set by this site (no analytics, no sessions) ✓
- [ ] If analytics are added, a cookie/privacy notice is required (GDPR/CCPA)
- [ ] Privacy policy page should be added if any personal data is collected

---

## Audit Checklist

- [ ] HTTPS enforced with valid certificate
- [ ] Security response headers configured at host level
- [ ] No external scripts loaded without SRI hashes
- [ ] No API keys, credentials, or secrets in source code or git history
- [ ] `robots.txt` does not expose sensitive paths
- [ ] All file paths are relative, not absolute HTTP URLs

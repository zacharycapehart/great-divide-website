# Great Divide Security Agent

## Purpose
Ensure the Great Divide Restaurant website adheres to web security best practices to protect users, data, and site integrity.

---

## Security Scope

This website is a **static HTML/CSS/JS site** with no backend, no database, and no user authentication. Security concerns are therefore focused on:

1. Dependency and CDN supply-chain safety
2. Content Security Policy (CSP)
3. Secure hosting configuration
4. Form handling (if any contact/reservation forms are added)
5. Third-party script risk

---

## HTTP Security Headers

When deploying to a server or CDN (e.g., GitHub Pages, Netlify, Vercel), the following headers should be configured:

```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self';
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

> **Note for GitHub Pages:** These headers can be set using a `_headers` file (Netlify) or `netlify.toml` / `vercel.json` configuration files.

---

## HTTPS

- [ ] Site is served exclusively over HTTPS.
- [ ] HTTP requests redirect to HTTPS.
- [ ] No mixed content (HTTP resources loaded on an HTTPS page).
- [ ] SSL certificate is valid and auto-renewing.

---

## Third-Party Scripts and CDNs

- [ ] All third-party scripts use **Subresource Integrity (SRI)** hashes.
- [ ] No unvetted third-party analytics or tracking scripts.
- [ ] Any CDN resources are from trusted, well-maintained sources.

**Example SRI usage:**
```html
<script src="https://cdn.example.com/lib.js"
        integrity="sha384-<hash>"
        crossorigin="anonymous"></script>
```

---

## Form Security (Future Implementation)

If a reservation or contact form is added:
- [ ] Use a reputable form provider (e.g., Formspree, Netlify Forms).
- [ ] Implement CSRF protection if handling server-side.
- [ ] Validate and sanitize all inputs client-side and server-side.
- [ ] Rate-limit form submissions to prevent abuse.
- [ ] Do not expose internal email addresses in HTML source.

---

## Dependency Management

- [ ] No inline JavaScript executing user-supplied content.
- [ ] `eval()`, `innerHTML` with untrusted data, and `document.write()` are prohibited.
- [ ] All npm/yarn packages (if build tooling is added) are audited via `npm audit`.
- [ ] Dependencies are pinned to specific versions.

---

## Sensitive Data

- [ ] No API keys, passwords, or secrets in source code or Git history.
- [ ] `.env` files are in `.gitignore`.
- [ ] No personally identifiable information (PII) stored client-side.

---

## Security Audit Checklist

| Check | Status |
|-------|--------|
| HTTPS enforced | ☐ |
| Security headers configured | ☐ |
| No inline event handlers (onclick, etc.) | ☐ |
| No `eval()` or unsafe dynamic code | ☐ |
| Third-party scripts use SRI | ☐ |
| No secrets in source | ☐ |
| Form inputs sanitized (if applicable) | ☐ |

---

## Incident Response

If a security issue is discovered:
1. Document the vulnerability with reproduction steps.
2. Remove or disable the affected component immediately.
3. Notify the site owner (zacharycapehart).
4. Patch and re-audit before re-deploying.

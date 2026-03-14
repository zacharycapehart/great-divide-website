# Great Divide Security Agent

## Purpose
This document defines the security standards for the Great Divide Restaurant website. Even as a static website, following these guidelines protects visitors and the site's integrity.

---

## Content Security Policy (CSP)

Add a `Content-Security-Policy` HTTP header (or `<meta>` tag as a fallback) to restrict resource origins:

```html
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self'; style-src 'self'; script-src 'self'; img-src 'self' data:; font-src 'self';">
```

- Do not use `'unsafe-inline'` or `'unsafe-eval'` unless absolutely necessary and documented.
- If third-party fonts or scripts are added (e.g., Google Fonts, analytics), explicitly whitelist their origins.

---

## HTTPS

- The site must be served exclusively over HTTPS once deployed.
- Add an HSTS header (via hosting platform or `.htaccess`):
  ```
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  ```
- Do not embed HTTP resources in an HTTPS page (mixed content).

---

## HTTP Security Headers

Configure these headers at the server/hosting level:

| Header                        | Recommended Value                          |
|-------------------------------|--------------------------------------------|
| `X-Content-Type-Options`      | `nosniff`                                  |
| `X-Frame-Options`             | `DENY` or `SAMEORIGIN`                     |
| `Referrer-Policy`             | `strict-origin-when-cross-origin`          |
| `Permissions-Policy`          | `geolocation=(), microphone=(), camera=()` |

---

## Dependency Security

- Do not add third-party JavaScript libraries without:
  1. Checking for known vulnerabilities (e.g., via [Snyk](https://snyk.io) or npm audit).
  2. Pinning to a specific version.
  3. Loading from a trusted CDN with Subresource Integrity (SRI):
     ```html
     <script src="https://cdn.example.com/lib.min.js"
       integrity="sha384-<hash>"
       crossorigin="anonymous"></script>
     ```

---

## Form Security

- If a contact or reservation form is added, apply:
  - CSRF protection (server-side token or a third-party form service with built-in protection).
  - Input validation and sanitization server-side.
  - reCAPTCHA or equivalent bot protection.
  - Do not expose server-side logic or API keys in client-side code.

---

## Sensitive Data

- Never commit credentials, API keys, or environment secrets to the repository.
- Use `.gitignore` to exclude local environment files (`.env`).
- Keep the `.gitignore` up to date as new tools are added.

---

## External Links

- All external links must include `rel="noopener noreferrer"` to prevent reverse tabnapping:
  ```html
  <a href="https://example.com" target="_blank" rel="noopener noreferrer">...</a>
  ```

---

## Regular Review

- Review third-party dependencies for security advisories quarterly.
- Check hosting platform security settings (headers, TLS version) at least annually.
- Run a free scan (e.g., [Mozilla Observatory](https://observatory.mozilla.org)) before each major launch.

---

## Checklist for Security Compliance

- [ ] CSP meta tag or header is configured
- [ ] Site is served over HTTPS
- [ ] Security headers (`X-Content-Type-Options`, `X-Frame-Options`, etc.) are set
- [ ] No credentials or API keys committed to the repository
- [ ] All external `target="_blank"` links have `rel="noopener noreferrer"`
- [ ] Third-party scripts are loaded with SRI hashes
- [ ] Forms (if present) have CSRF protection and input validation
- [ ] Mozilla Observatory score is B or higher before launch

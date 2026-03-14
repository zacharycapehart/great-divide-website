# Great Divide Restaurant Website

Starter static website for a restaurant landing page.

## Project Structure

```
.
├── assets
│   ├── css
│   │   └── styles.css
│   └── js
│       └── script.js
├── docs
│   ├── GREAT_DIVIDE_BRAND_AGENT.md
│   ├── GREAT_DIVIDE_BRAND_SEO_AGENT.md
│   ├── GREAT_DIVIDE_CLEAN_CODE_AGENT.md
│   ├── GREAT_DIVIDE_CONTENT_ACCURACY_AGENT.md
│   ├── GREAT_DIVIDE_PERFORMANCE_AGENT.md
│   ├── GREAT_DIVIDE_SECURITY_AGENT.md
│   └── GREAT_DIVIDE_UX_AGENT.md
├── index.html
└── README.md
```

## Governance Documents

The `docs/` directory contains agent governance files that define the standards every contributor must follow:

| File | Purpose |
|------|---------|
| `GREAT_DIVIDE_BRAND_AGENT.md` | Brand identity, colors, typography, and tone of voice |
| `GREAT_DIVIDE_BRAND_SEO_AGENT.md` | SEO requirements, structured data, and keyword strategy |
| `GREAT_DIVIDE_SECURITY_AGENT.md` | Security headers, CSP, HTTPS, and dependency hygiene |
| `GREAT_DIVIDE_CLEAN_CODE_AGENT.md` | HTML/CSS/JS coding standards and git commit conventions |
| `GREAT_DIVIDE_UX_AGENT.md` | Accessibility (WCAG AA), responsive design, and readability |
| `GREAT_DIVIDE_PERFORMANCE_AGENT.md` | Core Web Vitals targets, image optimization, and caching |
| `GREAT_DIVIDE_CONTENT_ACCURACY_AGENT.md` | Content correctness, placeholder resolution, and legal notices |

## Run Locally

Open `index.html` in your browser, or serve it with:

```bash
python3 -m http.server
```

## GitHub Setup

After creating a repo on GitHub (for example `great-divide-website`), run:

```bash
git branch -M main
git add .
git commit -m "Initial restaurant website setup"
git remote add origin https://github.com/<your-username>/great-divide-website.git
git push -u origin main
```
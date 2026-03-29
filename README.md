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

## Governance Agents

The `docs/` folder contains agent specification files that define quality standards for this
website. Each agent describes audit checklists and criteria for a specific concern:

| Agent file | Responsibility |
|------------|----------------|
| `GREAT_DIVIDE_BRAND_AGENT.md` | Brand identity and tone consistency |
| `GREAT_DIVIDE_BRAND_SEO_AGENT.md` | Local and organic search optimization |
| `GREAT_DIVIDE_SECURITY_AGENT.md` | Web security best practices |
| `GREAT_DIVIDE_CLEAN_CODE_AGENT.md` | Code readability and maintainability |
| `GREAT_DIVIDE_UX_AGENT.md` | User experience and accessibility (WCAG AA) |
| `GREAT_DIVIDE_PERFORMANCE_AGENT.md` | Page load performance and Core Web Vitals |
| `GREAT_DIVIDE_CONTENT_ACCURACY_AGENT.md` | Factual accuracy of restaurant information |

### How agents work

Each agent file describes:
1. **Purpose** — what concern the agent is responsible for.
2. **Standards** — specific, measurable criteria the website must meet.
3. **Audit checklist** — a ready-to-use checklist for manual or automated reviews.
4. **Trigger conditions** — which file changes should invoke the agent's review.
5. **Pass criteria** — what constitutes a successful review.

When a pull request is opened, a reviewer (human or automated) works through the checklist in
each relevant agent file. If every item passes (or has a documented exception), the review is
approved for that agent.

## Run Locally

Open `index.html` in your browser.

## GitHub Setup

After creating a repo on GitHub (for example `great-divide-website`), run:

```bash
git branch -M main
git add .
git commit -m "Initial restaurant website setup"
git remote add origin https://github.com/<your-username>/great-divide-website.git
git push -u origin main
```
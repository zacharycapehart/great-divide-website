# Great Divide Restaurant Website

A static restaurant landing page for **Great Divide Restaurant** — a farm-to-table dining experience.

## Features

- **Responsive design** — looks great on desktop, tablet, and mobile
- **Accessible markup** — semantic HTML5, skip-link, ARIA attributes
- **Smooth navigation** — sticky header, mobile hamburger menu
- **Reservation form** — client-side form with date validation and confirmation message
- **No dependencies** — pure HTML, CSS, and vanilla JavaScript

## Project Structure

```
.
├── assets
│   ├── css
│   │   └── styles.css      # All styles with CSS custom properties
│   └── js
│       └── script.js       # Mobile nav, year, and reservation form
├── index.html              # Main page
└── README.md
```

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Welcome banner with CTA buttons |
| **About** | Story, locally sourced highlights |
| **Menu** | Starters, mains, desserts, drinks |
| **Visit** | Address, hours, phone, email |
| **Reserve** | Phone CTA + reservation inquiry form |

## Run Locally

Open `index.html` in your browser — no build step required.

## GitHub Pages

To publish on GitHub Pages:

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Set source to the `main` branch, root folder.
4. Your site will be live at `https://<your-username>.github.io/great-divide-website/`.

## Initial Git Setup

```bash
git init
git branch -M main
git add .
git commit -m "Initial restaurant website"
git remote add origin https://github.com/<your-username>/great-divide-website.git
git push -u origin main
```
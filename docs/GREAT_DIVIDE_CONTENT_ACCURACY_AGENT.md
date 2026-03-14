# Great Divide Content Accuracy Agent

## Purpose
This document defines the content accuracy standards for the Great Divide Restaurant website. All information presented to visitors must be correct, current, and trustworthy.

---

## Core Content Review Checklist

### Business Information
- [ ] **Restaurant name** is spelled correctly and consistently: "Great Divide Restaurant"
- [ ] **Address** is the actual, current street address (currently a placeholder — must be updated before launch)
- [ ] **Phone number** is correct and in service (currently `(555) 123-4567` — placeholder, must be updated)
- [ ] **Hours of operation** are accurate and reflect current trading hours
- [ ] Hours format is consistent: `Tue–Sun 11:00 AM – 10:00 PM` (use en-dash `–`, not hyphen `-`)

### Menu Content
- [ ] Menu items listed on the site are actually available at the restaurant
- [ ] Menu categories (Starters, Main Dishes, Desserts) reflect the current menu structure
- [ ] Prices (if added) are current and inclusive of any applicable tax/service notes
- [ ] Allergen information is included if required by local law
- [ ] Seasonal menu items are updated when the season changes

### Navigation & Links
- [ ] All anchor links (`#home`, `#about`, `#menu`, `#visit`) scroll to the correct sections
- [ ] No placeholder `href="#"` links remain on production
- [ ] External links (social media, reservation platform) are live and point to the correct pages

---

## Writing Standards

- Write in American English.
- Use an active voice where possible: "We source ingredients locally" rather than "Ingredients are sourced locally."
- Spell out numbers one through nine; use numerals for 10 and above.
- Use the Oxford comma in lists: "Starters, mains, and desserts."
- Do not use all-caps for emphasis in body copy; use bold (`<strong>`) sparingly.
- Proofread every content update before publishing.

---

## Legal & Compliance

- The copyright year in the footer must be updated annually (currently auto-generated via JavaScript — verify this is working).
- "All rights reserved." notice must remain in the footer.
- If a privacy policy is required (e.g., if analytics or forms are added), link to it in the footer.
- If the site collects personal data (reservations, email sign-ups), a privacy policy page is mandatory.
- Allergen disclaimers must comply with applicable local food labeling regulations.

---

## Content Update Process

When updating any content on the site:
1. Verify the new information with the restaurant owner/manager before publishing.
2. Update the content in `index.html`.
3. Cross-check all related content (e.g., changing hours → check both the `#visit` section and any metadata/structured data).
4. Commit with a descriptive message: `Update hours of operation for winter schedule`.
5. Test the page in a browser after deployment to confirm the update is live.

---

## Placeholder Content (Must Be Resolved Before Launch)

The following items in the current `index.html` are placeholders and must be replaced with real information before the site goes live:

| Field          | Current Value              | Action Required                        |
|----------------|----------------------------|----------------------------------------|
| Address        | `123 Main Street, Your City` | Replace with actual restaurant address |
| Phone          | `(555) 123-4567`           | Replace with actual phone number       |
| Social links   | None yet                   | Add when accounts are confirmed        |
| Reservation URL | `#visit` (anchor)         | Link to actual reservation platform    |

---

## Checklist for Content Accuracy Compliance

- [ ] All placeholder text has been replaced with real, verified information
- [ ] Business name, address, phone, and hours are accurate
- [ ] Menu items reflect what is currently available
- [ ] Copyright year auto-generates correctly (JS-driven)
- [ ] All links are functional and point to the correct destinations
- [ ] Copy is proofread and follows the writing standards above
- [ ] Legal notices and disclaimers are in place as required

# Tuer Accommodations — React Starter

A modular React/Vite starter for rebuilding the current Tuer Accommodations website.

## Included

- Responsive sticky header + mobile menu
- Hero section with placeholder photography
- Intro/about section
- Data-driven suite cards
- Data-driven amenities grid
- Responsive gallery
- Availability section with a calendar/embed placeholder
- Contact section with a visual-only form
- Footer
- Central CSS variables for colours, sizing, and spacing
- Placeholder SVG images in `public/images`

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in the terminal.

## Build for production

```bash
npm run build
```

The production files will be created in `dist/`.

## Where to edit content

Most repeatable content is kept in:

`src/data/siteData.js`

That file controls:

- navigation items
- suite information
- amenity cards
- gallery image paths

General section copy currently lives inside the corresponding component in `src/components`.

## Replace the placeholder images

Put final images inside `public/images` and either:

1. keep the existing filenames, or
2. change the paths in `src/data/siteData.js` and `Hero.jsx`.

## Availability calendar

The placeholder is inside:

`src/components/Availability.jsx`

When you know the exact calendar/booking product and embed method, replace the `calendar-placeholder` block with that integration. The surrounding layout can stay untouched.

## Contact form

The current form intentionally prevents submission. Later it can be connected to an API endpoint, a form provider, or your own backend.

## Animations

No entrance animations were added on purpose. When the final content and images are in place, animations can be layered onto individual sections without restructuring the page.

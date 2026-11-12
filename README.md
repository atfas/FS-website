# Fernandes & Saraiva Website

Website (Astro, TypeScript) for **Fernandes & Saraiva, Sociedade de Advogados R.L.**, a law firm in Vila Nova de Gaia, Portugal.

## About

A static, responsive site in Portuguese that presents the firm to potential clients. Built with **Astro**, which renders every page to plain HTML at build time so search engines can index it, and ships JavaScript only where it's needed.

Sections:

- **Quem Somos**: the firm's history and values.
- **Áreas de Atividade**: practice areas shown as icon cards (criminal, insolvency, corporate, labour, family, immigration, real estate, inheritance, civil).
- **Equipa**: profiles of the two founding lawyers.
- **Parceiros**: partnership with RH Estratégico.
- **Contactos**: address, email, phone, opening hours and an embedded **Google Maps** location.

Features:

- **Clean, Apple-inspired design** made to be easy for older visitors: large text (18–19px body), high contrast, big buttons and plain labels.
- **One-tap contact**: "Ligar" and "Enviar email" buttons in the hero and navbar, tappable phone and email cards, and an "Abrir no Google Maps" button.
- **Responsive layout** with a mobile menu labelled "Menu" / "Fechar" that closes on link tap, outside click or Escape.
- **Accessible**: skip link, visible keyboard focus, and respects the "reduce motion" setting.
- **Optimised images**: Astro converts and resizes photos to WebP at build time.
- Styling built on **CSS custom properties** (gold and navy palette), with the Apple system font (Inter from Google Fonts on other devices) and icons from **Font Awesome**.

## Project structure

```
.
├── astro.config.mjs        # Astro configuration (site URL)
├── brand/
│   └── logo-fs.png         # Original F&S artwork: the source for every icon
├── scripts/
│   └── generate-icons.mjs  # Builds the icons and share image from brand/logo-fs.png
├── public/                 # Served as-is
│   ├── favicon.png         # Browser tab icon
│   ├── apple-touch-icon.png # iPhone home screen icon
│   ├── icon-512.png        # Large icon (Google Business Profile, Android)
│   └── og-image.png        # Card shown when the link is shared on WhatsApp/Facebook
└── src/
    ├── pages/
    │   └── index.astro     # Home page: puts the sections together
    ├── layouts/
    │   └── BaseLayout.astro # <head>, fonts, icons, meta tags, skip link
    ├── components/         # Navbar, Hero, About, Services, Team, Partners, Contact, Footer
    ├── data/
    │   └── content.ts      # All page text: practice areas, team bios, contacts
    ├── assets/images/      # Photos (optimised by Astro at build time)
    └── styles/
        └── global.css      # Colour variables, layout, animations and media queries
```

To change text (a practice area, a bio, the phone number), edit `src/data/content.ts`.

## Requirements

- Node.js 22.23.4 or newer
- npm

## Installation

```bash
git clone https://github.com/Atfas/FS-website.git
cd FS-website
npm install
```

## Run

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server at <http://localhost:4321> with live reload |
| `npm run build` | Builds the static site into `dist/` |
| `npm run preview` | Serves the built `dist/` locally to check it before deploying |
| `npm run check` | Type-checks the `.astro` and `.ts` files |
| `npm run icons` | Regenerates the icons and share image from `brand/logo-fs.png` |

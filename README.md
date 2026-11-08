# Fernandes & Saraiva Website

Single-page website (HTML, CSS, JavaScript) for **Fernandes & Saraiva, Sociedade de Advogados R.L.**, a law firm in Vila Nova de Gaia, Portugal.

## About

A static, responsive one-page site in Portuguese that presents the firm to potential clients. No build step and no framework, just plain HTML, CSS and vanilla JavaScript.

Sections:

- **Quem Somos**: the firm's history and values.
- **Áreas de Atividade**: practice areas shown as icon cards (criminal, insolvency, corporate, labour, family, immigration, real estate, inheritance, civil).
- **Equipa**: profiles of the two founding lawyers.
- **Parceiros**: partnership with RH Estratégico.
- **Contactos**: address, email, phone, opening hours and an embedded **Google Maps** location.

Features:

- **Responsive layout** with a **mobile hamburger menu** that closes when you tap a link or outside it.
- **Smooth scrolling** between sections from the navbar.
- **Fade-in animations** on scroll using `IntersectionObserver`.
- Styling built on **CSS custom properties** (gold and navy palette), with **Playfair Display** and **Inter** from Google Fonts and icons from **Font Awesome**.

## Project structure

```
.
├── index.html          # The whole page: navbar, hero, sections and footer
├── css/
│   └── styles.css      # Layout, colour variables, animations and media queries
├── js/
│   └── script.js       # Mobile menu, smooth scrolling, navbar on scroll, fade-in observer
└── images/             # Hero image, practice areas image, team photos and favicon
```

## Requirements

- Any modern web browser
- An internet connection (Google Fonts, Font Awesome and Google Maps load from CDNs)

## Installation

```bash
git clone https://github.com/Atfas/FS-website.git
cd FS-website
```

## Run

Open `index.html` directly in your browser:

```bash
open index.html
```

Or serve it locally:

```bash
python3 -m http.server 8000
```

Then go to <http://localhost:8000>.

# Tata's Tacos

A modern, single-page restaurant website for Tata's Tacos — a family-owned Mexican taco spot in Chicago's Six Corners neighborhood.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS v3** for styling
- **Framer Motion** for scroll animations
- **shadcn/ui** for UI components (Button, Card, Separator)
- **Google Fonts**: Playfair Display (headings) + Inter (body)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Menu, Reviews, Catering, Hours
│   └── shared/             # Reusable components (animations, cards, headings)
├── hooks/                  # Custom React hooks
└── lib/                    # Utilities, fonts, content constants
```

## Sections

1. **Navbar** — Fixed navigation with scroll-triggered background transition and mobile hamburger menu
2. **Hero** — Full-screen hero with background image, animated text, and CTAs
3. **About Strip** — Gold-background section with brand story and icon stats
4. **Featured Menu** — Responsive grid of menu item cards with staggered animations
5. **Yelp Reviews** — Customer reviews with star ratings and slide-in animations
6. **Catering Banner** — Split layout promoting catering services
7. **Hours & Location** — Google Maps embed with address, phone, and hours
8. **Footer** — Navigation links, social media icons, and copyright

## Deployment

This project is ready for deployment on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or build and deploy to any Node.js hosting platform using `npm run build` and `npm start`.

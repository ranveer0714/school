# Little Champ School

A React + Vite + TypeScript + Tailwind CSS school website for "Little Champ School" — a static frontend with sections for Hero, About Us, Programs, Activities, Gallery, Admission, Charity, and Contact.

## Stack

- **React 18** + **TypeScript**
- **Vite 5** (dev server on port 5000)
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Running the app

The dev server is configured via the **Start application** workflow (`npm run dev`). It serves on `http://0.0.0.0:5000`.

To start manually:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

## Project structure

All page sections are top-level `.tsx` components (e.g. `Hero.tsx`, `About.tsx`), composed in `App.tsx`. Shared layout pieces (Header, Footer) live in `include/`.

## User preferences

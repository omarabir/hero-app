# HERO.IO (hero-app)

## App Name
HERO.IO

## Description
HERO.IO is a small marketplace/demo app that showcases a curated list of applications. Users can browse trending apps, view trending and all available apps, see detailed statistics (downloads, ratings, reviews) and simulate installation. The project demonstrates modern frontend patterns: client-side routing, loaders, component composition, and lightweight charting.

## Technologies
- React (JSX)
- Vite (dev server / bundler)
- React Router DOM (routing & loaders)
- Tailwind CSS (utility-first styling)
- Recharts (charts)
- React Toastify (notifications)
- Lucide Icons (icons)

## Quick start
1. Install dependencies:

```pwsh
npm install
```

2. Run the dev server:

```pwsh
npm run dev
```

3. Open the app in the browser at the URL Vite shows (usually http://localhost:5173).

## Notes
- Route loaders fetch `public/appData.json`. Ensure that file exists when running locally.
- Prefer `react-router-dom` imports for browser components/hooks (RouterProvider, Link, NavLink, useLoaderData, etc.).

If you want a longer README (screenshots, architecture, contribution guide), I can add that next.

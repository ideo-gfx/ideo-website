# IDEO Website

React + Vite build of the "home page" frame in the IDEO Website Figma file.

## Run

```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure

- `src/components/` — one component per Figma section (Navbar, Hero, Services, Works, …)
- `src/data/content.js` — all copy, links and image paths
- `src/styles/tokens.css` — Figma variables as CSS custom properties
- `src/styles/motion-placeholders.css` + `src/hooks/useMotion.js` — **placeholder motion**, to be replaced
- `public/assets/` — images and icons exported from Figma

## Placeholders to replace before launch

| What | Where |
|---|---|
| All scroll/marquee/reveal motion | `motion-placeholders.css`, `useMotion.js`, Showreel scroll-scale |
| Show reel video | `REEL_SRC` in `src/components/Showreel.jsx` |
| BUILD / BRANDING / MARKETING service copy | `SERVICE_CATEGORIES` in `content.js` |
| Testimonials (one review repeated 5×) | `TESTIMONIALS` in `content.js` |
| Second team member (duplicate name/role) | `TEAM` in `content.js` |
| Social links, privacy/terms pages | `FOOTER_SOCIAL`, `Footer.jsx` |
| Case-study links and "View all cases" | `Works.jsx` |
| Service image (one image reused for every tab) | `Services.jsx` |

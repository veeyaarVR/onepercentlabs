# One Percent Labs

Marketing site for [onepercentlabs.io](https://onepercentlabs.io), built with [Astro](https://astro.build).

## Commands

| Command           | What it does                             |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the static site into `dist/`       |
| `npm run preview` | Serve the production build locally       |
| `npm run check`   | Type-check Astro and TypeScript files    |
| `npm run format`  | Format the code with Prettier            |

Requires Node 22.12 or newer.

## Where things live

- `src/data/site.ts` holds all copy, product links and image slots. Edit text here.
- `src/components/` has one component per page section.
- `src/styles/global.css` holds the design tokens (colors, fonts) and shared base styles.
- `src/assets/` is for images. Import them in `site.ts` and assign them to the hero, product icons or founder photo. Until then the page shows dashed placeholders.
- `public/` is served as-is (favicon, robots.txt).

Fonts are self-hosted through `@fontsource-variable/*` packages, so the page makes no requests to Google.

## Deploying on Cloudflare Pages

In the Pages project settings (Settings > Builds):

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION` = `22`

Every push to `main` redeploys the site.

## Later: the admin dashboard

This site is a static build. When the analytics dashboard arrives, build it as its own app (for example at `admin.onepercentlabs.io`), or add the `@astrojs/cloudflare` adapter to this project to get server routes.

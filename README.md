# Party Lounges Website (React + Vite)

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Deploy the generated `dist/` folder.

## Fix: 404 on direct page loads

This app is a Single Page Application (SPA) using React Router with browser history.

When a user opens a URL like `/contact` directly, the server must return `index.html` so React can render the correct route client-side.

If the server is not configured for SPA fallback, direct links return `404`.

### Included in this repo

- `vercel.json` for the current Vercel deployment
- `public/.htaccess` for Apache/cPanel hosting
- `public/_redirects` for Netlify-style hosting

Vite copies files from `public/` into `dist/`, so both files are included after `npm run build`.

### Vercel requirements

Deploy the project normally on Vercel. The root-level `vercel.json` rewrites all app routes to `index.html`, so direct links like `/contact` load correctly.

### Apache/cPanel requirements

1. Ensure `mod_rewrite` is enabled.
2. Ensure `.htaccess` overrides are allowed (`AllowOverride All`).
3. Upload the full `dist/` contents (including `.htaccess`) to your web root.

### Netlify requirements

Deploy `dist/` and keep `_redirects` in the publish output.

## SEO and ads note

With SPA fallback enabled, direct ad/SEO landing URLs (for example `/contact`) load correctly without server 404s.

For stronger indexing and richer previews, you can later add prerendering or SSR, but fallback rewrites are the required first fix.

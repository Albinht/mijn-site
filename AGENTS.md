# Niblah production

The current public website is WordPress, using `niblah-ordina-theme` on Hetzner. The Next.js homepage in `src/app/page.js` is retired and must not be deployed as the public homepage.

Before changing or publishing Niblah, resolve `niblah.com` with the `manage-webdesign-agency` skill and read `/Users/al/Documents/Webdesign Agency/clients/niblah/operations.md` and `wordpress/deploy/production/README.md`.

- Public website: https://www.niblah.com
- WordPress origin: https://niblah-wordpress.42giwj.easypanel.host
- WordPress theme source: `wordpress/niblah-ordina-theme/`
- Vercel project: `mijn-site-mlft`; its role is the reverse proxy.
- Preserve the production environment variable `NIBLAH_WORDPRESS_PROXY=1`, the beforeFiles rewrite in `next.config.mjs`, and the proxy bypass in `src/middleware.js`.
- A fresh Vercel deployment date does not identify the current website version: an older edge deployment can serve the newest WordPress content. Verify the public WordPress theme and the active origin before switching deployments.
- Do not copy an entire dirty Next.js homepage into a release for a small content request. Make homepage content changes in the active WordPress theme.

After publishing, verify the public homepage title and WordPress markers, plus `/contact` and `/projecten`. Record production changes in the Agency OS dossier. A HTTP 200 or the presence of new text alone does not verify the correct site.


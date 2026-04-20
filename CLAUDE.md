# Repository Guidelines

## Project Structure & Module Organization
This repository is a static site for `moonsailsoftware.com` hosted on GitHub Pages. The root contains shared pages such as `index.html`, `privacy.html`, and `cookies.html`. Shared styles and scripts live in `css/` and `js/`. App landing pages are organized under `apps/<app-name>/` with local screenshots and assets beside each page, for example `apps/eye-break/index.html` and `apps/eye-break/icon.png`. Standalone app privacy pages currently exist at `bp-log/privacy/`, `eye-break/privacy/`, `mix/privacy/`, and `timer/privacy/`.

## Critical Production Constraint
Never change the public location or URL path of any app privacy policy page unless the user explicitly requests it and confirms a coordinated app update. These apps are already live and link to their existing privacy-policy URLs in production. If a privacy policy path changes, the live apps may fail to display the policy, which is a production and compliance risk. Treat moving, renaming, re-slugging, or consolidating privacy policy paths as prohibited by default.

## Build, Test, and Development Commands
There is no build step or package-based toolchain in this repo. Preview the site locally with:

```bash
npx --yes serve -p 3001 .
```

Then open `http://localhost:3001`. After content changes, manually verify the updated page, navigation links, and responsive layout. When adding a new public page, update `sitemap.xml` in the same change.

## Coding Style & Naming Conventions
Use simple, hand-edited HTML, CSS, and vanilla JavaScript. Follow the existing style: 2-space indentation, semantic HTML, lowercase file names, and hyphenated directory names such as `apps/eye-break`. Reuse shared assets in `css/` and `js/` before adding page-specific inline code. Keep copy concise and marketing-oriented, matching the current site tone.

## Testing Guidelines
This project does not include an automated test suite. Treat manual browser checks as required for every change. Verify desktop and mobile layouts, broken links, image paths, and any analytics-related interactions that use `.btn-store` buttons. If you add JavaScript behavior, test it in a local browser before opening a PR. For any change touching privacy policy content or app landing pages, verify that links to the existing privacy-policy URLs still resolve without redirect surprises.

## Commit & Pull Request Guidelines
Recent commits use short imperative subjects, for example `Add Firebase Analytics tracking and click monitoring for Play Store links` and `Update default local development port to 3001`. Keep commit messages focused on one change. Pull requests should include a brief description, affected URLs or paths, and screenshots for visual updates. Note any SEO-impacting changes such as new pages, changed slugs, or `sitemap.xml` edits.

## Publishing Notes
Never push without confirmation first. For newly added pages, request indexing in Google Search Console after deployment if fast discovery matters. Preserve existing live URLs wherever possible, especially app privacy-policy paths.

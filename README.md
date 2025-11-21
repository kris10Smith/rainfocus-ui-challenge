# RainFocus UI Challenge
Implementation by Kristen Smith

## Overview

This project is a recreation of the provided RainFocus Figma design as a single-page web application. It is built with **Next.js (App Router)** and **SCSS**, with a light design-token layer to mirror the typography, spacing, and color system from the Figma file.

The goal of this implementation is to:
- Match the layout, typography, spacing, and visual hierarchy of the Figma design as closely as possible.
- Use **plain SCSS** (no Tailwind, Bootstrap, or UI libraries) for layout and styling.
- Keep the codebase easy to understand and ready to tweak live during a screen share (e.g., changing font sizes, gaps, etc.).

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript + React
- **Styling:** SCSS (Sass) with partials and a simple token/variables layer
- **Tooling:** Turbopack (Next.js default in v16)

No additional UI framework (Bootstrap, Tailwind, MUI, etc.) is used. All layout and styling is implemented manually with SCSS and CSS flexbox.

---

## Project Structure

Key files related to the challenge:

```text
rainfocus-ui-challenge/
  app/
	layout.tsx        # Root layout: imports global styles and wraps the page
	page.tsx          # Main page implementing the Figma design

  public/
	images/           # Exported icons and images from Figma (event icon, avatars, etc.)

  src/
	styles/
	  global.scss     # Single SCSS entry point imported in app/layout.tsx
	  _rf-tokens.scss # CSS custom properties matching the RF brand tokens
	  _variables.scss # SCSS variables (fonts, colors, spacing, breakpoints)
	  _layout.scss    # App shell + layout (left rail, header, button, responsive behavior)
	  _sections.scss  # Event setup section, attendee area, step rows, cards
	  _typography.scss# Type utility classes (H1/H2/H3, body, card text, step labels)
```
---

## Build and Static Export

To create a production build and static export:
```bash
	npm run build
```
This will run next build and next export and generate a static export in the out/ directory, including:
```text
	out/index.html
```
If you prefer a build/ folder (I'll use this for the RainFocus zip), then run:
```bash
	npm run build:zip-ready
```
This will:
- Run the build and export
- Move the contents of out/ into a build/ directory so you have build/index.html ready to zip.

Because the exported files use root-relative asset paths (Next.js default), the static output should be served from a simple HTTP server rather than opened directly with the file:// protocol. For example:
```bash
	npx serve build     # or: npx serve out
```
Then open the printed http://localhost:... URL in your browser.
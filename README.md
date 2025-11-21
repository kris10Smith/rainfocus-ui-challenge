# RainFocus UI Challenge
Implementation by Kristen Smith

## Overview

This project is a recreation of the provided RainFocus Figma design as a single-page web application. It is built with **Next.js (App Router)** and **SCSS**, with a light design-token layer to mirror the typography, spacing, and color system from the Figma file.

The goal of this implementation is to:

- Match the layout, typography, spacing, and visual hierarchy of the Figma design as closely as possible.
- Use **plain SCSS** (no Tailwind, Bootstrap, or UI libraries) for layout and styling.
- Keep the codebase easy to understand and ready to tweak live during a screen share (for example, changing font sizes, gaps, or widths).

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
	layout.tsx           # Root layout: imports global styles and wraps the page
	page.tsx             # Entry page that wires together the shell and content

	components/
	  LeftRail.tsx       # Persistent left navigation rail (logos and user avatar)
	  MainContent.tsx    # Main <main> wrapper for the page content
	  EventHeader.tsx    # Summit title, date/location, and primary action button
	  EventSetupSection.tsx # "Event setup guide" heading and intro copy
	  AttendeeSection.tsx   # Attendee module steps + card components

  public/
	img/                 # Exported icons and images from Figma (logos, person icon, etc.)

  src/
	styles/
	  global.scss        # Single SCSS entry point imported in app/layout.tsx
	  _rf-tokens.scss    # CSS custom properties matching the RF brand tokens
	  _variables.scss    # SCSS variables (fonts, colors, spacing, breakpoints)
	  _layout.scss       # App shell + layout (left rail, header, button, responsive behavior)
	  _sections.scss     # Event setup section, attendee area, step rows, cards
	  _typography.scss   # Type utility classes (H1/H2/H3, body text, card text, step labels)
```

The components are intentionally kept small and focused so that it is easy to locate specific UI areas (for example, the Attendee section or the primary button) and adjust them quickly during a live review.

---

## Running the Project Locally

From the project root:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

in your browser to view the application.

The page is fully responsive from a wide desktop layout down to a small mobile viewport (~320px).

---

## Production Build and Static Export

This project is configured with `output: "export"` in `next.config.ts`, so a standard Next.js build will produce a static export.

### Basic static export (Next.js default)

```bash
npm run build
```

This will generate a static export in the `out/` directory, including:

```text
out/index.html
```

### Build layout used for the RainFocus zip

For convenience, there is an additional script that prepares a `build/` folder (this is what I used when creating the attached zip):

```bash
npm run build:zip-ready
```

This script will:

1. Remove any existing `build/` directory.
2. Run the production build (which creates `out/`).
3. Move the contents of `out/` into `build/`.

After running it, you will have:

```text
build/index.html
```

ready to be opened via a simple static server.

### Serving the static build

Because the exported files use root-relative asset paths (Next.js default), the static output should be served from an HTTP server rather than opened directly with the `file://` protocol.

For example:

```bash
npx serve build    # or: npx serve out
```

Then open the printed `http://localhost:3000` (or similar) URL in your browser to view the static build.

---

If you have any questions about the implementation or would like to see specific tweaks (for example, different spacing, typography, or additional interactions), I would be happy to walk through the code and adjust it live.

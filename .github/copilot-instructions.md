# Copilot Instructions for Angelo Yenque Portfolio

## Architecture Overview

This is a **static portfolio site** built with Next.js 14 and configured for GitHub Pages deployment. The key architectural decision is the **two-column layout** with a sticky sidebar navigation and scrollable main content.

### Core Components Structure

```
page.tsx → Sidebar + MainContent + SpotlightEffect
MainContent → About + Experience + Skills + Education sections
Sidebar → Navigation + Contact links + Active section tracking
```

## Critical Configuration Patterns

### Next.js Static Export Setup

- `next.config.js`: Configured with `output: 'export'` for static generation
- `distDir: 'out'` generates static files for GitHub Pages
- Images are `unoptimized: true` for static hosting compatibility
- **IMPORTANT**: Always use relative imports with `@/` aliases (configured in `tsconfig.json`)

### GitHub Pages Deployment

- `.github/workflows/deploy.yml` handles automated deployment
- **Critical step**: `cp CNAME out/` preserves custom domain configuration
- Deploys on push to `master` branch with Node.js 20

## Component Patterns

### Section Components (`src/components/sections/`)

Each section follows this consistent pattern:

```tsx
// Sticky header for mobile navigation
<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">

// Section content with consistent spacing
<section id="section-name" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
```

### Scroll Navigation System

- Sidebar tracks active section via `useEffect` scroll listener
- Sections must have `id` attributes matching navigation array: `['about', 'experience', 'skills', 'education']`
- Smooth scrolling implemented with `element.scrollIntoView({ behavior: 'smooth' })`

### Interactive Effects

- **SpotlightEffect**: Mouse-following gradient effect using CSS custom properties (`--mouse-x`, `--mouse-y`)
- **Hover states**: Consistent pattern using `group` and `group-hover:` classes
- **Client components**: Use `"use client"` for any interactive components (Sidebar, SpotlightEffect)

## Styling Conventions

### Custom Tailwind Theme

- **Colors**: Custom `dark` palette (50-900) for consistent theming
- **Primary**: Teal/emerald variants for accents and highlights
- **Typography**: Inter font family loaded via Next.js fonts

### Responsive Patterns

- **Mobile-first**: Base styles for mobile, `lg:` prefixes for desktop
- **Two-column**: `lg:w-1/2` splits Sidebar and MainContent on desktop
- **Sticky positioning**: `lg:sticky lg:top-0` for sidebar navigation

### Professional Content Structure

- **Skills section**: Categorized by technology type with non-technical descriptions for recruiters
- **Experience**: Real work history with technology tags and company links
- **Consistent metadata**: Spanish language, Business Intelligence focus

## Development Workflow

### Key Commands

```bash
npm run dev          # Development server with hot reload
npm run build        # Production build + static export
npm run type-check   # TypeScript validation without emit
```

### Content Updates

1. **Personal info**: Update `src/app/layout.tsx` for SEO metadata
2. **Navigation**: Modify sections array in `Sidebar.tsx` and import new sections in `MainContent.tsx`
3. **Professional content**: Each section component contains structured data arrays for easy updates

### Deployment Process

- Automatic on push to `master`
- Build artifacts go to `out/` directory
- CNAME file is preserved for custom domain (`ayenque.me`)

## Integration Points

- **Lucide React**: Icon library used throughout (`Database`, `BarChart3`, `Github`, etc.)
- **Google Fonts**: Inter font loaded via Next.js optimization
- **CSS Custom Properties**: Used for dynamic spotlight effect positioning
- **External links**: Consistent `target="_blank" rel="noreferrer"` pattern for professional links

When adding new sections or modifying content, maintain the established patterns for responsive design, accessibility, and the professional Business Intelligence focus of the portfolio.

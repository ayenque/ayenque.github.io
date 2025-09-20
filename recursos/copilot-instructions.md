# Copilot Instructions for ayenque.github.io

## Project Overview
This is a **GitHub Pages personal website** for Angelo Yenque, hosted at `ayenque.me`. It's a minimal Jekyll site using the Cayman theme with bilingual content (Spanish/English).

## Architecture & Key Files

### Core Structure
- `index.html` - Main landing page (Spanish content)
- `README.md` - GitHub profile page (English, minimal)
- `_config.yml` - Jekyll configuration (theme: jekyll-theme-cayman)
- `CNAME` - Custom domain configuration (`ayenque.me`)

### Content Patterns
- **Bilingual approach**: `index.html` uses Spanish ("Este es un sitio web con Github Pages"), while `README.md` uses English
- **Mixed formats**: HTML for main page, Markdown for GitHub profile
- **Personal branding**: Focus on "Angelo Yenque" as primary identity

## Development Workflow

### Jekyll GitHub Pages Setup
- Site automatically builds via GitHub Pages when pushed to `master` branch
- No local build process required - changes deploy automatically
- Theme (`jekyll-theme-cayman`) loads remotely, no local theme files

### Content Updates
- Direct HTML editing for main page styling and structure
- Keep Spanish language for main site content in `index.html`
- Update `README.md` for GitHub profile visibility (English)

### Domain Management
- Custom domain configured via `CNAME` file containing only `ayenque.me`
- Do not modify CNAME unless changing the primary domain

## Code Conventions

### File Organization
- Keep minimal file structure - this is intentionally a simple static site
- No complex directory structure or asset organization needed
- Avoid adding unnecessary build tools or complex frameworks

### Content Guidelines
- Maintain bilingual consistency: Spanish for main site, English for development/GitHub content
- Keep personal/professional tone matching existing content
- GIF/media embeds are acceptable (see existing giphy.gif usage)

### HTML Structure
- Simple semantic HTML without complex CSS frameworks
- Viewport meta tag already configured for mobile responsiveness
- Keep external dependencies minimal

## Integration Points
- **GitHub Pages**: Automatic deployment from master branch
- **Custom Domain**: DNS configured for `ayenque.me` → GitHub Pages
- **Jekyll Theme**: Remote theme loading (no local customization)

## Testing & Validation
- Test changes by viewing at `https://ayenque.me` after deployment
- GitHub Pages build status visible in repository Actions tab
- No local development server typically needed for simple changes
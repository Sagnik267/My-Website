# sagnik.dev — Sagnik Behera Personal Portfolio

A sleek, fast, single-page personal portfolio website for **SAGNIK BEHERA**, crafted with the visual aesthetic and structural layout of [sm2k4.dev](https://sm2k4.dev/) (Neo-brutalist tech style: bold solid borders, offset box-shadows, Space Grotesk headings, JetBrains Mono accents, electric blue highlight, terminal cards, and smooth accordion controls).

Built with **SvelteKit** and `@sveltejs/adapter-static` for fully static pre-rendered output with **zero backend**, **zero database**, **zero authentication / login routes**, and strict security headers.

---

## Quick Highlights

- **Visual Style:** Neo-brutalist developer aesthetic inspired by `sm2k4.dev` with hard drop shadows (`6px 6px 0 var(--shadow-color)`), solid borders (`3px solid var(--ink)`), self-hosted `Space Grotesk` and `JetBrains Mono` fonts, and dark mode by default with light mode toggle.
- **Single Source of Truth:** All content (name, headline, projects, experience, skills, education, links) resides in `src/lib/data.ts` for quick editing.
- **Zero Login / Zero Auth:** Strictly static single-page portfolio with zero login, sign-up, dashboard, or admin routes.
- **Automatic Duration Computation:** Computes duration (e.g. `· 6 mos`) automatically from start and end dates.
- **Terminal-Style Project Cards:** Window bars with traffic-light control dots, `~/project-name` monospace file titles, tag chips, and repository links.
- **Scraper-Resistant Contact:** Mailto link constructed client-side at runtime to prevent automated email harvesting.
- **Fully Static & Multi-Platform Deployable:** Generates standard static HTML/CSS/JS deployable on **Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages**.

---

## Page Structure

1. **Sticky Floating Navbar:**
   - Initials badge (`SB`) + `sagnik.dev` brand logo
   - Smooth-scroll links: Experience (`#work`), Projects (`#projects`), Education (`#education`), "Let's talk" (`#contact`)
   - Light/Dark mode toggle button with local persistence
   - Responsive mobile hamburger menu
2. **Hero:**
   - Status pills with pulsating green dot: *"Open to building · Data Science Student @ CVRGU · Odisha, IND"*
   - Huge uppercase name: `SAGNIK BEHERA` with outlined/accented last name
   - One-line tagline with bolded phrases: *"**Data Science** student turning raw data into **clear business insights** & practical **data-driven solutions**."*
   - Buttons: *"See the work ↘"* (scrolls to Projects) and *"Résumé.pdf ↓"* (downloads `/assets/Sagnik_resume.pdf`)
   - Monospace social badges: GitHub, LinkedIn, Website, and Direct Email
3. **Infinite Horizontal Tech Marquee:**
   - Looped strip of skills (*Python, SQL, MySQL, Flask, Power BI, DAX, Google Colab, Jupyter, Data Analytics, ETL, KPI Tracking*) separated by `◆`
   - Pauses on hover; respects `prefers-reduced-motion`
4. **"00 / Work" — Experience:**
   - Collapsible cards with `+` / `−` accordion expand
   - Collapsed: Company initials mark, company name, role in electric blue, date range with automatically computed duration (`· 6 mos`), location
   - Expanded: Bullet points with bolded key metrics
   - Clearly marked TODO placeholder item for easy customization
5. **"01 / Build" — Projects:**
   - Grid of terminal cards titled `~/project-name`
   - Window dots, description with bolded key metrics, language chips, "View repo ↗"
   - Capstone Marketing Performance Dashboard & Power BI Campaign Analysis
6. **"02 / Learn" — Education:**
   - Hero university banner: C.V. Raman Global University (B.Tech in CSE - Data Science, 2023 — 2027)
   - Secondary education cards: Rabindra Vidya Niketan School (Class XII & Class X with scores)
   - Verified certification: Data Analytics by Krutanic
7. **"03 / Contact" & Footer:**
   - Big callout card: *"Let's build something cool"*
   - Big brutalist mailto button with email
   - Social links: GITHUB ↗, LINKEDIN ↗, RÉSUMÉ ↓
   - Footer: `© 2026 Sagnik267` and `Back to top ↑`

---

## Tech Stack

- **Framework:** SvelteKit 3 (`@sveltejs/adapter-static` 4.0.1)
- **Component Engine:** Svelte 5 with runes (`$state`, `$derived`, `$effect`)
- **Language:** TypeScript 6 (`strict: true`)
- **Styling:** Neo-Brutalist CSS using CSS custom properties (`--paper`, `--ink`, `--blue`, `--green`, `--shadow`)
- **Fonts (Self-Hosted):** Space Grotesk & JetBrains Mono (WOFF2 format in `/static/fonts/`, 0 Google Fonts CDN calls)

---

## How to Edit Content (`src/lib/data.ts`)

All content is centralized in `src/lib/data.ts`. You do not need to edit any components to update your information:

```typescript
// Edit personal info
export const siteMeta = {
  name: 'Sagnik Behera',
  firstName: 'SAGNIK',
  lastName: 'BEHERA',
  brandName: 'sagnik.dev',
  statusRole: 'Data Science Student @ CVRGU',
  githubUrl: 'https://github.com/Sagnik267',
  linkedinUrl: 'https://www.linkedin.com/in/sagnik-behera-328b60435',
  ...
};

// Edit projects (terminal-style cards)
export const projects: readonly ProjectItem[] = [ ... ];

// Edit work experience / internships
export const experiences: readonly ExperienceItem[] = [ ... ];

// Edit education & certifications
export const education: readonly EducationItem[] = [ ... ];
export const certifications: readonly CertificationItem[] = [ ... ];
```

---

## Local Development & Building

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Run Type & Diagnostics Check
```bash
npm run check
```

### 4. Build Static Site
```bash
npm run build
```
The production-ready static site is generated in `build/`.

### 5. Preview Static Build Locally
```bash
npm run preview
```

---

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push your repository to GitHub.
2. In [Vercel Dashboard](https://vercel.com/), click **Add New Project** and import your repo.
3. Vercel automatically detects SvelteKit:
   - **Framework Preset:** SvelteKit
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
4. Click **Deploy**.

### Option 2: Netlify
1. Connect your repository to [Netlify](https://www.netlify.com/).
2. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
3. Click **Deploy Site**. The `_headers` file is automatically applied.

### Option 3: Cloudflare Pages
1. Go to **Cloudflare Dashboard > Workers & Pages > Create application > Pages > Connect to Git**.
2. Select repository and set:
   - **Framework preset:** SvelteKit
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
3. Click **Save and Deploy**.

### Option 4: GitHub Pages
1. In repository settings, go to **Pages > Build and deployment > Source: GitHub Actions**.
2. Push to `main`/`master` — the `.github/workflows/ci.yml` pipeline will test, build, and deploy.

---

## Verification & Hard Constraints Confirmation

- **No Authentication / Zero Login Routes:** Confirmed. No login, sign-up, dashboard, or session handling anywhere in the codebase.
- **Strict Content Security Policy (CSP):** Self-hosted scripts, styles, and fonts with automated SHA-256 script hashing.
- **Responsive Mobile First:** Verified on desktop, tablet, and mobile viewports with collapsible hamburger menu and responsive grid.
- **All Links Secure:** All outbound URLs use HTTPS with `rel="noopener noreferrer"`.
- **Zero Tracker Scripts:** No third-party analytics, no tracking cookies, no banner popups.

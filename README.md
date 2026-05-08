# STUDIO_VB — Portfolio

A minimal, high-contrast developer portfolio built with React, Vite, and Tailwind CSS v4. Designed with a brutalist-meets-luxury aesthetic — sharp typography, restrained color, and purposeful motion.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✦ Overview

A single-page portfolio for **Vasu Bhatia** — Backend Software Engineer specializing in scalable payment infrastructure, event-driven architecture, and high-availability systems.

### Sections

- **Hero** — Animated landing with CTAs
- **About** — Philosophy and background
- **Selected Work** — Project showcase with grayscale-to-color image reveals
- **Technical Arsenal** — Skill grid organized by domain
- **Contact** — Direct email, social links, and an inquiry form
- **Footer** — Minimal navigation

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 (with `@tailwindcss/vite` plugin) |
| Animations | Motion (Framer Motion) |
| Icons | Lucide React |
| Language | TypeScript 5.8 |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/vasu991/vasu-bhatia-portfolio.git
cd vasu-bhatia-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be running at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

---

## 📁 Project Structure

```
vasu-bhatia-portfolio/
├── index.html                 # HTML entry point
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── package.json
└── src/
    ├── main.tsx               # React entry point
    ├── App.tsx                # Root component
    ├── index.css              # Global styles & Tailwind theme
    ├── constants/
    │   └── content.ts         # All portfolio content (text, links, projects)
    └── components/
        ├── Navbar.tsx         # Fixed header with scroll-aware blur
        ├── Hero.tsx           # Landing section with motion entrance
        ├── About.tsx          # Bio with architectural imagery
        ├── Projects.tsx       # Project grid layout
        ├── ProjectCard.tsx    # Individual project card with hover effects
        ├── Skills.tsx         # Categorized skill grid
        ├── Contact.tsx        # Contact form and social links
        └── Footer.tsx         # Minimal footer
```

---

## ✏️ Customization

All portfolio content lives in a single file — no need to touch components:

**[`src/constants/content.ts`](src/constants/content.ts)**

Update your name, title, projects, skills, experience, and education there. The components will reflect the changes automatically.

---

## 🌐 Deployment

This is a static site — deploy anywhere that serves HTML.

### Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New → Project**
3. Import the repository
4. Vercel auto-detects Vite — just click **Deploy**

No environment variables needed.

---

## 📄 License

MIT © [Vasu Bhatia](https://github.com/vasu991)

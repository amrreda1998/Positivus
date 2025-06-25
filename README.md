# Positivus – Digital Marketing Agency Landing Page

A modern, pixel-perfect, and fully responsive landing page for a digital marketing agency, built with **React**, **TypeScript**, and **Tailwind CSS v4**. This project demonstrates best practices in component-driven development, custom theming, and mobile-first design.

## ✨ Features

- **Modern UI**: Clean, professional, and visually consistent design.
- **Pixel-Perfect**: Built to match design references with precise spacing and alignment.
- **Fully Responsive**: Mobile-first layouts, adaptive typography, and flexible grids.
- **Custom Tailwind Theme**: Uses Tailwind v4's `@theme` for brand colors, font (Space Grotesk), and scalable text styles.
- **Reusable Components**: Navbar, Footer, and Section components for easy maintenance.
- **Accessible**: Semantic HTML, keyboard navigation, and accessible forms.
- **Optimized Assets**: SVG icons, illustrations, and logos for crisp rendering.

## 🏗️ Project Structure

```
src/
  ├── App.tsx                # App entry, renders Navbar and LandingPage
  ├── LandingPage.tsx        # Main page layout, includes all sections
  ├── index.css              # Tailwind v4 setup, custom theme, font-face
  ├── assets/
  │   ├── fonts/             # Space Grotesk variable font
  │   ├── icons/             # Social and UI SVG icons
  │   └── images/            # Hero, logos, and service illustrations
  ├── components/
  │   ├── Navbar.tsx         # Responsive navbar with hamburger menu
  │   └── Footer.tsx         # Footer with contact, newsletter, and social links
  └── Sections/
      ├── HeroSection.tsx    # Hero with heading, description, CTA, and logos
      ├── ServicesSection.tsx# Service cards grid with icons and "Learn more"
      └── CtaSection.tsx     # Large call-to-action section
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (v9+ recommended)

### Installation

```bash
npm install
```

### Development

Start the local dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

To build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Lint

Run ESLint:

```bash
npm run lint
```

## 🎨 Theming & Styling

- **Tailwind v4** is configured via `@theme` in `src/index.css` for:
  - Brand colors: `--color-primary`, `--color-black`, `--color-light`
  - Font: Space Grotesk (variable font)
  - Responsive text sizes for headings and paragraphs
- **No tailwind.config.js**: All theming is handled in CSS per Tailwind v4 best practices.

## 🧩 Main Components

- **Navbar**: Responsive, mobile hamburger menu, brand logo, nav links, CTA button.
- **HeroSection**: Large heading, description, CTA, illustration, and client logos.
- **ServicesSection**: Grid of service cards, each with icon, title, and "Learn more" button.
- **CtaSection**: Prominent call-to-action with text and illustration.
- **Footer**: Logo, nav links, social icons, contact info, newsletter form, and copyright.

## 📁 Assets

- **Fonts**: `SpaceGrotesk-VariableFont_wght.ttf`
- **Icons**: Facebook, Twitter, LinkedIn, "Learn more" (black/green)
- **Images**:
  - **Logos**: Amazon, Dribbble, HubSpot, Notion, Netflix, Zoom, Positivus (black/white)
  - **Hero Illustration**
  - **Service Illustrations**: SEO, PPC, Social Media, Email, Content, Analytics, CTA

## 📱 Responsiveness

- All sections and components are mobile-first and scale up to large screens.
- No conflicting paddings—outer layout controls spacing for perfect alignment.

## 🛠️ Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4** (with `@theme`)
- **ESLint** (with recommended React/TypeScript rules)

## 🤝 Contributing

Feel free to fork, clone, and submit pull requests for improvements or new features!

## 📄 License

[MIT](LICENSE) (or specify your license here)

---

**Made with ❤️ for modern digital marketing.**

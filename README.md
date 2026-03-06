# Mandeep Kumar — Personal Portfolio

> A futuristic, dark-themed, production-ready portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-blue?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.x-purple?logo=framer)

## ✨ Features

- **10 Content Sections**: Hero, About, Projects, Experience, Skills, Achievements, Certifications, Open Source, Research, Contact
- **CSS 3D Carousel**: Rotating image orbit on the hero section
- **Terminal Loading Screen**: Hacker-style typewriter intro animation
- **Dark/Light Mode**: Toggle between futuristic dark and clean light themes
- **Glassmorphism UI**: Frosted glass cards, neon accents, gradient borders
- **Animated Skill Bars**: Scroll-triggered progress bar animations
- **GitHub Integration**: Dynamic GitHub stats and contribution graph
- **Contact Form**: Ready for EmailJS/Resend backend integration
- **SEO Optimized**: Schema.org, OpenGraph, Twitter Cards, sitemap.xml, robots.txt
- **Custom Cursor**: Interactive cursor that responds to hover states
- **Scroll Progress**: Visual indicator of page scroll position
- **Fully Responsive**: Mobile-first design, optimized for all devices
- **Reduced Motion**: Respects `prefers-reduced-motion` accessibility preference

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/mandeepkumar/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-app/
├── public/
│   ├── images/          # Profile and project images
│   ├── resume.pdf       # Downloadable resume
│   ├── robots.txt       # SEO crawl directives
│   └── sitemap.xml      # XML sitemap
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles, animations, glassmorphism
│   │   ├── layout.js    # Root layout, SEO metadata, fonts
│   │   └── page.js      # Main page assembling all sections
│   ├── components/
│   │   ├── CustomCursor.js
│   │   ├── Footer.js
│   │   ├── LoadingScreen.js
│   │   ├── Navbar.js
│   │   ├── ScrollProgress.js
│   │   └── SectionWrapper.js
│   ├── data/
│   │   └── portfolio.js # All portfolio content (easy to edit)
│   └── sections/
│       ├── About.js
│       ├── Achievements.js
│       ├── Certifications.js
│       ├── Contact.js
│       ├── Experience.js
│       ├── Hero.js
│       ├── OpenSource.js
│       ├── Projects.js
│       ├── Research.js
│       └── Skills.js
├── tailwind.config.js   # Custom theme configuration
├── next.config.js       # Next.js configuration
└── package.json
```

## ✏️ Customization

### Content

All content is centralized in `src/data/portfolio.js`. Edit this single file to update:

- Personal info, links, and bio
- Projects, experiences, skills
- Certifications, research, achievements

### Design

- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors`
- **Animations**: Edit `tailwind.config.js` → `theme.extend.animation`
- **Styles**: Edit `src/app/globals.css` for glassmorphism, cursors, etc.

### Contact Form (EmailJS Setup)

1. Sign up at [emailjs.com](https://emailjs.com)
2. Create an email service and template
3. In `src/sections/Contact.js`, uncomment the EmailJS integration code
4. Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`

### GitHub Integration

In `src/data/portfolio.js`, update `githubUsername` to fetch real GitHub data.

## 🚢 Deployment (Vercel)

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your portfolio is live!

### Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## 📊 Performance Goals

- Lighthouse Performance: >90
- Lighthouse Accessibility: >95
- Lighthouse SEO: 100
- First Contentful Paint: <1.5s

## 📄 License

MIT License — feel free to use and customize.

---

Built with ❤️ by **Mandeep Kumar**

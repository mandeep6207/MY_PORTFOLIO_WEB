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

## 📁 Project Structure

```
MY_PORTFOLIO_WEB/
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
│   │   └── portfolio.js # All Portfolio content
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

### Content

All content is centralized in `src/data/portfolio.js`.

- Personal info, links, and bio
- Projects, experiences, skills
- Certifications, research, achievements

### Design

- **Colors**: `tailwind.config.js` → `theme.extend.colors`
- **Animations**:  `tailwind.config.js` → `theme.extend.animation`
- **Styles**:  `src/app/globals.css` for glassmorphism, cursors, etc.


Built with ❤️ by **Mandeep Kumar**

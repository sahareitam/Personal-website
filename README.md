# Sahar Eitam Portfolio Website

A responsive personal portfolio website built with Vue.js 3 showcasing my educational background, technical skills, work experience, and projects.

## 📋 Project Overview

This single-page application (SPA) serves as my professional portfolio, featuring:

- **Responsive design** optimized for mobile, tablet, and desktop experiences
- **Interactive sections** for home/intro, about, projects, and contact
- **Modern UI/UX** with smooth animations, hover effects, and gradient accents
- **Component-based architecture** using Vue.js 3
- **Mobile-first approach** with adaptive layouts and touch-friendly elements
- **Optimized performance** with efficient rendering and minimal dependencies

## 🔧 Technology Stack

- **Frontend Framework**: Vue.js 3
- **CSS Approach**: Custom CSS with Tailwind-inspired utility classes
- **Build System**: Vue CLI
- **Performance Tracking**: Google Analytics integration
- **Deployment**: GitHub Pages

## 🚀 Project Structure

```
portfolio-website/
├── public/                 # Static files
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # Site favicon
├── src/                    # Source code
│   ├── assets/             # Images and component files
│   │   └── components/     # Vue components
│   │       ├── AboutSection.vue      # Education and skills
│   │       ├── ContactSection.vue    # Contact information
│   │       ├── HomeSection.vue       # Introduction section
│   │       ├── Navbar.vue            # Navigation component
│   │       └── ProjectsSection.vue   # Portfolio projects
│   ├── App.vue             # Main app component
│   ├── main.js             # Application entry point
│   └── styles.css          # Global CSS styles
├── babel.config.js         # Babel configuration
├── package.json            # Project dependencies
├── vue.config.js           # Vue CLI configuration
├── .gitignore              # Git ignore rules
├── deploy.sh               # Deployment script
└── README.md               # Project documentation
```

## 🔍 Features

### 📌 Home Section
- Professional introduction with concise overview
- Social media links (GitHub, LinkedIn)
- Email copy-to-clipboard functionality
- Responsive profile image
- Smooth scroll navigation to other sections

### 📌 About Section
- Collapsible sections for better mobile experience
- Interactive education cards with course details
- Technical skills categorized by domain (Languages, Frontend, Backend, etc.)
- Military service background highlighting transferable skills
- Professional attributes and volunteering experience

### 📌 Projects Section
- Modern card-based design for project showcase
- Visual indicators for in-progress projects
- Color-coded project categories with gradient accents
- Tech stack tags for each project
- Links to GitHub repositories and live demos
- Mobile-optimized project cards with "More Information" modal

### 📌 Contact Section
- Interactive contact card with visual design
- Copy-to-clipboard functionality for email and phone
- Social media and professional profile links
- Animated copy confirmation

## 🛠️ Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/sahareitam/Personal-website.git
   cd Personal-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run development server:
   ```
   npm run serve
   ```
   The development server will start at `http://localhost:8080/`

## 📝 Build and Deployment

### Generate Production Build
```
npm run build
```

### Deploy to GitHub Pages
```
npm run deploy
```
This uses the `deploy.sh` script to push your built project to the gh-pages branch.

## 📱 Responsive Design

The portfolio implements a comprehensive responsive design approach:
- **Mobile-first design** with optimized layouts for all devices
- **Touch-friendly elements** with appropriate sizing for mobile interaction
- **Collapsible sections** to manage content density on smaller screens
- **Adaptive typography** that scales appropriately across devices
- **Optimized images** for faster loading on mobile networks

### Mobile Enhancements
- Hamburger menu for navigation
- Expandable/collapsible content sections
- Simplified project cards with "More Information" modal
- Touch-optimized contact buttons

## ⚡ Performance Optimization

- Minimal dependencies to reduce bundle size
- Efficient component rendering with Vue.js 3
- Lazy-loading techniques for images and components
- Google Analytics for performance monitoring

## 🔗 Live Demo

The live version of this portfolio is available at:
[https://sahareitam.github.io/Personal-website/](https://sahareitam.github.io/Personal-website/)

## 📄 License

This project is available for viewing and inspiration. Feel free to explore the code, but please do not use personal information or content without permission.

---

© 2025 Sahar Eitam. All rights reserved.
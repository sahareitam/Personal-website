# Sahar Eitam Portfolio Website

A responsive personal portfolio website built with Vue.js showcasing my educational background, technical skills, work experience, and projects.

## 📋 Project Overview

This single-page application (SPA) serves as my professional portfolio, featuring:

- **Responsive design** that works seamlessly on mobile, tablet, and desktop
- **Interactive sections** for home/intro, about, projects, and contact
- **Modern UI/UX** with animations, hover effects, and smooth scrolling
- **Component-based architecture** using Vue.js 3

## 🔧 Technology Stack

- **Frontend**: Vue.js 3
- **Styling**: Custom CSS (with Tailwind-inspired utility classes)
- **Deployment**: GitHub Pages

## 🚀 Project Structure

```
portfolio-website/
├── public/               # Static files
├── src/                  # Source code
│   ├── assets/           # Images and component files
│   │   └── components/   # Vue components
│   ├── App.vue           # Main app component
│   ├── main.js           # Application entry point
│   └── styles.css        # Global CSS styles
├── babel.config.js       # Babel configuration
├── package.json          # Project dependencies
└── vue.config.js         # Vue CLI configuration
```

## 🔍 Features

### 📌 Home Section
- Professional introduction with brief overview
- Social media links (GitHub, LinkedIn)
- Profile image and contact options

### 📌 About Section
- Education details with GPA and relevant coursework
- Technical skills categorized by domain
- Work experience with detailed descriptions
- Military service background
- Volunteering experience

### 📌 Projects Section
- Showcase of recent development projects
- Tech stack for each project
- Links to GitHub repositories and live demos
- Visual indicators for in-progress projects

### 📌 Contact Section
- Interactive contact information with copy-to-clipboard functionality
- Social media and professional profile links
- Clean, card-based design for easy access

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
   This will start the development server at `http://localhost:8080/`

## 📝 Build for Production

1. Generate production build:
   ```
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```
   This uses the `deploy.sh` script to push your built project to the gh-pages branch.

## 🔄 Development Workflow

- The project uses Vue CLI for development tooling
- Components are organized by section functionality
- Styles use a utility-class approach similar to Tailwind CSS
- Navigation includes automatic highlighting of the current section

## 📱 Responsive Design

The portfolio implements a fully responsive design approach:
- Mobile-first design principles
- Adaptive layouts for different screen sizes
- Hamburger menu for mobile navigation
- Optimized images and spacing for various devices

## 🔗 Live Demo

The live version of this portfolio is available at:
[https://sahareitam.github.io/Personal-website/](https://sahareitam.github.io/Personal-website/)

## 📄 License

This project is available for viewing and inspiration. Feel free to explore the code, but please do not use personal information or content without permission.

---

© 2025 Sahar Eitam. All rights reserved.
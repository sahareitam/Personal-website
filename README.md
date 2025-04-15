# Sahar Eitam Portfolio

A personal portfolio website built with Vue.js and Express.

## Project Overview

This project is a personal portfolio website for Sahar Eitam, a software engineering student. It showcases skills, education, projects, and contact information using a modern stack:

- **Frontend**: Vue.js 3
- **Backend**: Node.js with Express
- **API**: Simple contact form submission API

## Project Structure

The project is organized as a full-stack application with client and server directories:

```
portfolio-vue-express/
├── client/                    # Vue.js frontend
├── server/                    # Express backend
├── package.json               # Root package.json
└── README.md                  # Project documentation
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/sahareitam/private-website.git
   cd sahar-portfolio
   ```

2. Install all dependencies (root, client, and server):
   ```
   npm run install-all
   ```

### Development

1. Run both client and server in development mode:
   ```
   npm run dev
   ```

   This will start:
   - Vue.js development server on port 8080 (client)
   - Express backend server on port 5000 (server)

2. To run only the client:
   ```
   npm run client
   ```

3. To run only the server:
   ```
   npm run server
   ```

### Production Build

1. Build the Vue.js application:
   ```
   cd client
   npm run build
   ```

2. Start the production server:
   ```
   npm start
   ```

   This will serve the built Vue.js app from the Express server.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Single-page application with smooth scrolling navigation
- Sections for home/intro, about, projects, and contact
- Contact form with backend processing capability
- Mobile-friendly navigation menu

## Customization

### Content

Most content can be modified by editing the data sections in the Vue components:

- `HomeSection.vue` - Personal introduction
- `AboutSection.vue` - Education and skills
- `ProjectsSection.vue` - Project showcase
- `ContactSection.vue` - Contact information

### Styling

The project uses a CSS utility approach inspired by Tailwind, with custom classes defined in `styles.css`. You can modify these styles or add new ones as needed.


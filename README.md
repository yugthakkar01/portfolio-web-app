# Portfolio Website

A professional portfolio website showcasing data analysis skills and projects, built with Next.js and TypeScript.

## Overview

This portfolio website serves as a digital showcase of professional work, skills, and experience in data analysis. It features sections for personal introduction, project highlights, consultation services, and contact information.

## Features

- Responsive design optimized for all devices
- Clean, professional layout with modern UI components
- Sections for hero introduction, about, projects, and consultation
- Built with TypeScript for type safety and better development experience
- Optimized performance using Next.js framework

## Technology Stack

- **Framework:** Next.js 16.2.3
- **Language:** TypeScript
- **Frontend:** React 19.2.4
- **Styling:** CSS Modules
- **Linting:** ESLint
- **Build Tool:** Next.js built-in build system

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yugthakkar01/portfolio-web-app.git
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
portfolio-site/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── page.module.css # Page-specific styles
│   ├── components/        # Reusable React components
│   │   ├── Hero.tsx       # Hero section component
│   │   ├── About.tsx      # About section component
│   │   ├── Projects.tsx   # Projects section component
│   │   ├── Consultation.tsx # Consultation section component
│   │   └── Navbar.tsx     # Navigation component
│   └── data/              # Static data files
│       └── profile-data.json # Profile information
├── package.json           # Project dependencies and scripts
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── eslint.config.mjs      # ESLint configuration
```

## Deployment

The application can be deployed to platforms like Vercel, Netlify, or any static hosting service that supports Next.js applications.

For Vercel deployment:
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure the build settings
3. Deploy with a single click

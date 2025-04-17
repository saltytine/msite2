# Malectrica Cybersecurity Website

A modern, responsive cybersecurity research collective website built with Next.js 14, React, and Tailwind CSS. This website showcases security tools, vulnerabilities, POCs, write-ups, blog posts, and team information.

![Malectrica Website Screenshot](/placeholder.svg?height=400&width=800)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Overview

Malectrica is a cybersecurity research collective website designed to showcase security research, tools, and knowledge. The website features a modern, dark-themed UI with interactive elements and comprehensive content organization.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Dark Theme**: Sleek dark theme with blue accents optimized for cybersecurity content
- **Content Sections**:
  - Tools showcase
  - Vulnerabilities database
  - Proof of Concepts (POCs)
  - Technical Write-ups
  - Blog with detailed articles
  - Team profiles
- **Interactive Elements**:
  - Filtering and sorting capabilities
  - Search functionality
  - Animated transitions
  - Social media integration
  - Newsletter subscription
- **SEO Optimized**: Meta tags and structured data for better search engine visibility

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.17.0 or higher)
- **npm** (v9.6.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** for version control

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

   \`\`\`bash
   git clone https://github.com/yourusername/malectrica-website.git
   cd malectrica-website
   \`\`\`

2. **Install dependencies**

   Using npm:
   \`\`\`bash
   npm install
   \`\`\`

   Or using yarn:
   \`\`\`bash
   yarn install
   \`\`\`

3. **Set up environment variables**

   Create a `.env.local` file in the root directory with the following variables:
   \`\`\`
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=Malectrica
   NEXT_PUBLIC_SITE_DESCRIPTION="A cybersecurity research collective dedicated to finding vulnerabilities, developing security tools, and sharing knowledge with the community."
   \`\`\`

4. **Run the development server**

   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Configuration

### Content Configuration

The website content is primarily managed through data files located in the `data` directory:

- `tools.ts`: Security tools information
- `vulnerabilities.ts`: Vulnerability database
- `pocs.ts`: Proof of Concepts
- `writeups.ts`: Technical write-ups
- `blog.ts`: Blog posts
- `team.ts`: Team member profiles

### Styling Configuration

The website uses Tailwind CSS for styling. The main configuration files are:

- `tailwind.config.js`: Tailwind configuration including custom colors and theme
- `app/globals.css`: Global CSS styles and Tailwind directives

### Site Configuration

General site configuration can be modified in:

- `app/layout.tsx`: Main layout including metadata
- `next.config.mjs`: Next.js configuration

## Development

### Development Workflow

1. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

2. Make your changes to the codebase

3. Test your changes locally at [http://localhost:3000](http://localhost:3000)

### Code Structure

The project follows the Next.js 14 App Router structure:

- `app/`: Contains all pages and layouts
  - `page.tsx`: Home page
  - `layout.tsx`: Root layout
  - `tools/`, `vulnerabilities/`, etc.: Route segments for different sections
- `components/`: Reusable React components
- `lib/`: Utility functions and helpers
- `public/`: Static assets

### Adding New Content

To add new content (e.g., a new blog post):

1. Add the content data to the appropriate data file (e.g., `data/blog.ts`)
2. If needed, create new components in the `components/` directory
3. Update the relevant page component to display the new content

## Deployment

### Deploying to Vercel (Recommended)

The easiest way to deploy the website is using Vercel:

1. Push your code to a GitHub, GitLab, or Bitbucket repository

2. Import the project in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Configure project settings (environment variables, build settings)
   - Click "Deploy"

3. Your site will be deployed to a Vercel URL (e.g., `malectrica.vercel.app`)

### Deploying to a Traditional Web Server

To deploy to a traditional web server:

1. Build the project:
   \`\`\`bash
   npm run build
   # or
   yarn build
   \`\`\`

2. The build output will be in the `.next` directory

3. Transfer the following files/directories to your web server:
   - `.next/`
   - `public/`
   - `package.json`
   - `next.config.mjs`

4. Install production dependencies on the server:
   \`\`\`bash
   npm install --production
   # or
   yarn install --production
   \`\`\`

5. Start the production server:
   \`\`\`bash
   npm start
   # or
   yarn start
   \`\`\`

### Server Requirements

For a production deployment, your server should have:

- Node.js v18.17.0 or higher
- At least 1GB of RAM
- Sufficient disk space for assets and the Next.js build
- HTTPS certificate for secure connections

### Using a Reverse Proxy

For production deployments, it's recommended to use a reverse proxy like Nginx:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name yourdomain.com www.yourdomain.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

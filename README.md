## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18.17.0 or higher)
- **npm** (v9.6.0 or higher) or **yarn** (v1.22.0 or higher)
- **Some git thing** to auto update

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
   NEXT_PUBLIC_SITE_DESCRIPTION="1337 h4x0r people website"
   \`\`\`

4. **Run the development server**

   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**

   Go to [http://localhost:3000](http://localhost:3000) to see the website.

## Configuration

### Content Configuration

The website content is mostly managed through data files in the `data` directory:

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
- At least 1 GB of RAM
- Enough disk space for assets and the Next.js build
- HTTPS certificate for secure connections (soooooon)

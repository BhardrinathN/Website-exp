# Divine Packaging Industry Website

This is a production-ready React web application for Divine Packaging Industry, built with React 18, Vite, Tailwind CSS v3, Sanity CMS, Framer Motion, and React Router v6.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env` and fill in your Sanity and EmailJS credentials:
```bash
cp .env.example .env
```

Required variables:
- `VITE_SANITY_PROJECT_ID` - Your Sanity project ID
- `VITE_SANITY_DATASET` - Sanity dataset (default: production)
- `VITE_SANITY_API_VERSION` - Sanity API version (default: 2024-01-01)
- `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID for contact form
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key

### 3. Setup Sanity CMS
If you want to set up the Sanity Studio (to manage content), deploy the schemas located in `sanity/schemas`:
```bash
cd sanity
npm install
sanity deploy
```
*(Make sure to run `sanity init` if setting up a brand new project, using the schemas provided in `sanity/schemas`)*

**Note**: The application has fallback data implemented. It will work flawlessly using mock content (`src/lib/fallbackData.js`) if Sanity CMS is not configured.

### 4. Running the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173` to view the website.

### 5. Building for Production
```bash
npm run build
npm run preview
```

## Features
- **Responsive Design**: Mobile-first design system utilizing Tailwind CSS.
- **Animations**: Page transitions and scroll animations using Framer Motion.
- **CMS Integration**: Schema-ready for Sanity CMS integration.
- **Contact Form**: EmailJS integration ready.
- **SEO Ready**: React Helmet Async configured with JSON-LD schema on homepage.

# Anclote Pharmacy Website

A modern, professional pharmacy website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Home Page** - Hero section, services overview, testimonials, and stats
- 💊 **Services Pages** - Comprehensive information about all pharmacy services
  - Pharmacy Services
  - Medication Adherence
  - Durable Medical Equipment
  - Medication Therapy Management
  - Long Term Care
  - Medicare Open Enrollment
  - Multi-Dose Packaging
  - Medication Synchronization
- 💉 **Immunizations** - Complete vaccination services information
- 🔍 **LiveScan Services** - Fingerprinting services
- 📞 **Contact Page** - Contact form, location, and hours
- ℹ️ **About Page** - Company story, mission, and values
- 📝 **Refill Form** - Easy prescription refill requests
- 👤 **New Patient Form** - Comprehensive patient registration
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Modern UI** - Professional design with smooth animations and transitions

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd "/Users/akashpatel/Desktop/anclote pharmacy"
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
anclote-pharmacy/
├── app/                          # Next.js app directory
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── immunizations/            # Immunizations page
│   ├── livescan/                 # LiveScan services
│   ├── new-patient/              # New patient registration
│   ├── refill/                   # Prescription refill form
│   ├── services/                 # All service pages
│   │   ├── durable-medical-equipment/
│   │   ├── long-term-care/
│   │   ├── medication-adherence/
│   │   ├── medication-synchronization/
│   │   ├── medication-therapy-management/
│   │   ├── medicare-open-enrollment/
│   │   ├── multi-dose-packaging/
│   │   └── pharmacy/
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── Header.tsx                # Site header with navigation
│   └── Footer.tsx                # Site footer
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`:

- **Primary colors:** Blue tones (used for main branding)
- **Accent colors:** Orange tones (used for LiveScan services)

### Content

All content is embedded directly in the page components. To modify:

1. Navigate to the appropriate page in the `app/` directory
2. Update the text, images, or structure as needed
3. Changes will hot-reload in development mode

### Contact Information

Update contact details in:
- `components/Header.tsx` - Top bar and footer
- `components/Footer.tsx` - Footer contact section
- `app/contact/page.tsx` - Contact page

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Other Platforms

Build the production bundle:

```bash
npm run build
```

The `out` directory (for static export) or `.next` directory (for Node.js deployment) contains the production-ready application.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2025 Anclote Pharmacy. All rights reserved.

## Support

For questions or support, contact:
- Phone: (727) 944-5800
- Email: info@anclotepharmacy.com
- Address: 1933 N Pinellas Ave, Tarpon Springs, FL 34689


# Crownbook Academy - Educational Institution Website

A modern, responsive static website for Crownbook Academy built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

### ✅ Static Pages (5-7 Pages)
- **Home** - Hero section, features, and call-to-action
- **About Institution** - Mission, vision, values, and why choose us
- **Courses / Services** - Comprehensive course listings with detailed information
- **Overseas Universities / Countries** - Top study destinations and universities
- **Admission Process** - Step-by-step admission guide
- **Contact Us** - Contact form, information, and Google Maps integration
- **FAQs** - Frequently asked questions with expandable answers
- **Privacy Policy** - Complete privacy policy page
- **Terms & Conditions** - Terms of service page

### ✅ Responsive Design
- Mobile-first approach
- Fully responsive on mobile, tablet, and desktop
- Modern, clean, and professional UI
- Institution-friendly color scheme (blue and purple gradient)

### ✅ Lead & Contact Features
- **Contact Form** - Name, email, phone, and message fields
- **Click-to-Call Button** - Floating call button for easy access
- **WhatsApp Button** - Floating WhatsApp button for instant messaging
- **Google Maps Integration** - Embedded map showing institution location

### ✅ SEO & Performance
- SEO-optimized meta tags for all pages
- Page-specific titles and descriptions
- Search-engine friendly URLs
- Fast loading with optimized images
- Lightweight code structure

### ✅ Legal & Trust Elements
- Privacy Policy page
- Terms & Conditions page
- Links in footer

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd crownbook-academy
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

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Update Institution Information

Edit `/app/config/constants.ts` to update:
- Institution name
- Email address
- Phone number
- WhatsApp number
- Physical address
- Google Maps coordinates
- Social media links

### Google Maps Integration

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Update the API key in `/app/contact/page.tsx`:
   - Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key

### Customization

- **Colors**: Edit Tailwind CSS classes in components (blue-600, purple-600, etc.)
- **Content**: Update page content in respective page files under `/app`
- **Styling**: Modify `app/globals.css` for global styles

## Project Structure

```
crownbook-academy/
├── app/
│   ├── about/          # About page
│   ├── admission/      # Admission process page
│   ├── components/     # Reusable components (Header, Footer, FloatingButtons)
│   ├── config/         # Configuration constants
│   ├── contact/        # Contact page with form and maps
│   ├── courses/       # Courses/Services page
│   ├── faqs/           # FAQs page
│   ├── privacy-policy/ # Privacy policy page
│   ├── terms/          # Terms & conditions page
│   ├── universities/   # Universities/Countries page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

## Deployment

### Domain & Hosting Options

The website can be deployed to:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Hostinger VPS** (US/Europe servers)
- Any static hosting service

### SSL Certificate

Most hosting providers offer free SSL certificates (Let's Encrypt). Ensure HTTPS is enabled for security.

### Deployment Steps

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to your hosting provider

3. Configure your domain to point to the hosting server

4. Enable SSL/HTTPS

## Features Implementation Details

### Contact Form
- Uses mailto link to open default email client
- Form validation included
- Responsive design

### Floating Action Buttons
- Fixed position at bottom-right
- WhatsApp and Call buttons
- Smooth hover animations

### Google Maps
- Embedded iframe
- Requires Google Maps API key
- Shows institution location

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Support

For questions or support, contact:
- Email: info@crownbookacademy.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

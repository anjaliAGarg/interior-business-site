# Interior Design Business Website

A modern, responsive React + Vite website for an interior design business with lead capture and WhatsApp integration.

## Features

✨ **Modern & Responsive Design**
- Mobile-first responsive layout
- Smooth animations and transitions
- Professional color scheme and typography

🏠 **Key Sections**
- Hero section with call-to-action
- Services overview
- Project gallery with 6+ project showcase
- Client testimonials with ratings
- Video section for project walkthroughs
- Contact section with WhatsApp integration

📋 **Lead Capture**
- Popup contact form that appears on first visit
- Collects visitor name, phone, email, and project type
- Sends information directly to WhatsApp
- Pre-filled message with all visitor details

🚀 **Low-Cost Hosting**
- Built with Vite for ultra-fast builds
- Optimized for deployment on Vercel or Netlify
- Can be hosted completely free with custom domain (~$10-15/year)

## Project Structure

```
interior-business-site/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Services.jsx        # Services grid
│   │   ├── Projects.jsx        # Project gallery
│   │   ├── Testimonials.jsx    # Client testimonials
│   │   ├── Videos.jsx          # Video section
│   │   ├── Contact.jsx         # Contact section
│   │   ├── ContactModal.jsx    # Lead capture form
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
└── .gitignore                 # Git ignore rules
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd interior-business-site
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

Build the optimized production bundle:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Customization

### Update Business Details

1. **Company Name**: Edit the logo in `src/components/Header.jsx`
2. **Contact Information**: Update phone, email, and address in `src/components/Contact.jsx`
3. **WhatsApp Number**: Replace `919876543210` in `src/components/ContactModal.jsx` with your actual WhatsApp number
4. **Colors**: Modify the color variables in `src/index.css`
5. **Projects**: Add your project images in `src/components/Projects.jsx`
6. **Testimonials**: Update client quotes in `src/components/Testimonials.jsx`
7. **Videos**: Add YouTube video links in `src/components/Videos.jsx`

### Project Gallery

Replace placeholder images with your actual project photos:
- Update the `image` URLs in `Projects.jsx`
- Recommended image size: 400x300px
- Use high-quality images that showcase your work

### Videos

Add your own YouTube videos:
1. Get the embed URL from YouTube (Share > Embed)
2. Replace the `url` in `src/components/Videos.jsx`

## Deployment

### Free Hosting Options

#### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your GitHub repo
4. Deploy automatically
5. Point your domain to Vercel's nameservers

#### Option 2: Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository and deploy
5. Configure custom domain in Netlify settings

#### Option 3: GitHub Pages
1. Update `vite.config.js` with `base: '/your-repo-name/'`
2. Run `npm run build`
3. Push to GitHub and enable Pages in repo settings

### Custom Domain

1. Purchase a domain from GoDaddy, Namecheap, or similar
2. Point the domain's DNS records to your hosting provider
3. For Vercel: Add domain in project settings
4. For Netlify: Add domain in site settings

**Estimated Annual Cost**: $10-15 (domain only, hosting is free)

## Lead Capture Flow

1. Visitor lands on the website
2. Contact form popup appears after 3 seconds
3. Visitor fills in their details (name, phone, email, project type, message)
4. Submit button opens WhatsApp with pre-filled message
5. Conversation continues on WhatsApp
6. No backend server needed - all communication is direct

## Performance Optimizations

- Lazy loading for images
- Smooth scroll behavior
- Optimized CSS for fast rendering
- Minimal JavaScript bundle size
- SEO-friendly structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

- Add more project filtering/categories
- Implement image lightbox for gallery
- Add blog section
- Newsletter signup form
- Before/After project comparison slider
- Client portfolio link
- Google Analytics integration

## Support

For questions or issues:
- Email: jmconstructions@gmail.com
- Phone: +91 9821859634
- WhatsApp: +91 9821859634

## License

This project is open source and available for use.

---

Built with ❤️ using React + Vite

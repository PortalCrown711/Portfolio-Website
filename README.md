# Modern Portfolio Website

A modern, professional, and recruiter-friendly portfolio website built with HTML, CSS, and JavaScript.

## Features

### 🎨 Modern Design
- Clean, minimal design with gradient backgrounds
- Glassmorphism cards and effects
- Perfect responsiveness (mobile, tablet, desktop)
- Professional typography using Inter font

### 🌙 Dark Mode
- Toggle between light and dark themes
- Persistent theme preference storage
- Smooth theme transitions

### 💼 Professional Experience
- **Angular Developer Intern** at Infosys Springboard (2024 - Present)
- Real-world project development experience
- Industry-standard development practices

### ✨ Interactive Elements
- Typing animation effect in hero section
- Smooth scroll animations (AOS library)
- Hover effects on cards and buttons
- Sticky navigation with scroll effects
- Scroll progress bar

### 📱 Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized for all screen sizes

### 📧 Contact Form
- Working contact form with EmailJS integration
- Form validation and loading states
- Success/error notifications

### 🛠️ Skills Showcase
- Categorized skills (Frontend, Backend, Tools)
- Progress bars with smooth animations
- Icon-based skill representation
- **Angular expertise highlighted**

### 💼 Projects Section
- Modern card-based layout with hover effects
- Project images with overlay effects
- Tech stack badges for each project
- Live demo and GitHub links
- **Angular E-Commerce project added**
- **Mobimouse - Mobile touchpad control app with research publication**
- **Clipnugget - Published extension on Microsoft & Firefox stores + Microsoft Store app**

### 📚 Research & Publications
- **Mobimouse Research Paper** - Published in International Journal of Computer Applications
- Innovative mobile application for laptop touchpad control
- Cross-platform compatibility and gesture recognition features

### 🏆 Published Extensions & Apps
- **Clipnugget** - Smart clipboard manager extension
- Available on Microsoft Edge Add-ons Store
- Available on Firefox Add-ons Store
- Available as desktop app on Microsoft Store

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript (ES6+)** - Interactive functionality
- **AOS Library** - Scroll animations
- **EmailJS** - Contact form handling
- **Font Awesome** - Icons

## Project Structure

```
portfolio-website/
├── portfolio website.html    # Main HTML file
├── portfolio.css            # Stylesheet
├── portfolio.js             # JavaScript functionality
└── 3d Man.avif             # Profile image
```

## Setup Instructions

### 1. Clone or Download
```bash
# If using git
git clone <repository-url>
cd portfolio-website
```

### 2. Configure EmailJS (Optional)
To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create a new email template
4. Update the JavaScript file with your credentials:

```javascript
// In portfolio.js, replace these placeholders:
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

### 3. Run Locally
```bash
# Using Python (recommended)
python -m http.server 8000

# Or using Node.js
npx serve .

# Or using PHP
php -S localhost:8000
```

### 4. Open in Browser
Navigate to `http://localhost:8000` in your browser.

## Customization

### Colors
The primary color scheme uses a purple gradient (`#667eea` to `#764ba2`). To change colors:

1. Update CSS custom properties in `:root`
2. Modify gradient definitions
3. Update button and accent colors

### Content
- Update personal information in the HTML
- Replace project details and links
- Add/remove skills as needed
- Modify contact information

### Images
- Replace `3d Man.avif` with your profile image
- Update project placeholder images with actual screenshots
- Ensure images are optimized for web

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Minimal JavaScript for fast loading
- CSS Grid and Flexbox for efficient layouts
- Lazy loading animations

## SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Optimized headings hierarchy
- Alt text for images

## Accessibility

- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Reduced motion support

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch and save
4. Site will be available at `https://username.github.io/repository-name`

### Netlify/Vercel
1. Connect GitHub repository
2. Deploy automatically
3. Custom domain support available

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Prince Pal
- Email: princevpal11@gmail.com
- LinkedIn: [linkedin.com/in/princepal11](https://www.linkedin.com/in/princepal11)
- GitHub: [github.com/portalcrown711](https://github.com/portalcrown711)

---

Built with ❤️ by Prince Pal
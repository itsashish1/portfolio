# Ashish Yadav Portfolio - React + Vite

A modern, responsive portfolio website built with React and Vite, showcasing industrial automation expertise and web development skills.

## Features

- ⚡ **Fast Development** - Vite for lightning-fast HMR
- ⚛️ **React 18** - Latest React features with hooks
- 🎨 **Beautiful UI** - Modern design with smooth animations
- 🌓 **Dark/Light Mode** - Theme toggle support
- 📱 **Responsive Design** - Works perfectly on all devices
- 🚀 **Performance Optimized** - Code splitting and lazy loading
- ♿ **Accessible** - WCAG compliant
- 📊 **Smooth Animations** - CSS animations and transitions

## Project Structure

```
my-portfolio/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/          (images, icons)
│   ├── components/      (React components)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── GitHub.jsx
│   │   ├── Learning.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## Components

### Navbar
- Sticky navigation with smooth scrolling
- Dark/Light mode toggle
- Mobile responsive hamburger menu
- Active link highlighting

### Hero
- Animated typewriter effect
- Parallax scrolling
- Call-to-action buttons
- Animated floating blocks

### About
- Introduction and background
- Highlight cards with icons
- Professional summary

### Skills
- Organized skill categories
- Industrial Automation
- Backend Development
- Frontend Development
- Tools & Technologies

### Projects
- Project filtering by category
- Featured projects showcase
- Technology tags
- Project descriptions

### GitHub
- GitHub stats display
- Recent activity timeline
- Call-to-action to GitHub profile

### Learning
- Blog-style learning journal
- Date-categorized entries
- Professional growth documentation

### Contact
- Contact information
- Social media links
- Contact form with validation
- Email integration ready

### Footer
- Quick navigation links
- Social media links
- Copyright information

### ScrollToTop
- Smooth scroll to top button
- Shows/hides based on scroll position

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Adding Your Images

1. Move your image files to the `src/assets/` directory
2. Update the image path in `Hero.jsx`:
```jsx
<img src="path/to/your/image.jpg" alt="Ashish Yadav" className="profile-image" />
```

### Customizing Colors

Edit the CSS variables in `src/index.css`:
```css
:root {
    --primary-color: #00d4ff;
    --secondary-color: #ff6b9d;
    /* ... other variables ... */
}
```

### Customizing Content

Each component contains its own data:
- **Skills**: Modify the `skillsData` array in `Skills.jsx`
- **Projects**: Modify the `projects` array in `Projects.jsx`
- **Learning**: Modify the `journalEntries` array in `Learning.jsx`
- **About**: Edit content in `About.jsx`

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables
- **Font Awesome** - Icons
- **Vanilla JavaScript** - No additional libraries needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size
- CSS-in-JS animations for better performance
- Lazy loading ready
- Code splitting with Vite

## Features Implemented

✅ Responsive navigation with hamburger menu
✅ Smooth scroll behavior
✅ Dark/Light theme toggle
✅ Intersection observer animations
✅ Form validation
✅ Social media links
✅ Mobile-optimized layout
✅ Accessibility features
✅ SEO-friendly structure
✅ Fast load times with Vite

## Future Enhancements

- [ ] Blog integration
- [ ] Project search/filter
- [ ] Newsletter signup
- [ ] Analytics integration
- [ ] CMS integration
- [ ] API-based content

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: gtc.ashish1@gmail.com
- **GitHub**: https://github.com/itsashish1
- **LinkedIn**: https://linkedin.com

---

**Engineering precision meets creative code.** ⚡

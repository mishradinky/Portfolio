# 3D Interactive Portfolio - Dinky Mishra

A modern 3D interactive portfolio website showcasing projects, skills, and experience through immersive web technologies. Built with React, Three.js, and cutting-edge web frameworks.

## Features

- **3D Interactive Background**: Full 360° rotating scene that responds to scroll
- **Smooth Navigation**: Vertical scroll-based sections with touch and drag support
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern Animations**: GSAP and Framer Motion powered transitions
- **Contact Integration**: Functional contact form with EmailJS

## Tech Stack

**Frontend & Framework**
- React 19 with Vite
- Three.js & React Three Fiber for 3D graphics
- Tailwind CSS for styling

**Animation & Effects**
- Framer Motion for React animations
- GSAP for high-performance animations
- Lottie React for vector animations
- React Three Postprocessing for visual effects

**Additional Tools**
- EmailJS for contact form functionality
- React Responsive for device detection

## Quick Start

1. **Clone and install**
```bash
git clone https://github.com/mishradinky/3d-portfolio.git
cd 3d-portfolio
npm install
```

2. **Environment setup**
Create `.env` file:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. **Development**
```bash
npm run dev    # Start development server
npm run build  # Build for production
```

## Project Structure

```
src/
├── components/
│   ├── 3d/Scene.jsx          # 3D background component
│   └── Navbar.jsx            # Navigation
├── sections/
│   ├── HomeSectionFixed.jsx
│   ├── ProjectGridSection.jsx
│   ├── SkillsSectionWithRobot.jsx
│   ├── ExperienceSectionWithRobot.jsx
│   ├── CertificationsSectionWithRobot.jsx
│   └── ContactSectionWithRobot.jsx
├── config/emailjs.config.js  # Email configuration
└── lottie/robot.json         # Animation files
```

## Browser Support

Supports modern browsers with WebGL capability:
- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Mobile browsers with WebGL support

## Performance Optimizations

- Optimized 3D models with LOD (Level of Detail)
- Code splitting and lazy loading
- Compressed textures and assets
- Responsive rendering quality

## Contact

- **Email**: mishradinky@gmail.com
- **LinkedIn**: [Mishra Dinky](https://www.linkedin.com/in/mishradinky/)
- **GitHub**: [@mishradinky](https://github.com/mishradinky)

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

Built with React, Three.js, and modern web technologies.

# 🚀 3D Interactive Portfolio - Dinky

A cutting-edge 3D interactive portfolio website built with React, Three.js, and modern web technologies. Features immersive 3D backgrounds, smooth animations, and responsive design.

![Portfolio Preview](https://via.placeholder.com/800x400?text=3D+Portfolio+Preview)

## ✨ Features

### 🎯 Core Features
- **Immersive 3D Background**: Full 360° rotating 3D scene that responds to scroll
- **Interactive Robot Animations**: Lottie-powered robot animations throughout sections
- **Smooth Scrolling**: Vertical scroll-based navigation with drag support
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatic theme switching based on system preferences

### 🎨 Visual Features
- **3D Scene Integration**: React Three Fiber for WebGL 3D graphics
- **Post-processing Effects**: Advanced visual effects and shaders
- **GSAP Animations**: Smooth, performant animations
- **Framer Motion**: React-based animation library
- **Lottie Animations**: High-quality vector animations

### 📱 User Experience
- **Touch Support**: Full mobile touch interaction
- **Drag Navigation**: Mouse/touch drag for scrolling
- **Progress Indicators**: Visual scroll progress tracking
- **Smooth Transitions**: Seamless section transitions
- **Keyboard Navigation**: Full keyboard accessibility

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animations
- **GSAP** - High-performance animations
- **Lottie React** - Vector animation player

### 3D & Graphics
- **Three.js** - Core 3D library
- **React Three Postprocessing** - Post-processing effects
- **GLTF Models** - 3D model format support

### Contact & Forms
- **EmailJS** - Email service integration
- **React Responsive** - Responsive design utilities

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/3d-portfolio.git
cd 3d-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Start development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

## 📁 Project Structure

```
3d-portfolio/
├── public/
│   ├── models/
│   │   └── main.glb          # 3D model files
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── Scene.jsx     # 3D background component
│   │   ├── Navbar.jsx        # Navigation component
│   │   └── [Other components]
│   ├── sections/
│   │   ├── HomeSectionFixed.jsx
│   │   ├── ProjectGridSection.jsx
│   │   ├── SkillsSectionWithRobot.jsx
│   │   ├── ExperienceSectionWithRobot.jsx
│   │   ├── CertificationsSectionWithRobot.jsx
│   │   └── ContactSectionWithRobot.jsx
│   ├── config/
│   │   └── emailjs.config.js # Email configuration
│   ├── lottie/
│   │   └── robot.json        # Lottie animation files
│   ├── App.jsx               # Main application component
│   └── main.jsx              # Application entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎮 Usage Guide

### Navigation
- **Mouse**: Scroll vertically to navigate sections
- **Touch**: Swipe up/down on mobile devices
- **Drag**: Click and drag to scroll (desktop)
- **Keyboard**: Arrow keys for navigation

### Interactive Elements
- **3D Background**: Rotates based on scroll position
- **Robot Animations**: Interactive Lottie animations
- **Contact Form**: Fully functional with EmailJS
- **Responsive Grid**: Adapts to screen size

## 🎨 Customization

### 3D Models
Replace 3D models in `public/models/` with your own `.glb` files.

### Colors & Theme
Update theme colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Content Updates
Modify content in respective section files in `src/sections/`.

### Lottie Animations
Replace animations in `src/lottie/` with your own Lottie JSON files.

## 📊 Performance Optimization

### 3D Performance
- **LOD (Level of Detail)**: Optimized 3D models
- **Texture Compression**: Compressed textures for faster loading
- **Frustum Culling**: Only renders visible objects
- **Responsive Rendering**: Adjusts quality based on device

### Bundle Optimization
- **Code Splitting**: Lazy-loaded sections
- **Asset Optimization**: Compressed images and models
- **Tree Shaking**: Removes unused code

## 🧪 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run lint         # Run ESLint
npm run preview      # Preview production build

# Building
npm run build        # Build for production

# Testing
npm run lint         # Check code quality
```

## 🌐 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Mobile browsers** with WebGL support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js Community** - For amazing 3D resources
- **React Three Fiber Team** - For excellent React integration
- **GSAP Team** - For smooth animation library
- **LottieFiles** - For beautiful animations
- **Tailwind CSS Team** - For utility-first CSS framework

## 📞 Contact

- **Email**: mishradinky@gmail.com
- **LinkedIn**: [Mishra Dinky](https://www.linkedin.com/in/mishradinky/)
- **GitHub**: [@mishradinky](https://github.com/mishradinky)

---

Made with ❤️ and Three.js

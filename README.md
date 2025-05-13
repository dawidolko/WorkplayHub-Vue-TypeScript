# WorkplayHub-Vue-TypeScript

## Table of contents

- [WorkplayHub-Vue-TypeScript](#WorkplayHub-Vue-TypeScript)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [:mount_fuji: The Challenge](#mount_fuji-the-challenge)
    - [:camera: Screenshot](#camera-screenshot)
    - [:link: Live Demo](#link-live-demo)
  - [My process](#my-process)
    - [:wrench: Built with](#wrench-built-with)
    - [:bulb: What I've learned](#bulb-what-ive-learned)
      - [Vue Router](#vue-router)
      - [State management (Pinia)](#state-management-pinia)
      - [TypeScript](#typescript)
      - [Tailwind CSS](#tailwind-css)
      - [Component Testing](#component-testing)
      - [Search Engine Optimization](#search-engine-optimization)
      - [Performance Optimization](#performance-optimization)
      - [Code Organization](#code-organization)
      - [Responsive Design](#responsive-design)
    - [:mountain_bicyclist: Continued development](#mountain_bicyclist-continued-development)
    - [:cake: Acknowledgements & Useful resources](#cake-acknowledgements--useful-resources)
  - [Author](#author)


## Overview

### :mount_fuji: The Challenge

Wanting to showcase my gaming and office workspace setup while improving my frontend development skills with Vue.js and TypeScript, I created BattleStation - an interactive portfolio for visualizing my desk setup and components.

Users can explore a responsive interface that presents my gaming/office workspace with detailed component specifications, interactive 3D views, and personalized recommendations. The application features a clean, modern UI with smooth transitions, a theme toggle between dark and light modes, and detailed product information for each component.

I've implemented a virtual tour feature that allows visitors to navigate through different angles of the setup and zoom in on specific components. The application also includes a "build your own" recommendation section based on different budget tiers.

## My process

### :wrench: Built with

- [Vue.js 3](https://vuejs.org/) - Progressive JavaScript Framework
- [Vue Router](https://router.vuejs.org/) - Official Router for Vue.js
- [Pinia](https://pinia.vuejs.org/) - Intuitive, type safe state management
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Cypress](https://www.cypress.io/) - Modern E2E Testing Framework
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Code quality tools
- [Unhead](https://unhead.unjs.io/) - Document head manager for SEO optimization
- [VueUse](https://vueuse.org/) - Collection of Vue Composition Utilities

### :bulb: What I've learned

#### Vue Router

- Implemented dynamic routing with params to showcase different components of my setup
- Added proper navigation guards to ensure smooth transitions between views
- Utilized lazy loading of components to improve initial page load performance
- Preserved scroll position when navigating between different views
- Created nested routes for the component details section

#### State management (Pinia)

- Created centralized stores for all application state
- Implemented type-safe state management with TypeScript integration
- Used composition API to make state reactive and accessible throughout the application
- Leveraged local storage persistence for user preferences

#### TypeScript

- Defined proper interfaces for all data structures
- Implemented strong type checking throughout the application
- Created reusable utility types for common patterns
- Used generics for flexible component props

#### Tailwind CSS

- Built a responsive layout that works seamlessly from mobile to desktop
- Created a custom theme with configurable color schemes
- Used Tailwind's utility classes for consistent spacing and typography
- Implemented dark mode toggle with proper class transitions

#### Component Testing

- Wrote comprehensive unit tests for key components
- Created E2E tests that simulate real user journeys
- Implemented visual regression tests to ensure UI consistency

#### Search Engine Optimization

- Added proper metadata for all pages using Unhead
- Implemented Open Graph tags for better social media sharing
- Used semantic HTML structure throughout the application
- Added structured data for better search engine indexing

#### Performance Optimization

- Optimized asset loading with proper lazy loading techniques
- Converted images to WebP format for smaller file sizes
- Implemented code splitting to reduce initial bundle size
- Added proper caching strategies for static assets

#### Code Organization

- Created a modular file structure for better maintainability
- Separated concerns between components, views, and utilities
- Used consistent naming conventions throughout the codebase
- Added comprehensive documentation for all major components

#### Responsive Design

- Implemented a mobile-first approach to design
- Created responsive component layouts that adapt to different screen sizes
- Used CSS Grid and Flexbox for complex layouts
- Added touch-friendly interactions for mobile users

### :mountain_bicyclist: Continued development

In future iterations of this project, I plan to:

- Add 3D model integration using Three.js for more immersive component visualization
- Implement user authentication to allow visitors to save their preferred setups
- Create a comparison feature for different workspace configurations
- Add a budget calculator for people wanting to build a similar setup
- Implement WebGL-powered effects for more dynamic visual presentations
- Add internationalization support for multiple languages
- Create a PWA version for offline access
- Integrate with peripherals APIs for real-time hardware status (when available)

### :cake: Acknowledgements & Useful resources

I would like to thank the following resources that were instrumental in creating this project:

- [Vue Documentation](https://vuejs.org/guide/introduction.html) for comprehensive guides
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) for styling references
- [Vue Mastery](https://www.vuemastery.com/) for advanced Vue tutorials
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) for type system guidance
- [Josh Comeau's CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) for a solid styling foundation
- [Pinia Documentation](https://pinia.vuejs.org/introduction.html) for state management patterns

Special thanks to the creators of the 3D models and images used throughout the application.

## Author

- Website - [dawidolko.pl](https://dawidolko.pl/)
- GitHub - [@dawidolko](https://github.com/dawidolko)
- LinkedIn - [@dawidolko](https://www.linkedin.com/in/dawidolko/)

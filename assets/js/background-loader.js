/**
 * Background Image Preloader and Manager
 * Improves user experience by preloading background images
 */

class BackgroundManager {
  constructor() {
    // Use relative paths that work with Jekyll's baseurl configuration
    const basePath = window.location.pathname.includes('/magi-scholar') ? '/magi-scholar' : '';
    
    this.images = [
      `${basePath}/assets/img/11.jpg`,  // Hero background
      `${basePath}/assets/img/1.jpg`,   // Section bg-1
      `${basePath}/assets/img/2.jpg`,   // Section bg-2  
      `${basePath}/assets/img/3.jpg`,   // Section bg-3
      `${basePath}/assets/img/4.jpg`,   // Section bg-4
      `${basePath}/assets/img/5.jpg`,   // Projects page
      `${basePath}/assets/img/8.jpg`,   // Publications page
      `${basePath}/assets/img/9.jpg`    // Blog page
    ];

    // Personal photos for gallery and alternate backgrounds
    this.personalPhotos = [
      `${basePath}/assets/img/me-001.jpg`,
      `${basePath}/assets/img/me-002.jpg`,
      `${basePath}/assets/img/me-003.jpg`,
      `${basePath}/assets/img/me-004.jpg`,
      `${basePath}/assets/img/me-005.jpg`,
      `${basePath}/assets/img/me-006.jpg`,
      `${basePath}/assets/img/me-008.jpg`,
      `${basePath}/assets/img/me-009.jpg`
    ];
    this.loadedImages = new Set();
    this.init();
  }

  init() {
    this.showPreloader();
    this.preloadImages();
    this.setupIntersectionObserver();
    this.addBackgroundEffects();
    this.usePersonalBackground();
  }

  showPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'bg-preloader';
    preloader.innerHTML = `
      <div class="loader-container">
        <div class="loader"></div>
        <p style="margin-top: 1rem; color: var(--global-text-color-light);">
          Loading beautiful visuals...
        </p>
      </div>
    `;
    document.body.appendChild(preloader);
  }

  preloadImages() {
    const promises = this.images.map(imagePath => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          this.loadedImages.add(imagePath);
          resolve(imagePath);
        };
        img.onerror = () => reject(imagePath);
        img.src = imagePath;
      });
    });

    Promise.allSettled(promises).then(() => {
      this.hidePreloader();
      this.activateBackgrounds();
    });
  }

  hidePreloader() {
    const preloader = document.querySelector('.bg-preloader');
    if (preloader) {
      preloader.classList.add('loaded');
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }
  }

  activateBackgrounds() {
    // Add fade-in animation to hero background
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      heroBg.style.opacity = '0';
      heroBg.style.transition = 'opacity 1s ease-in-out';
      setTimeout(() => {
        heroBg.style.opacity = '1';
      }, 100);
    }

    // Activate parallax effect for larger screens
    if (window.innerWidth > 768) {
      this.setupParallax();
    }
  }

  setupParallax() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const backgrounds = document.querySelectorAll('.hero-bg, .section-bg');
      
      backgrounds.forEach(bg => {
        const rate = scrolled * -0.5;
        bg.style.transform = `translateY(${rate}px)`;
      });
    });
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe cards and sections for animation
    document.addEventListener('DOMContentLoaded', () => {
      const animatedElements = document.querySelectorAll('.card, .section-content');
      animatedElements.forEach(el => observer.observe(el));
    });
  }

  addBackgroundEffects() {
    // Add mouse movement parallax effect
    document.addEventListener('mousemove', (e) => {
      const hero = document.querySelector('.hero-bg');
      if (!hero) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      const particles = hero.querySelector('::after');
      if (particles) {
        hero.style.setProperty('--mouse-x', `${xPos}px`);
        hero.style.setProperty('--mouse-y', `${yPos}px`);
      }
    });
  }

  // Dynamic background changer
  changeBackground(element, imageIndex) {
    if (imageIndex < this.images.length) {
      const imagePath = this.images[imageIndex];
      element.style.backgroundImage = `url('${imagePath}')`;
    }
  }

  // Use personal photos for certain pages
  usePersonalBackground() {
    const currentPage = window.location.pathname;
    const aboutPages = ['/about/', '/gallery/', '/cv/'];
    
    if (aboutPages.some(page => currentPage.includes(page))) {
      const randomPersonalPhoto = this.personalPhotos[Math.floor(Math.random() * this.personalPhotos.length)];
      const heroBg = document.querySelector('.hero-bg');
      
      if (heroBg && randomPersonalPhoto) {
        // Add subtle overlay for text readability
        heroBg.style.background = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${randomPersonalPhoto}')`;
        heroBg.style.backgroundSize = 'cover';
        heroBg.style.backgroundPosition = 'center';
        heroBg.style.backgroundAttachment = 'fixed';
      }
    }
  }

  // Add smooth scrolling
  initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new BackgroundManager());
} else {
  new BackgroundManager();
}

// Export for potential external use
window.BackgroundManager = BackgroundManager; 
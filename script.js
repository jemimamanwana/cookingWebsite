document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    // Hide preloader when page is fully loaded
    window.addEventListener('load', function() {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Toggle body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Recipe Carousel Navigation
    const recipeCarousel = document.querySelector('.recipe-carousel');
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
    
    if (recipeCarousel && carouselPrev && carouselNext) {
        carouselPrev.addEventListener('click', function() {
            recipeCarousel.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });
        
        carouselNext.addEventListener('click', function() {
            recipeCarousel.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }

    // Save Recipe Functionality
    const saveRecipeButtons = document.querySelectorAll('.save-recipe');
    const toast = document.getElementById('recipe-toast');
    
    saveRecipeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            // Toggle saved state
            this.classList.toggle('saved');
            
            if (this.classList.contains('saved')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                
                // Show toast notification
                toast.classList.add('show');
                
                // Hide toast after 3 seconds
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        });
    });

    // Search Functionality
    const searchForm = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (searchInput.value.trim() !== '') {
                alert(`Searching for: ${searchInput.value}`);
                // In a real app, you would redirect to search results or fetch them
                searchInput.value = '';
            }
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value.trim() !== '') {
                alert(`Thank you for subscribing with ${emailInput.value}!`);
                emailInput.value = '';
            }
        });
    }

    // Hero Scroll Down Button
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.recipe-card, .cuisine-card, .seasonal-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.recipe-card, .cuisine-card, .seasonal-card, .testimonial-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Interactive Rating System (for recipe details page)
    // This would be more relevant in the recipe detail page
    const ratingStars = document.querySelectorAll('.rating-star');
    if (ratingStars.length > 0) {
        ratingStars.forEach(star => {
            star.addEventListener('click', function() {
                const ratingValue = this.getAttribute('data-value');
                alert(`You rated this recipe ${ratingValue} stars!`);
                
                // Highlight selected stars
                ratingStars.forEach((s, index) => {
                    if (index < ratingValue) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
            
            star.addEventListener('mouseover', function() {
                const hoverValue = this.getAttribute('data-value');
                ratingStars.forEach((s, index) => {
                    if (index < hoverValue) {
                        s.classList.add('hover');
                    } else {
                        s.classList.remove('hover');
                    }
                });
            });
            
            star.addEventListener('mouseout', function() {
                ratingStars.forEach(s => {
                    s.classList.remove('hover');
                });
            });
        });
    }

    // Image hover zoom effect
    const zoomImages = document.querySelectorAll('.recipe-image, .cuisine-image, .seasonal-image');
    zoomImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Current year in footer
    const yearElement = document.querySelector('.footer-copyright');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2023', currentYear);
    }

    // Cookie consent banner (example)
    const cookieBanner = document.createElement('div');
    cookieBanner.className = 'cookie-banner';
    cookieBanner.innerHTML = `
        <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
        <button class="btn btn-primary accept-cookies">Accept</button>
    `;
    
    // Check if cookies are accepted
    if (!document.cookie.includes('cookies_accepted=true')) {
        document.body.appendChild(cookieBanner);
        
        const acceptCookiesBtn = cookieBanner.querySelector('.accept-cookies');
        acceptCookiesBtn.addEventListener('click', function() {
            // Set cookie for 30 days
            const date = new Date();
            date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
            document.cookie = `cookies_accepted=true; expires=${date.toUTCString()}; path=/`;
            
            cookieBanner.style.opacity = '0';
            setTimeout(() => {
                cookieBanner.style.display = 'none';
            }, 300);
        });
    }

    // Add some dynamic behavior to cuisine cards
    const cuisineCards = document.querySelectorAll('.cuisine-card');
    cuisineCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.cuisine-overlay');
            overlay.style.backgroundColor = 'rgba(46, 125, 50, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.cuisine-overlay');
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        });
    });

    // Dynamic recipe difficulty indicator
    const difficultyIndicators = document.querySelectorAll('.recipe-meta span:nth-child(2)');
    difficultyIndicators.forEach(indicator => {
        const difficulty = indicator.textContent.toLowerCase();
        let color;
        
        switch(difficulty) {
            case 'easy':
                color = '#4caf50';
                break;
            case 'medium':
                color = '#ff9800';
                break;
            case 'hard':
                color = '#f44336';
                break;
            default:
                color = '#9e9e9e';
        }
        
        indicator.style.color = color;
        indicator.querySelector('i').style.color = color;
    });

    // Seasonal card animation
    const seasonalCards = document.querySelectorAll('.seasonal-card');
    seasonalCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Testimonial slider auto-scroll (optional)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let scrollAmount = 0;
        const scrollWidth = testimonialSlider.scrollWidth - testimonialSlider.clientWidth;
        
        function autoScrollTestimonials() {
            if (scrollAmount < scrollWidth) {
                scrollAmount += 350;
            } else {
                scrollAmount = 0;
            }
            
            testimonialSlider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            
            setTimeout(autoScrollTestimonials, 5000);
        }
        
        // Start auto-scroll after page load
        setTimeout(autoScrollTestimonials, 3000);
    }

    // Add pulse animation to CTA buttons on hover
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-recipe');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 1s infinite';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Showreel modal functionality
    const showreelTrigger = document.getElementById('showreel-trigger');
    
    if (showreelTrigger) {
        showreelTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Showreel sera disponible prochainement!');
        });
    }
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add animation to elements when they enter viewport
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all section elements
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

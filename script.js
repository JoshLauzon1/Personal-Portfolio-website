function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Scroll to top functionality
const scrollToTopButton = document.querySelector('.scroll-to-top');

if (scrollToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Show button after scrolling 300px
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Handle contact form submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });
        
        // Reset form
        contactForm.reset();
        
        // Show success message (you can style this better)
        alert('Message sent successfully!');
    });
}

// Add skill progress bars animation
const progressBars = document.querySelectorAll('.progress-bar');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const elementTop = bar.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            bar.style.width = bar.getAttribute('data-width') || '0%';
        }
    });
};

window.addEventListener('scroll', animateProgressBars);

// Dark Mode Toggle Functionality
const themeToggleButtons = document.querySelectorAll('.theme-toggle');
const themeIcons = document.querySelectorAll('.theme-icon');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Update button states based on current theme
function updateThemeButtons(theme) {
    themeToggleButtons.forEach(button => {
        if (theme === 'dark') {
            button.classList.add('dark');
        } else {
            button.classList.remove('dark');
        }
    });
    
    themeIcons.forEach(icon => {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
}

// Initialize theme buttons
updateThemeButtons(currentTheme);

// Theme toggle function
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButtons(newTheme);
    
    // Add a subtle animation effect
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// Add event listeners to all theme toggle buttons
themeToggleButtons.forEach(button => {
    button.addEventListener('click', toggleTheme);
});

// Enhanced scroll animations for project cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered animation delay
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

// Observe project cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(card);
    });
});

// Enhanced navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
}, false);

// Add smooth hover effects to tech tags
document.addEventListener('DOMContentLoaded', () => {
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
});

// Enhanced typing effect for the main title (optional)
function createTypingEffect(element, text, speed = 100) {
    element.textContent = '';
    let i = 0;
    
    function typeChar() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        }
    }
    
    typeChar();
}

// Initialize typing effect on page load (optional - can be enabled)
// document.addEventListener('DOMContentLoaded', () => {
//     const titleElement = document.querySelector('.title');
//     if (titleElement && titleElement.textContent === 'Josh Lauzon') {
//         createTypingEffect(titleElement, 'Josh Lauzon', 150);
//     }
// });
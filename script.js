function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Scroll to top functionality
const scrollToTopButton = document.querySelector('.scroll-to-top');

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

// Handle contact form submission
const contactForm = document.getElementById('contact-form');

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
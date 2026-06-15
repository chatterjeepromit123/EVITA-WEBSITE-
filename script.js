// --- Hamburger Mobile Navigation ---
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Change icon toggle effect
    const icon = hamburgerBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburgerBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// --- Dynamic Hero Image Slider ---
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');
let currentSlide = 0;
const slideInterval = 6000; // Auto scroll slides every 6 seconds

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

// Automatic transition
setInterval(() => {
    showSlide(currentSlide + 1);
}, slideInterval);

// --- Active Nav-Link Highlighting on Scroll ---
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});
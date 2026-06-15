document.addEventListener("DOMContentLoaded", () => {
    // Slider functionality has been removed.
    
    // Optional: Basic toggle functionality for the existing mobile hamburger menu
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'rgba(128, 0, 0, 0.98)';
                navMenu.style.padding = '20px 0';
            }
        });
    }
});
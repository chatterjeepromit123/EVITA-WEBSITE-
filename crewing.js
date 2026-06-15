document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    
    if (slider && slides.length > 0) {
        let counter = 0;
        const totalSlides = slides.length;

        function autoSlide() {
            counter++;
            
            // If we reach the end, reset back to the first slide
            if (counter >= totalSlides) {
                counter = 0;
            }
            
            // Shift the slider horizontally based on the current index
            slider.style.transform = `translateX(${-counter * 100}%)`;
        }

        // Run the autoSlide function every 2000 milliseconds (2 seconds)
        setInterval(autoSlide, 2000);
    }
});
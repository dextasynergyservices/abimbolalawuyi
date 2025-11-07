document.addEventListener('DOMContentLoaded', function() {
    const bgImages = document.querySelectorAll('.hero-bg-image');
    const prevBtn = document.querySelector('.bg-prev');
    const nextBtn = document.querySelector('.bg-next');
    let currentImage = 0;
    let slideInterval;
    
    function showImage(index) {
        bgImages.forEach(img => img.classList.remove('active'));
        bgImages[index].classList.add('active');
    }
    
    function changeBackground(direction) {
        clearInterval(slideInterval);
        currentImage = (currentImage + direction + bgImages.length) % bgImages.length;
        showImage(currentImage);
        startAutoSlide();
    }
    
    function startAutoSlide() {
        slideInterval = setInterval(() => {
            changeBackground(1);
        }, 5000);
    }
    
    // Event listeners for buttons
    prevBtn.addEventListener('click', () => changeBackground(-1));
    nextBtn.addEventListener('click', () => changeBackground(1));
    
    // Initial setup
    showImage(currentImage);
    startAutoSlide();
});

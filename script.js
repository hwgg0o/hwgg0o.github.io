// JavaScript para el carrusel de imágenes
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const itemCount = items.length;
    const interval = 3000; // 3 segundos

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % itemCount;
        items[currentIndex].classList.add('active');
    }

    setInterval(showNextItem, interval);
});

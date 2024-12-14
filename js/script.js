// Alternar menu flutuante
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.floating-menu ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        let currentSlide = 0;
        const slides = carousel.querySelectorAll('img');
        const totalSlides = slides.length;

        function moveSlide(step) {
            currentSlide = (currentSlide + step + totalSlides) % totalSlides;
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        setInterval(() => moveSlide(1), 3000);

        const prevButton = carousel.parentElement.querySelector('.prev');
        const nextButton = carousel.parentElement.querySelector('.next');

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => moveSlide(-1));
            nextButton.addEventListener('click', () => moveSlide(1));
        }
    });
}

initializeCarousels();

document.getElementById('btnVejaMais').addEventListener('click', function() {
    window.open('http://45.169.29.120:8000', '_blank');
});

document.getElementById('btnLogin').addEventListener('click', function() {
    window.open('https://echomeets.online/login', '_blank');
});

document.getElementById('btnRepo').addEventListener('click', function() {
    window.open('https://github.com/lucashda/pesquisanps.git', '_blank');
});

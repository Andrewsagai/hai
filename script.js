document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar a');
    const menuToggle = document.createElement('button');
    menuToggle.textContent = 'Menu';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('.header').insertBefore(menuToggle, document.querySelector('.navbar'));

    menuToggle.addEventListener('click', function () {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });

            // Hide the menu after clicking a link (for mobile)
            if (window.innerWidth <= 768) {
                document.querySelector('.navbar').classList.remove('active');
            }
        });
    });

    // Existing Carousel Functionality
    const carousel = document.querySelector('.carousel');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextSlide() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 3000);

    // Search functionality in the categories section
    const searchInput = document.querySelector('.search-bar input');
    const dishCards = document.querySelectorAll('.dish-card');

    searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toLowerCase();
        dishCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(filter) ? '' : 'none';
        });
    });
});

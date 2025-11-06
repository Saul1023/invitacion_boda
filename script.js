// Galería de imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
    let slideInterval;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextImage, 5000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    nextButton.addEventListener('click', function() {
        stopSlideShow();
        nextImage();
        startSlideShow();
    });

    prevButton.addEventListener('click', function() {
        stopSlideShow();
        prevImage();
        startSlideShow();
    });

    // Pausar el carrusel cuando el mouse está sobre la galería
    const gallery = document.querySelector('.gallery');
    gallery.addEventListener('mouseenter', stopSlideShow);
    gallery.addEventListener('mouseleave', startSlideShow);

    // Iniciar el carrusel automático
    startSlideShow();

    // Contador regresivo
    function updateCountdown() {
        const weddingDate = new Date('December 5, 2025 08:45:00').getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "<div class='countdown-finished'>¡El gran día ha llegado!</div>";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Animación de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animación a las secciones
    document.querySelectorAll('.message, .location, .details, .romantic-quote, .closing-message, .our-wedding, .gallery-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Animación para la imagen de la pareja
    const coupleImage = document.querySelector('.couple-image');
    if (coupleImage) {
        coupleImage.style.opacity = '0';
        coupleImage.style.transform = 'scale(0.8)';
        coupleImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            coupleImage.style.opacity = '1';
            coupleImage.style.transform = 'scale(1)';
        }, 300);
    }

    // Animación para el contador regresivo
    const countdownItems = document.querySelectorAll('.countdown-item');
    countdownItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
});
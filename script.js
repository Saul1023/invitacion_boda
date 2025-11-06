// Galería de fotos
const images = document.querySelectorAll('.gallery img');
let current = 0;

document.getElementById('next').addEventListener('click', () => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
    images[current].classList.remove('active');
    current = (current - 1 + images.length) % images.length;
    images[current].classList.add('active');
});

const form = document.getElementById('rsvpForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por confirmar tu asistencia!');
    form.reset();
});

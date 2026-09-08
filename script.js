const slides = document.querySelectorAll('.slide');
const counter = document.getElementById('slide-counter');
const progressBar = document.getElementById('progress-bar');
const dotsContainer = document.getElementById('dots-container');
let currentIdx = 0;

// Generar puntos interactivos dinámicamente
slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(idx);
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('.dot');

function updateView() {
    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentIdx);
    });
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIdx);
    });
    counter.textContent = `${String(currentIdx + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    progressBar.style.width = `${((currentIdx + 1) / slides.length) * 100}%`;
    
    document.getElementById('btn-prev').disabled = currentIdx === 0;
    document.getElementById('btn-next').disabled = currentIdx === slides.length - 1;
}

function nextSlide() {
    if (currentIdx < slides.length - 1) {
        currentIdx++;
        updateView();
    }
}

function prevSlide() {
    if (currentIdx > 0) {
        currentIdx--;
        updateView();
    }
}

function goToSlide(idx) {
    currentIdx = idx;
    updateView();
}

// Soporte para flechas de teclado y barra espaciadora
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});

updateView();

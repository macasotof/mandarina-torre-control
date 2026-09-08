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
function toggleMatrizFoda() {
    var matriz = document.getElementById("matriz-foda-contenido");
    var boton = document.getElementById("btn-matriz-foda");
    
    // Si la matriz está oculta, la mostramos y cambiamos el texto del botón
    if (matriz.style.display === "none" || matriz.style.display === "") {
        matriz.style.display = "block";
        boton.textContent = "Ocultar Matriz FODA";
    } else {
        // Si está visible, la ocultamos de nuevo
        matriz.style.display = "none";
        boton.textContent = "Ver Matriz FODA Completa";
    }
}

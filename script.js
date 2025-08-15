const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Carrega preferência salva
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️ ';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Troca texto do botão
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ ';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = '🌙 ';
        localStorage.setItem('theme', 'light');
    }
});
// Carrossel
const prevBtn = document.querySelector('.carrossel-btn.prev');
const nextBtn = document.querySelector('.carrossel-btn.next');
const carrosselContainer = document.querySelector('.carrossel-container');
const carrosselItems = document.querySelectorAll('.carrossel-item');

let currentIndex = 0;

// Função para atualizar posição do carrossel
function updateCarousel() {
    const width = carrosselItems[0].clientWidth;
    carrosselContainer.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Botão próximo
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carrosselItems.length;
    updateCarousel();
});

// Botão anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carrosselItems.length) % carrosselItems.length;
    updateCarousel();
});

// Ajusta carrossel ao redimensionar a tela
window.addEventListener('resize', updateCarousel);

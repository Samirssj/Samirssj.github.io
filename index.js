/*funcion del carrucel*/
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function updateCarousel() {
    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});
/*fin de funcion de el carrucel*/

// Alternar modo oscuro/claro
/*document.getElementById("toggle-mode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});*/

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
/*fin de la funcion del modo oscuro*/

 // Función para navegar a la página especificada
 function navigateTo(page) {
    window.location.href = page;
  }
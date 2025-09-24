// Acordeón con animación
const acordeones = document.querySelectorAll(".acordeon-btn");

acordeones.forEach(btn => {
  btn.addEventListener("click", () => {
    const contenido = btn.nextElementSibling;

    // Cierra todos los demás
    document.querySelectorAll(".acordeon-contenido").forEach(c => {
      if (c !== contenido) c.style.maxHeight = null;
    });

    // Toggle este
    if (contenido.style.maxHeight) {
      contenido.style.maxHeight = null;
    } else {
      contenido.style.maxHeight = contenido.scrollHeight + "px";
    }
  });
});

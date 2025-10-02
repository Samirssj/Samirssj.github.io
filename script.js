<<<<<<< HEAD
function mostrarInicio() {
  ocultarTodo();
  document.getElementById("video-section").style.display = "block";
}

function mostrarProyectos() {
  ocultarTodo();
  document.getElementById("proyectos-section").style.display = "block";
}

function mostrarLogin() {
  ocultarTodo();
  document.getElementById("login-section").style.display = "flex";
}

function ocultarTodo() {
  document.getElementById("video-section").style.display = "none";
  document.getElementById("proyectos-section").style.display = "none";
  document.getElementById("login-section").style.display = "none";
  document.getElementById("panel-section").style.display = "none";
}

/* Validación login */
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let usuario = document.getElementById("usuario").value;
  let pass = document.getElementById("password").value;

  if (usuario === "samirssj" && pass === "samirssj17") {
    ocultarTodo();
    document.getElementById("panel-section").style.display = "block";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});

/* Subir trabajos */
document.getElementById("uploadForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const semana = document.getElementById("semana").value;
  const archivo = document.getElementById("trabajo").files[0];

  if (archivo) {
    const lista = document.getElementById("lista-trabajos");
    const li = document.createElement("li");
    li.innerHTML = `<strong>${semana.toUpperCase()}</strong> - ${archivo.name}
      <button onclick="this.parentElement.remove()">Eliminar</button>`;
    lista.appendChild(li);
  }
});
=======
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
>>>>>>> ffcc07884ca739c4b686e1a00f020ff136555887

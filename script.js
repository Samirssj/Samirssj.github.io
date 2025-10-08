// === Referencias ===
const inicioSection = document.getElementById("inicioSection");
const proyectosSection = document.getElementById("proyectos");
const loginSection = document.getElementById("loginSection");
const panelSection = document.getElementById("panel");
const proyectosContainer = document.getElementById("proyectosContainer");

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginSubmit");

// === Mostrar/Ocultar secciones ===
function mostrarSeccion(seccion) {
  [inicioSection, proyectosSection, loginSection, panelSection].forEach(sec => sec.classList.add("hidden"));
  seccion.classList.remove("hidden");
}

// === Botones de navegación ===
document.getElementById("inicioBtn").addEventListener("click", () => mostrarSeccion(inicioSection));
document.getElementById("proyectosBtn").addEventListener("click", () => mostrarSeccion(proyectosSection));
document.getElementById("loginBtn").addEventListener("click", () => mostrarSeccion(loginSection));

// === Login ===
loginBtn.addEventListener("click", () => {
  if (username.value === "samir" && password.value === "samir") {
    mostrarSeccion(panelSection);
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});

// === Rellenar select de semanas ===
const semanaSelect = document.getElementById("semanaSelect");
for (let i = 1; i <= 16; i++) {
  const opt = document.createElement("option");
  opt.value = i;
  opt.textContent = `Semana ${i}`;
  semanaSelect.appendChild(opt);
}

// === Datos persistentes ===
let proyectos = JSON.parse(localStorage.getItem("proyectos")) || {};

// === Elementos del panel ===
const subirTrabajoBtn = document.getElementById("subirTrabajo");
const listaTrabajos = document.getElementById("listaTrabajos");

// Reemplazamos el input de archivo por un campo para pegar link
const archivoInput = document.getElementById("archivoInput");
archivoInput.outerHTML = `<input type="url" id="linkInput" placeholder="Pega el enlace de tu trabajo (Drive, YouTube, etc.)" />`;

const linkInput = document.getElementById("linkInput");

// === Subir trabajo ===
subirTrabajoBtn.addEventListener("click", () => {
  const semana = semanaSelect.value;
  const link = linkInput.value.trim();
  if (!link) return alert("Por favor, pega el enlace del trabajo.");

  if (!proyectos[semana]) proyectos[semana] = [];
  proyectos[semana].push(link);

  localStorage.setItem("proyectos", JSON.stringify(proyectos));

  linkInput.value = "";
  actualizarListaTrabajos();
  actualizarProyectos();
});

// === Mostrar lista en panel ===
function actualizarListaTrabajos() {
  listaTrabajos.innerHTML = "";
  Object.entries(proyectos).forEach(([semana, links]) => {
    links.forEach(url => {
      const li = document.createElement("li");
      li.innerHTML = `Semana ${semana}: <a href="${url}" target="_blank">${url}</a>`;
      listaTrabajos.appendChild(li);
    });
  });
}

// === Mostrar tarjetas en Proyectos ===
function actualizarProyectos() {
  proyectosContainer.innerHTML = "";
  Object.entries(proyectos).forEach(([semana, links]) => {
    const card = document.createElement("div");
    card.classList.add("tarjeta");

    const linksHTML = links.map(url => `
      <li>
        <a href="${url}" target="_blank">
          <button>Ver trabajo</button>
        </a>
      </li>`).join("");

    card.innerHTML = `
      <h3>Semana ${semana}</h3>
      <ul>${linksHTML}</ul>
    `;

    proyectosContainer.appendChild(card);
  });
}

// === Inicializar ===
actualizarListaTrabajos();
actualizarProyectos();

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const cerrar = document.querySelector(".cerrar");
const hamburguesita = document.querySelector(".hamburguesita");

function abrirMenu() {
    menu.classList.add("showMenu");
    cerrar.style.display = "block";
    hamburguesita.style.display = "none";
}

function cerrarMenu() {
    menu.classList.contains("showMenu")
    menu.classList.remove("showMenu");
    cerrar.style.display = "none";
    hamburguesita.style.display = "block";
}

hamburguesita.addEventListener("click", abrirMenu);
cerrar.addEventListener("click", cerrarMenu);


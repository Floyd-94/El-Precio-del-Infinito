
var botonAbrirDesplegable = document.querySelector(".boton-abrir-desplegable");
var botonCerrarDesplegable = document.querySelector(".boton-cerrar-desplegable");
var contenido = document.querySelector(".contenido-colapsable");


function abrirContenido() {
    contenido.classList.add("desplegar");
    botonCerrarDesplegable.style.display = "block";
    botonAbrirDesplegable.style.display = "none";
}

function cerrarContenido() {
    contenido.classList.remove("desplegar");
    botonCerrarDesplegable.style.display = "none";
    botonAbrirDesplegable.style.display = "block";
}

botonAbrirDesplegable.addEventListener("click", abrirContenido);
botonCerrarDesplegable.addEventListener("click", cerrarContenido);
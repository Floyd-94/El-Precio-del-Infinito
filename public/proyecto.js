
var botonesAbrirDesplegable = document.querySelectorAll(".boton-abrir-desplegable");
var botonesCerrarDesplegable = document.querySelectorAll(".boton-cerrar-desplegable");
var contenidos = document.querySelectorAll(".contenido-colapsable");


function abrirContenido(i) {
    contenidos[i].classList.add("desplegar");
    botonesCerrarDesplegable[i].style.display = "block";
    botonesAbrirDesplegable[i].style.display = "none";
}

function cerrarContenido(i) {
    contenidos[i].classList.remove("desplegar");
    botonesCerrarDesplegable[i].style.display = "none";
    botonesAbrirDesplegable[i].style.display = "block";
}


for (let i = 0; i < botonesAbrirDesplegable.length; i++) {
    const botonAbrir = botonesAbrirDesplegable[i];
    const botonCerrar = botonesCerrarDesplegable[i];

    botonAbrir.addEventListener("click", function () {
        abrirContenido(i)
    })

    botonCerrar.addEventListener("click", function () {
        cerrarContenido(i)
    });
}


const slides = document.querySelectorAll(".slide");


slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`
});

let curSlide = 0;

const nextSlide = document.querySelector(".btn-next");

let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
    if (curSlide === maxSlide) {
        curSlide = 0
    } else {
        curSlide++
    }
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
    });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide --
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
    });
});
//Alterando estilo 
const elemento = document.querySelector(".ex1");

elemento.style.color = "orange";

//Alterando estilo com evento
const texto = document.querySelector(".ex2");
const botao = document.querySelector(".btex2");

function mudarCorDoTexto() {
    texto.style.color = "darckred";
}

botao.addEventListener("click", mudarCorDoTexto);
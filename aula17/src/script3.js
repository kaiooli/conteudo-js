//Utilizando o key events
const conteudo = document.querySelector(".conteudo");
const campo = document.querySelector("#campo");

campo.addEventListener("keydown", handleTecla);

function handleTecla(event) {
    conteudo.innerHTML = "Você digitou: " + event.key;
}

// Exemplo de detcção de tecla
const campo2 = document.querySelector("#campoEnter");
const conteudo2 = document.querySelector(".conteudo3");

campo2.addEventListener("keydown", handleCondicao);

function handleCondicao(evento) {
    if (evento.code === "Enter") {
        conteudo2.innerHTML = "A tecla enter foi pressionada!";
    }
}
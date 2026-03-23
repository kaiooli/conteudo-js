//Utilizando o evento de carregamento load
const img = document.querySelector(".minhaImagem");

img.addEventListener("load", function () {
    const elemento = document.querySelector(".info-carregamento");
  elemento.innerHTML = "A imagem foi carregada.";
});



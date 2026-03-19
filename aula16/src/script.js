//Alterando atributo
const elemento = document.querySelector(".ex1");

elemento.src = "images.jpg";
elemento.width = 400;

// Conteúdo dinâmico (data)
const elemento2 = document.querySelector("#ex2");

elemento2.innerHTML = "Data atual: "
+ Date();
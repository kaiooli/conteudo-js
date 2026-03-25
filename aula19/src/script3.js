//Atribuindo vários eventos a um só elemento
const btn = document.querySelector(".btn");
const conteudo = document.querySelector(".conteudo");

btn.addEventListener("mouseover", () => {
  conteudo.innerHTML += "Você passou o mouse por cima do botão. <br>";
  conteudo.style.color = "red";
});

btn.addEventListener("click", () => {
   conteudo.innerHTML += "Mouse Out <br>";
   conteudo.style.color = "blue";
});

btn.addEventListener("mouseout", () => {
  conteudo.innerHTML += "Mouse Out <br>";
  conteudo.style.color = "green";
});

//Utilizando o objeto window
const conteudo2 = document.querySelector(".conteudo-window");

window.addEventListener("resize", () => {
  conteudo2.innerHTML = Math.random();
});


//Utilizando parâmetros
const conteudo3 = document.querySelector(".resultado-produto");
const btn2 = document.querySelector(".btn2");

let p1 = 4;
let p2 = 2;

btn2.addEventListener("click", () => {
  conteudo3.innerHTML = produto(p1, p2);
});

function produto(p1, p2) {
  return p1 * p2;
};

//Propagação de eventos (bubbling e capture)

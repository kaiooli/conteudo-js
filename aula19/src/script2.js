//Exemplo de evento

//Exemplo de click em h4
const elemento = document.querySelector(".elemento-click");
const info = document.querySelector(".info");

elemento.addEventListener("click", () => {
  elemento.innerHTML = "Ops, você clicou mesmo.";
  info.innerHTML = "Te peguei: :)";
})

// Alterando formatação em um input

const campoTexto = document.querySelector(".campo-texto");

campoTexto.addEventListener("input", upperCase);

function upperCase(){
  campoTexto.value = campoTexto.value.toUpperCase();
}

// Alterando formatação de texto em um input quando mudamos a interação
const campoTexto2 = document.querySelector(".campo-text");

campoTexto2.addEventListener("change", toUpperCase);

function toUpperCase() {
  campoTexto2.value = campoTexto2.value.toUpperCase();
}

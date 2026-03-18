//Continuação dos métodos de Iteração em Arrays

//Utilizando o método entires()
const elemento = document.querySelector(".ex1");

const frutas = ["Banana", "Melão", "Abacate", "Laranja", "Uva"];
const f = frutas.entries();

for (let item of f) {
    elemento.innerHTML += `${item} <br>`;
}

console.log(f);

// Utilizando o método with()
const elemento2 = document.querySelector(".ex2");

const meses = ["Jan", "Fev", "Mar", "Abr", "Mai"];
const m = meses.with(3, "Abril");

elemento2.innerHTML =m;

// Utilizando o Spread Operator
const elemento3 = document.querySelector(".ex3");

const numerosLista = [1,2,3];
const numerosLista2 = [4,5,6];

const numerosListaGeral = [numerosLista,numerosLista2];

console.log(numerosListaGeral);

//Utilizando Rest Operator
const elemento4 = document.querySelector(".ex4");

let item0, rest;

const numeros = [1,2,3,4,5,6,7,8,9,10];
[item0, ...rest] = numeros;

elemento4.innerHTML = rest;

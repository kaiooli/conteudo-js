//Array global
const frutas = ["Banana", "Maça", "Morango", "Uva", "Laranja", "Pêra"];

//Utlizando o método sort()
console.log(frutas);

frutas.sort();

console.log(frutas);

//Utilizando o método reverse()
frutas.reverse();

console.log(frutas);

//Combinando sort() e reverse()
const frutas2 = ["Banana", "Maça", "Morango", "Uva", "Laranja", "Pêra"];

frutas2.sort();
frutas2.reverse();

console.log(frutas2);

//Utlizando o método toSorted()

const meses = ["Jan", "Fev", "Mar", "Abr", "Mai"];

const mesesSorted = meses.toSorted();

console.log(meses);
console.log(mesesSorted);

//Utilozando o método toReversed()
const mesesReversed = meses.toReversed();

console.log(mesesReversed);

//utlizando o sort() em números
const numeros = [4, 28, 75, 50, 3, 9, 18];

console.log(numeros);

numeros.sort(function (a, b) {return a - b});

console.log(numeros);



const numeros2 = [4, 28, 75, 50, 3, 9, 18];

console.log(numeros2);

numeros2.sort(function (a, b) {return b - a});

console.log(numeros2);

//Utilizando o método sort() em números para de maneira aleatória

const numeros3 = [4, 28, 75, 50, 3, 9, 18];

numeros3.sort(function () {return 0.5 - Math.random()});

// Utilizando metodo Math.min em Array
const numeros4 = [4, 28, 75, 50, 3, 9, 18];

function menorNumeroArray(array) {
    return Math.min.apply(null, array)
}

console.log(menorNumeroArray(numeros4));

//Utilizando o método Math.max em array
function maiorNumeroArray(array) {
    return Math.max.apply(null, array);
}

console.log(maiorNumeroArray(numeros4));

//Utilizando o sort() com objetos
const pessoas = [
    {nome: "Kaio", Idade: 18},
    {nome: "Richard", Idade: 19},
    {nome: "Stephanie", Idade: 20},
];

console.log(pessoas);

pessoas.sort((a, b) => {return a.iadde - b.idade});

console.log(pessoas);

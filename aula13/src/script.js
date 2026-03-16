// Array global
const frutas = ["Morango", "Abacaxi", "Acerola", "Manga"];

//Utilizando o propriedade length()

let tamanhoFrutas = frutas.length;

//frutas.length = 2;

console.log(frutas);

// Utilizando o método toString()
let minhasFrutas = frutas.toString();

console.log(minhasFrutas);

//Utilizando o método at()
let itemFrutas = frutas.at(2);
let itemFrutas2 = frutas[1];

console.log(itemFrutas);
console.log(itemFrutas2);

//Utilizando o método join()
let apresentacaoFrutas = frutas.join(", ");
console.log(apresentacaoFrutas);

//Utlizando o método pop()
let removerItemsFrutas = frutas.pop();
console.log(frutas);
console.log(removerItemsFrutas);

//Utlizando o método push()
let adicionarItemsFrutas = frutas.push("Limão");
console.log(frutas);
console.log(adicionarItemsFrutas);

//Utilizando o método shift()
let deslocarItemFrutas = frutas.shift();
console.log(frutas);
console.log(deslocarItemFrutas);

//Utilizando o método unshift()
let deslocarItemFrutas2 = frutas.unshift("Melão");

console.log(frutas);
console.log(deslocarItemFrutas2);

frutas[0] = "Kiwi";

console.log(frutas);

//Utilizando o length para adicionar items ao array
frutas[frutas.length] = "Laranja";

console.log(frutas);

// Utiizando o método isArray()
console.log(Array.isArray(frutas));

// Utilizando o método delete()
delete frutas[0];

console.log(frutas);

// Utilizando o método concat()
const motos = ["Hornet", "Ducati", "Yamaha"];
const carros = ["Gol", "Onix", "Marca"];

const veiculos = motos.concat(carros);

// Utilizandoo copyWithin()
let copiaItems = frutas.copyWithin(2, 0);
console.log(frutas);



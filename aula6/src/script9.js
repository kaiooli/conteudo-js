//Exemplo exercício 6: Escreva um algoritimo para ler as dimensões de um Trapézio (base e altura), calcular e escreva a área do Trapézio.
//Exemplo exercício 6: Escreva um algoritimo para ler as dimensões de um Trapézio (base e altura), calcular e escreva a área do Trapézio.

alert("Trapézio")

let B = parseFloat(prompt("Informe um valor da base maior"));
let b = parseFloat(prompt("Informe o valor da base menor"));
let altura = parseFloat(prompt("Informe o valor da altura"));

let resultado = ((B+b)*altura) /2;

alert("O resutado da operação é: " + resultado);

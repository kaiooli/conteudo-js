// Exercício 10: Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

alert("Idade em Dias");

let idadeAnos = parseFloat(prompt("Informe quantos anos voçê tem: "));
let meses = parseFloat(prompt("Informe quantos meses se passaram desde seu último aniversário: "));
let dias = parseFloat(prompt("Informe quantos dias se passaram desde que completou mais um mês após seu aniversário: "));

let idadeEmDias = (idadeAnos * 365) + dias;

alert(`Sua idade em dias é de ${idadeEmDias} dias`);

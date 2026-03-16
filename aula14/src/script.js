//Utlizando o método find()
const number = [4, 6, 83, 64, 4, 23]

let encontrarMaior = number.find(verificaValor);

function verificaValor(valor){
    return valor > 50;
}

console.log(encontrarMaior);

//Utlizando o método findIndex()
let encontrarIndice = number.findIndex(verificaValor);
console.log(encontrarIndice);

//Utilizando o método findLast()
let encontrarMaiorFinal = number.findLast((x) => x > 50);
console.log(encontrarMaiorFinal);

//Utilizando o método findLastIndex()
let encontrarIndiceMaiorFinal = number.findLastIndex((valor) => valor > 50);
console.log(encontrarIndiceMaiorFinal);


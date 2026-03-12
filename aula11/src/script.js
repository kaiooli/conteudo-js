//Utilizando operador in
const pessoa = {
    nome1: "Kaio",
    nome2: "Oliveira",
    idade: 18,
    país: "Brasil",
}

let exIn = ("idade") in pessoa;

console.log(exIn);

//Criação de objetos alinhados

const pessoa2 = {
    nome1: "Keila",
    nome2: "Vitória",
    carros: {
        car1: "Porshe",
        car2: "Volkswagen",
        car3: "Audi",
    },
    motos: {
        moto1: "Ducati",
        moto2: "Royal Enfield",
    },
}

let moto1 = "moto1";


console.log(pessoa2.carros.car2);
console.log(pessoa2.carros["car3"]);
console.log(pessoa2["carros"]["car1"]);
console.log(pessoa2.motos[moto1]);




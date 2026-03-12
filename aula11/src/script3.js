//Utilizando o this em função

function teste() {
    return console.log(this);
    
}

teste();

const car = {
    marca: "Pagani",
    modelo: "Huayra",
    cor: "Amerela",
}

let cararrey = Object.values(car);

let cArreyString = cararrey.toString();

console.log(car);

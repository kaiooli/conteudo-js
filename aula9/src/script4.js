//Criando a primeira função

function primeiFafuncao() {
    return console.log("Somente a dor coletiva gera a união");
}

primeiFafuncao();

//Realizando operações com funções
function multiplicar(a, b) {
   return (a * b);
}

let mult1 = multiplicar(10, 5);
let mult2 = multiplicar(5, 5);

const elemento = document.querySelector(".ex1");
elemento.innerHTML = `
${mult1} \n
${mult2} \n
`;



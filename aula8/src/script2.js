// Utilização do método padStart()

let texto = '7';
texto = texto.padStart(3, '0');

console.log(texto);

// Utlização do método padEnd()

let texto2 = '7';
texto2 = texto2.padEnd(3, "0");

console.log(texto2);

//Utilização do método repeat()
let frutas = 'Laranja';
let repetir = frutas.repeat(5);

console.log(repetir);

//Utilização do método replace()
let carro = 'Impala';
let novoCarro = carro.replace('Impala', 'Supra');

console.log(novoCarro);

// Utlização do método replaceAll()

let frase = 'Eu amo carros. Carros são muito legais';

frase = frase.replaceAll('Carros', 'Motos');
frase = frase.replaceAll('carros', 'motos');

console.log(frase);

// Utilização do método Split()

let saudacao = 'Ola, saja bem vindo';
let exSplit = saudacao.split(" ");

console.log(exSplit);


//Utilização do método indexOf(), lastIndexOf() e search()
let ex = "PorFavor localize onde 'localize' ocorre";

let exindexOf = ex.indexOf('localize');

let exLastIndexOf = ex.lastIndexOf('localize');

let exSearch = ex.search('favor');

console.log(exindexOf);
console.log(exLastIndexOf);
console.log(exSearch);

// Utilização do método includes()
let olaMundo = 'Olá, Bem-vindo ao universo';
let exIncludes = olaMundo.includes('mundo');

console.log(exIncludes);

// Utilização de método startsWith()
let olaMundo2 = 'Olá, mundo. Bem-vindo ao universo';
let exstartswith = olaMundo2.startsWith('Olá');
let exstartswith2 = olaMundo2.startsWith('universo');

console.log(exstartswith);
console.log(exstartswith2);

// Utilização do método endsWith()
let nome = 'Kaio Oli';
let endsWith = nome.endsWith('Oli');

console.log(endsWith);



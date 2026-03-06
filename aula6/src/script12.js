let x = 2n ** 61n - 1n; // BigInt para calcular 2^61 - 1

function ehPrimo(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  let limite = Math.sqrt(n);
  for (let i = 3; i <= limite; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function gerarMersenne(limiteP) {
  let resultados = [];
  for (let p = 2; p <= limiteP; p++) {
    if (ehPrimo(p)) {
      let mersenne = 2n ** BigInt(p) - 1n; // usa BigInt
      // aqui não dá pra testar primalidade de números gigantes facilmente
      resultados.push(mersenne);
    }
  }
  return resultados;
}

// Gerar até p = 61 (vai dar alguns números grandes)
let lista = gerarMersenne(100000);

// Imprimir na página
document.write("<h2>Primos de Mersenne (até p=61)</h2>");
for (let i = 0; i < lista.length; i++) {
  document.write(lista[i] + "<br>");
}

// Lista dos expoentes p que geram primos de Mersenne conhecidos (exemplo parcial)
let expoentes = [2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127];

// Função para calcular Mersenne: 2^p - 1
function calcularMersenne(p) {
  return 2n ** BigInt(p) - 1n;
}

// Array para armazenar os números gerados
let resultados = [];

// Imprimir na página
document.write("<h2>Primos de Mersenne conhecidos</h2>");
for (let i = 0; i < expoentes.length; i++) {
  let p = expoentes[i];
  let mersenne = calcularMersenne(p);
  resultados.push(mersenne); // guarda no array
  document.write("M(" + p + ") = " + mersenne + "<br>");
}

// Mostrar no console quantos foram gerados
console.log("Quantidade de primos de Mersenne gerados: " + resultados.length);
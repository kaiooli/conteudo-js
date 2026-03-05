
//Exemplo exercício 4: O usuário vai informar valores e será efetuado sua Divisão.

alert("Divisão");
let valor1 = parseFloat(prompt("Informe o primeiro valor para efetuar a divisão"));
let valor2 = parseFloat(prompt("Informe o segundo valor para efetuar a divisão"));

let Resultado;

if (valor2 === 0) {
    alert ("Não foi possível realizar a operação! Tente novamente")
} else {
    Resultado = (valor1 / valor2);
}
 

alert("O resultado dos valores informados é: " + Resultado);
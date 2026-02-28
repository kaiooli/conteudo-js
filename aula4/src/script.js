//Exemplo de condição lógica: If e Else
let x = 8;

if (x == 5) { 
    //console.log('A variável x é igiual a 5');   
} else {
   // console.log('A variável x não é igual a 5!');   
}

//Exemplo de condição lógica: If e Else

let y = 2;

if (y > 3) {
 //   console.log('A variável y é maior que 3');
} else if (y == 3) {
   // console.log('A variável y é igual que 3');
} else {
    //console.log('A variável y possui um valor diferente das verificações.');  
}


//Exemplo de If 
const elemento = document.getElementById('ex1');
const pegarHoras = new Date ().getHours();
const pegarMinutos = new Date ().getMinutes();
const hora = String(pegarHoras) + ":" + String (pegarMinutos);
console.log(hora);
 

if (pegarHoras > 18) {
    elemento.innerHTML = "Boa Noite!";
}


//Exemplo de if 2
let idade = 18;
let texto = 'Você  é novo de mais pra dirigir';

if (idade>= 18) {
    texto = 'Você tem idade para dirigir';
}

document.getElementById('idade').innerHTML = 'Sua Idade e:' + 'texto';
document.getElementById('ex2').innerHTML = texto;


//Exemplo if alinhado

let idade2 = 18;
let pais = 'Brasil';
let msg = 'Você não pode dirigir'

//if (pais == 'Brasil') {
 //   console.log(idade2 >= 18);
    //msg = 'Você pode dirigir' 
//}

//document.getElementById('ex3').innerHTML=msg;

//Exemplo de if alinhado com operador AND (&&)

let idade3 = 18;
let pais2 = 'Brasil';
let msg2 = 'Você não pode dirigir';

if (pais2 == 'Brasil' && idade3 == '18') {
   // msg = 'Você pode dirigir'
}

//document.getElementById('ex3').innerHTML= msg2;
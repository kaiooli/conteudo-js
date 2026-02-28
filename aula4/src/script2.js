// //Exemplo de If Else
// const hora = new Date().getHours();
// const minuto = new Date().getMinutes();

// const horas = String(hora) + ':' + String(minuto);
// let saudacao = 'Bom Dia!';

// if (horas > 18) {
//     saudacao = 'Boa Noite!';
// } else {
//     saudacao = 'Bom Dia';
// }

// document.getElementById('ex1').innerHTML = saudacao;
// document.getElementById('ex2').innerHTML = 'Agora são: ' + horas;


//Exemplo de If Else
const hora = new Date().getHours();
const minuto = new Date().getMinutes();
const horas = String(hora) + ':' + String(minuto);
let saudacao = 'Bom Dia!';

if (horas > 18) {
    saudacao = 'Boa Noite!';
} else if (horas > 12 ) {
    saudacao = 'Bom Tarde!';
} else {
    saudacao = 'Bom Dia!';
}

document.getElementById('ex1').innerHTML = saudacao;
document.getElementById('ex2').innerHTML = 'Agora são: ' + horas;



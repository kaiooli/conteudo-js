//Eemplo de animação com JavaScript
function animacao() {
    const elementoAnimado = document.querySelector("#animacao");

    let  posicaoX = 0;
    let  posicaoY = 0;
    let direcao = "right";

    const limite = 350;

setInterval(frame, 5)

function frame() {
    if (direcao === "right") {
         posicaoX =  posicaoX + 1;
        if ( posicaoX >= limite){
            direcao = "down";
        }
    } else if (direcao === "down") {
         posicaoY =  posicaoY + 1;
        if ( posicaoY >= limite) {
            direcao = "left";
        }
    } else if (direcao === "left") {
         posicaoX =  posicaoX -1;
        if ( posicaoX <= 0) {
            direcao = "up";
        }
    } else if (direcao === "up") {
         posicaoY =  posicaoY -1;
        if ( posicaoY <= 0) {
            direcao = "right";
        }
    }

    elementoAnimado.style.left =  posicaoX + "px";
    elementoAnimado.style.top =  posicaoY + "px";
  }
}

animacao();




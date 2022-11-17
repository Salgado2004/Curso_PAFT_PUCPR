const placar = document.querySelector('#placar');
let fim = "21";

const limitPartida = document.querySelector('#limit');
let i = 0;
while (i <= 21){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    i++;
    limitPartida.appendChild(option);
}
limitPartida.oninput = function(e){
    fim = limitPartida.value;
}

function pontos(jogador){
    const lado = document.querySelector(`#${jogador}`);
    let valor = parseInt(lado.innerText);
    lado.innerText = valor+1;
    if (lado.innerText == fim){
        const victory = document.querySelector('#victory');
        victory.innerText = jogador+" venceu!!!";
        const buttons = document.querySelectorAll('.playButton');
        for (button of buttons){
            button.disabled = true;
        }

    }
}

function resetar(){
    const lados = document.querySelectorAll('.pontos');
    for (lado of lados){
        lado.innerText = 0;
    }
    if (victory.innerText != ""){
        victory.innerText = "";
    }
    limitPartida.value = 0;
    fim = "21";
    const buttons = document.querySelectorAll('.playButton');
    for (button of buttons){
        button.disabled = false;
    }
}

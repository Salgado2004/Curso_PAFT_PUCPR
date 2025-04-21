let transacoes = window.localStorage.getItem("transacoes");
transacoes = transacoes.split("/n");

const extrato = document.querySelector("#extrato");

transacoes.reverse().forEach(transacao => {
    transacao = transacao.replace("null", "");
    extrato.innerHTML = extrato.innerHTML+transacao;
});

const grafico = document.querySelector("#extratoGrafico");
const canva = grafico.getContext("2d");

let graficData = window.localStorage.getItem("graficData");
graficData = graficData.split("<br>");

let y = 0;
let x = 15;
let lastOne = 155;
graficData.forEach(fact => {
    fact = fact.replace("null", "");
    fact = fact.split("/");

    y = lastOne - parseInt(fact[0]);
    canva.fillStyle = "#8264A4";
	canva.fillText(`${fact[0]}`, x-15, y);

    canva.lineTo(x, y);
    canva.stroke();
    console.log(y);

    x += 10;
    lastOne = y
});


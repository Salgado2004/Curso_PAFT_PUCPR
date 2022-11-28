let transacoes = window.sessionStorage.getItem("transacoes");
transacoes = transacoes.split("/n");

const extrato = document.querySelector("#extrato");

transacoes.forEach(transacao => {
    transacao = transacao.replace("null", "");
    extrato.innerHTML = extrato.innerHTML+transacao;
});
const transacao = class {
    #valor;
    #data;
    #recebedor;
    #tipo;
    constructor(valor, data, recebedor, tipo) {
        this.#valor = valor;
        this.#data = data;
        this.#recebedor = recebedor;
        this.#tipo = tipo;
    }

    get valor(){
        return this.#valor;
    }

    get date(){
        return this.#data;
    }

    toString(){
        return `<li>${this.#tipo}<br>- R$${this.#valor}<span>${this.#data}</span></li>/n`;
        
    }
}

const recebedor = class {
    #banco;
    #conta;
    #agencia;

    constructor(banco, conta, agencia){
        this.banco = banco;
        this.conta = conta;
        this.agencia = agencia;
    }
}

const transferencia = document.querySelector("#transForm");
transferencia.onsubmit = async function(e){
    e.preventDefault();

    let valor = document.querySelector("#valorTransf").value;
    let banco = document.querySelector("#banco").value;
    let data = document.querySelector("#dataTransacao").value;
    let agencia = document.querySelector("#agencia").value;
    let conta = document.querySelector("#conta").value;
    let tipo = "transferencia";

    try{
        valor = await validaValor(valor);
        agencia = await validaAgencia(agencia);
        conta = await validaConta(conta);
        data = await validaData(data);

        const myMan = new recebedor(banco, conta, agencia);
        const transaction = new transacao(valor, data, myMan, tipo);

        let transacoes = window.localStorage.getItem("transacoes");
        transacoes += transaction.toString();
        window.localStorage.setItem("transacoes", transacoes);

        let grafico = window.localStorage.getItem("graficData");
        grafico += `${-parseInt(transaction.valor)}<br>`;
        window.localStorage.setItem("graficData", grafico);

        let saldo = parseFloat(window.localStorage.getItem("saldo"));
        saldo -= parseFloat(transaction.valor);
        window.localStorage.setItem("saldo", saldo);
    } catch(error){
        let warning = document.querySelector("#error");
        warning.style.visibility = "visible";
        warning.innerHTML = error;
    }

    
}



function validaValor(valor){
    let saldo = parseInt(window.localStorage.getItem("saldo"));
    if (saldo >= valor){
        return valor;
    } else{
        throw "Valor indisponível"
    }
}

function validaAgencia(agencia){
    if (/(\d{4})/.test(agencia)){
        return agencia;
    } else{
        throw "Agencia inválida";
    }
}

function validaConta(conta){
    if (/(\d{7})-(\d)/.test(conta)){
        return conta;
    } else{
        throw "Conta inválida";
    }
}

function validaData(data){
    let dataInformada = new Date(data);
    let dataHoje = new Date();
    if (dataInformada < dataHoje){
        throw "Data inválida";
    } else if (dataInformada.getFullYear() > dataHoje.getFullYear()+1){
        throw "Data inválida";
    } else {
        return `${dataInformada.getDate()+1} / ${dataInformada.getMonth()+1} / ${dataInformada.getFullYear()}`;
    }
}
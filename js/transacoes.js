const transacao = class {
    #valor;
    #data;
    #recebedor;
    #tipo;
    constructor(valor, recebedor, tipo) {
        this.valor = valor;
        this.data = date.getDate();
        this.recebedor = recebedor;
        this.tipo = tipo;
    }

    toString(){
        return `<li>R$${this.#valor}<span>${this.#data}</span></li>`;
    }
}
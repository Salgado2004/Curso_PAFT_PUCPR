document.body.onload = function(e){
    const valor = document.querySelector("#valor");
    let saldo = parseInt(localStorage.getItem("saldo"));
    if (typeof saldo != 'number'){
        saldo = 0;
    }
    valor.innerHTML = `${saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
}
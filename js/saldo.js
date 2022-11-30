window.localStorage.setItem("saldo", 0);

document.body.onload = function(e){
    const valor = document.querySelector("#valor");
    let saldo = parseInt(localStorage.getItem("saldo"));
    valor.innerHTML = `${saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
}

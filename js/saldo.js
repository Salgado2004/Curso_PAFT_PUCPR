window.localStorage.setItem("saldo", 0);
console.log(localStorage.getItem("saldo"));
console.log(parseInt(localStorage.getItem("saldo")));

document.body.onload = function(e){
    const valor = document.querySelector("#valor");
    let saldo = parseInt(localStorage.getItem("saldo"));
    valor.innerHTML = `${saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
}

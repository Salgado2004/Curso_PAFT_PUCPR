document.body.onload = function(e){
    const valor = document.querySelector("#valor");
    let saldo = localStorage.getItem("saldo");
    valor.innerHTML = `R$${saldo}`;
}
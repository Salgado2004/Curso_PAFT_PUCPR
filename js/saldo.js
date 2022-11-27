document.body.onload = function(e){
    const valor = document.querySelector("#valor");
    let saldo = localStorage.getItem("saldo").replace(/(\d{2})(\d{3})/g, '$1.$2,00');
    valor.innerHTML = `R$${saldo}`;
}
form1 = document.querySelector("#form1");
form2 = document.querySelector("#form2");
form3 = document.querySelector("#form3");

form1.onsubmit = function(e){
    e.preventDefault();
    data1 = document.querySelector("#data1").value;
    data2 = document.querySelector("#data2").value;
    resposta = document.querySelector("#resultado1");
    body = `data1=${data1}&data2=${data2}`;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        resposta.innerHTML = this.responseText;
    }
    xhttp.open("POST", `http://127.0.0.1:5000/api/exerciciosAPI/exercicio1`);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(body);
}

form2.onsubmit = function(e){
    e.preventDefault();
    listaNumeros = document.querySelector("#listaNumeros").value;
    resposta = document.querySelector("#resultado2");
    body = `numeros=${listaNumeros}`;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        resposta.innerHTML = this.responseText;
    }
    xhttp.open("POST", `http://127.0.0.1:5000/api/exerciciosAPI/exercicio2`);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(body);
}

form3.onsubmit = function(e){
    e.preventDefault();
    textoNormal = document.querySelector("#textoNormal").value;
    resposta = document.querySelector("#resultado3");
    body = `texto=${textoNormal}`;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        resposta.innerHTML = this.responseText;
    }
    xhttp.open("POST", `http://127.0.0.1:5000/api/exerciciosAPI/exercicio3`);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(body);
}
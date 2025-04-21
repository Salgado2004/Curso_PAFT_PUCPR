//Atividade 1

let peso = 58;
let altura = 1.67;

let imc = peso/(altura**2);


if (imc >= 30){
    let obeso = true;
}

console.log(`${peso}kg e ${altura}m e ${imc}`);

//Atividade 2

let n = prompt("Informe um número natural maior do que 0\n");

while(n > 1){
    let resto = n%2;
    if(resto == 0){
        n = n/2;
    } else {
        n =  n*3+1;
    }
    console.log(n+"\n")
}

//Atividade 3

let chico = 1.50;
let ze = 1.10;
let ano = 0;

while(chico > ze){
    chico = chico + 0.02;
    ze = ze + 0.03;
    console.log(`Ano ${ano} - Chico: ${chico}m\nZé: ${ze}m`);
}

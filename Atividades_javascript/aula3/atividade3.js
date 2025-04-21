//Atividade 1
console.log("Atividade 1\n\n");

function mais(x, y){
    return x+y;
}

const mais2 = function (x, y){
    return x+y; 
} 

const mais3 = (x, y) => x+y;

console.log(`Sintaxe 1 - Soma 1 e 2: ${mais(1, 2)}`);
console.log(`Sintaxe 2 - Soma 1 e 2: ${mais2(1, 2)}`);
console.log(`Sintaxe 3 - Soma 1 e 2: ${mais3(1, 2)}`);

//Atividade 2
console.log("\n\nAtividade 2\n\n");

function menos(x, y){
    if (y == undefined){
        return x * -1;
    } else{
        return x - y;
    }
}

console.log(`Passando apenas 1 argumento: 10 => ${menos(10)}`);
console.log(`Passando 2 argumentos: 5 e 2 => ${menos(5,2)}`);

//Atividade 3
console.log("\n\nAtividade 3\n\n");

function eCrescente (arg){
    let crescente;
    let lastn = -100000;
    for (i of arg){
        if (i > lastn){
            lastn = i;
            crescente = true;
        } else{
            crescente = false;
            break;
        }
    }
    return crescente;
}

let list1 = [1, 2, 3, 4, 5, 6, 7];
let list2 = [0, 1, 3, 2, 4, 5, 6];
let list3 = [2,3,4,25,6,2,4,6,7];
let list4 = [-5, -4, -3, -2, -1, 0];

console.log(`A lista ${list1} é crescente? ${eCrescente(list1)}`);
console.log(`A lista ${list2} é crescente? ${eCrescente(list2)}`);
console.log(`A lista ${list3} é crescente? ${eCrescente(list3)}`);
console.log(`A lista ${list4} é crescente? ${eCrescente(list4)}`);

//Atividade 4
console.log("\n\nAtividade 4\n\n");

function maior(...args){
    let maior = -10000000;
    for (val of args){
        if (val > maior){
            maior = val;
        }
    }
    return maior;
}

console.log(`O maior número da sequência 1, 2, 3, 4, 5 é: ${maior(1, 2, 3, 4, 5)}`);
console.log(`O maior número da sequência 3, 4, 7, 12, 1, 9 é: ${maior(3,4, 7, 12, 1, 9)}`);
console.log(`O maior número da sequência 100 ,-24, -3, 45, 22 é: ${maior(100, -24, -3, 45, 22)}`);

//Atividade 5
console.log("\n\nAtividade 5\n\n");

function myJoin(text, separador){
    let texto = "";
    for(word of text){
        texto = `${texto}${separador}${word}`;
    }
    texto = texto.slice(1);
    return texto;
}

let texto1 = ["tomate", "alface", "cebola"];
let texto2 = ["voleibol", "basquete", "futebol"];
let texto3 = ["maçã", "banana", "laranja"];

console.log(myJoin(texto1, ","));
console.log(myJoin(texto2, "."));
console.log(myJoin(texto3, ";"));

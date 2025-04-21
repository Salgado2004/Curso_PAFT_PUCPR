/*Atividades
1) Crie um timer que imprima o texto "PUCPR" a cada meio segundo. Pare o timer após 5 execuções
*/

let i = 0;
const tempo = setInterval(()=>{
    if (i >= 4){
        clearInterval(tempo);} 
    console.log("PUCPR "); i++}, 500);

/*
2) Crie um timer que mostre no console a palavra "Pontifícia Universidade". Ele deve disparar um 
segundo timer, que mostre no console o texto "Católica do". Repita para um terceiro timer que mostre 
o texto "Paraná".
*/

setTimeout(()=>{
    console.log("Pontifícia Universidade");
    setTimeout(()=>{
        console.log("Católica do");
        setTimeout(()=>{
            console.log("Paraná");
        }, 2000);
    }, 3000);
}, 5000);

/*
3) Crie 3 timers A (0.5s), B (0.2s) e C (0.8s). Os timers devem produzir os valores a=5, b=10 e c=2, 
respectivamente. Ao final dos 3 timers, deve ser calculada a expressão: a + b * c. O programa deve 
continuar funcionando mesmo se alterarmos os tempos dos timers entre uma execução e outra.
*/

let a = 0;
let b = 0;
let c = 0;
let contador = 0;

function calculo(){
    contador = contador + 1;
    if (contador == 3){
        console.log(a + b * c);
    }
};

setTimeout(() => {
    a = 5;
    calculo();
}, 500);

setTimeout(() => {
    b = 10;
    calculo();
}, 200);

setTimeout(() => {
    c = 2;
    calculo();
}, 800);

/* 
4) Escreva uma função testNum que receba um número como um argumento e retorne um Promise que resolve 
em caso o número seja maior que dez, ou rejeite caso contrário. Use-o exibindo uma mensagem em cada 
caso.
*/

function testNum(num) {
    return new Promise((resolve, reject) => {
       if (num > 10) {
          resolve(num);
       } else {
          reject(num);
       }      
    });
 }
 
testNum(12)
    .then(v => console.log(`Número maior que 10 (${v})`))
    .catch(v => console.log(`Número menor que 10 (${v})`))

/*
5) Escreva duas funções puras que retornem Promises: 
    - A primeira, makeAllCaps(), receberá um array de palavras e tornará todas maiúsculas. Ela 
    rejeitará caso o array contenha um 
    dado que não seja string.
    - A segunda, sortWords(), ordenará as palavras em ordem alfabética.
    - Em seguida, teste-as.
*/

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
       const result = [];
       for (let palavra of words) {
          if (typeof palavra != 'string') {
             reject(palavra);
             return;
          }
          result.push(palavra.toUpperCase());
       }
       resolve(result);
    });
 }

function sortWords(words) {
    return new Promise((resolve, reject) => {
       resolve([...words].sort());
    });
}

let array1 = ["fibromialgia", "pterodáctilo", "tridimensionalismo", "anticonstitucionalissimanente"];
makeAllCaps(array1)
    .then(sortWords)
    .then(v => console.log(v))
    .catch(v => console.log("Não é um texto: " + v));

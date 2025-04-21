//Atividade 1
console.log("Atividade 1: \n\n")

let valores = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
console.log(valores);

console.log(`Números positivos: `);
let media = 0;
for (valor of valores){
    if (valor > 0){
        console.log(valor);
    }
    
    media = media + valor;
}
media = media/valores.length;
console.log(`Média dos valores: ${media}`);

//Atividade 2
console.log("\n\nAtividade 2: \n\n");

function pessoa (nome, cor) {
    this.name = nome;
    this.cor = cor;
}


function isBranco(pessoa) {
    return pessoa.cor == "Branco";
}

function isPreto(pessoa) {
    return pessoa.cor == "Preto";
}

function isPardo(pessoa) {
    return pessoa.cor == "Pardo";
}

function isOutros(pessoa) {
    return pessoa.cor == "Outros";
}

let pessoa1 = new pessoa("leo", "Branco");
let pessoa2 = new pessoa("lucas", "Branco");
let pessoa3 = new pessoa("lara", "Preto");
let pessoa4 = new pessoa("jean", "Preto");
let pessoa5 = new pessoa("bruno", "Preto");
let pessoa6 = new pessoa("josuan", "Branco");
let pessoa7 = new pessoa("helen", "Pardo");
let pessoa8 = new pessoa("mauricio", "Pardo");
let pessoa9 = new pessoa("cris", "Pardo");
let pessoa10 = new pessoa("ale", "Branco");
let pessoa11 = new pessoa("john", "Preto");
let pessoa12 = new pessoa("erick", "Preto");
let pessoa13 = new pessoa("tanaka", "Outros");
let pessoa14 = new pessoa("kenji", "Outros");
let pessoa15 = new pessoa("sakumo", "Outros");

let pessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6, pessoa7, pessoa8, pessoa9, pessoa10,pessoa11, pessoa12, pessoa13, pessoa14, pessoa15,];

for (pessoa of pessoas){
    console.log(pessoa);
}

const branco = pessoas.filter(isBranco);
let qtdBrancos = branco.length;
console.log(`Brancos: ${qtdBrancos}`);

const negro = pessoas.filter(isPreto);
let qtdPretos = negro.length;
console.log(`Pretos: ${qtdPretos}`);

const pardo = pessoas.filter(isPardo);
let qtdPardo = pardo.length;
console.log(`Pardos: ${qtdPardo}`);

const outros = pessoas.filter(isOutros);
let qtdOutros = outros.length;
console.log(`Outros: ${qtdOutros}`);

//Atividade 3
console.log("\n\nAtividade 3: \n\n");


const numero = Math.floor(100* Math.random() + 1);

console.log("Tente adivinhar o número!\n\n");

let number = prompt("Digite um número menor que 1 e maior que 100!\n");

while(number >= 1 && number <= 100){
    console.log(number);
    if(number > numero){
        console.log("O número é menor que isso\nTente de novo");
        number = prompt("Digite um número menor que 1 e maior que 100!\n");
    } else if(number < numero){
        console.log("O número é maior que isso\nTente de novo");
        number = prompt("Digite um número menor que 1 e maior que 100!\n");
    } else {
        console.log(`Parabéns! O número era ${numero}`);
        break;
    }
}

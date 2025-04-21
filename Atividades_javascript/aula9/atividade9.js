//Atividades 
/* 
1) Para praticar a sintaxe, experimente criar um objeto chamado Circulo com raio 3

2) Em seguida, programe os métodos para calcular a área (PI*raio*raio) e o perímetro do círculo 
(PI*2*raio)*/

console.log("Atividades 1 e 2\n");
const circulo = {
    raio: 3,

    perimetro: function(){
        peri = 2*this.raio*Math.PI;
        console.log(`O perímetro do círculo de raio ${this.raio} é ${peri}`);
    },
    area: function(){
        ar = this.raio*this.raio*Math.PI;
        console.log(`A área do círculo de raio ${this.raio} é ${ar}`);
    }
}

circulo.perimetro();
circulo.area();

/*
3) Altere seu objeto círculo para utilizar a sintaxe com uma função construtora chamada Circulo

4) Crie 2 círculos de raios diferentes. E imprima sua área e perímetro*/

console.log("\nAtividades 3 e 4\n");
function circulo_function(raio) {
    this.raio = raio;
    this.perimetro = function(){
        peri = 2*this.raio*Math.PI;
        console.log(`O perímetro do círculo de raio ${this.raio} é ${peri}`);
    };
    this.area = function(){
        ar = this.raio*this.raio*Math.PI;
        console.log(`A área do círculo de raio ${this.raio} é ${ar}`);
    }
}

const circulo1 = new circulo_function(2);
const circulo2 = new circulo_function(4);

circulo1.perimetro();
circulo1.area();
circulo2.perimetro();
circulo2.area();

/*
5) Refatore o seu código para o círculo utilizar a sintaxe de classes

6) Crie o atributo do raio. Torne-o privado.

7) Adicione em sua classe um setter em que, caso o raio seja negativo, retire o sinal (um raio 
setado como -3 se tornaria 3)

8) Adicione getters para o método raio e também para a área e o perímetro.

9) Sobreponha o método toString() da sua classe Circulo para imprimi-la como Circulo de raio ${raio}

10) Crie um método estático criar que aceita uma lista como parâmetro e gera um círculo para cada 
número positivo em seu interior, ignore os parâmetros que não puderem ser convertidos para números.*/

console.log("\nAtividades 5, 6, 7, 8, 9 e 10\n");
const circulo_constructor = class {
    #raio;
    constructor(raio) {
        this.raio = raio;
    }
    get area(){
        return Math.PI * this.#raio * this.#raio;
    }
    set area(area) {
        this.#raio = Math.sqrt(area/Math.PI);
    }
    get perimetro(){
        return Math.PI * this.#raio * 2;
    }
    set perimetro(perimetro) {
        this.#raio = perimetro/(2*Math.PI);
    }
    get raio(){
        return this.#raio;
    }
    set raio(raio) {
        this.#raio = Math.abs(raio);
    }

    toString(){
        return `Círculo de raio ${this.#raio}`;
    }

    static criar(...lista){
        return lista
            .filter((raio) => typeof raio == 'number' && raio > 0)
            .map(raio => new circulo_constructor(raio))
    }
}

const circulo3 = new circulo_constructor(3);
circulo1.area = 35;
const circulo4 = new circulo_constructor(5);
circulo4.raio = -10;
console.log(`raio = ${circulo4.raio}`);
console.log(circulo4.area);
console.log(circulo4.perimetro);
console.log(circulo4.toString());
const circulos = circulo_constructor.criar(1,2,"eee",3,4,5);
circulos.forEach(c => console.log(c.toString()));

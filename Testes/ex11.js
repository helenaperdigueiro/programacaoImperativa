// function nomeDaFuncao(parametro) {
//     parametro
//     return 
// } // jeito "normal"/basico de criar funcao

// function somar(banana, chiclete) {
//     return console.log(banana + chiclete)
// }

// somar(2, 4)

// let nomeDaFuncao2 = function(parametro) {
//     parametro
//     return
// } // funcao expressa

// let somar = function(a, b) {
//     return console.log(a + b);
// };

// somar(3, 6)

// let nomeDaFuncao3 = (parametro, parametro2) => {
//     parametro + parametro2
//     return
// } // arrow function

// let somar = (a, b) => a + b

// console.log(somar(10, 4));

// let dividir = (a, b) => {
//     if(b != 0 && typeof a == 'number' && typeof b == 'number') {
//         return a / b
//     } else if (b == 0) {
//         return 'Nao eh possivel dividir por 0.'
//     } else {
//         return 'Vc inseriu um valor que nao eh numero. Insira um numero.'
//     }
// }

// console.log(dividir(2, "0"))
// console.log(dividir(2, 2))
// console.log(dividir('bla', 2))
// console.log(dividir(2, true))

// let dividir = (a, b) => {
//     switch(b) {
//         case 0:
//             console.log('Nao eh possivel dividir por zero.')
//             break;
//         default:
//             console.log(a / b)
//     }
// }

// dividir(2, 0)
// dividir(2, 2)

// let dividir = (a, b) => {
//     return b != 0? a/b : 'Nao eh possivel dividir por zero'
// }

// console.log(dividir(2, 0))
// console.log(dividir(2, 2))

//objeto literal:

// let helena = {
//     nome: "Helena",
//     idade: 30,
//     notas: [10,10,10,10],
//     temCachorro: true,
//     falarOi: function() {
//         console.log("Oi!")
//     }
// }

// helena.falarOi();

// let Aluno = function(nome, idade, notas, temCachorro) {
//     this.nome = nome;
//     this.idade = idade;
//     this.notas = notas;
//     this.temCachorro = temCachorro;
//     this.falarOi = function() {
//         console.log(`Oi! Meu nome eh ${this.nome}!`)
//     };
//     this.falarOiParaAlguem = function(qualquerCoisa) {
//         console.log(`Oi ${qualquerCoisa}! Meu nome eh ${this.nome}!`)
//     }
// }

// let aluno1 = new Aluno("Vitor", 22, [10, 9, 10, 10], false);
// console.log(aluno1)
// aluno1.falarOi()
// aluno1.falarOiParaAlguem("Carol")

// let luis = new Aluno("Luis", 21, [10, 10, 10, 9], false);
// console.log(luis)
// luis.falarOi()
// luis.falarOiParaAlguem(aluno1.nome)

// let animal = "cachorro"
// let numero = 30

// console.log("O animal eh: " + animal + " e o numero eh: " + numero)
// console.log(`O animal eh: ${animal} e o numero eh: ${numero}`) // template string

//metodos avancados de array:


// let numerosDobrados;

// function dobrarArray() {
//     numerosDobrados = numeros.map( (elemento) => elemento*2 )
//     return numerosDobrados
// }
// dobrarArray()

// console.log(numeros)
// console.log(numerosDobrados)

// let teste = numeros.filter( a => a>5 )
// console.log(teste)

// let teste = numeros.reduce((acumulador, elemento) => acumulador + elemento)
// console.log(teste)

// console.log(numeros.slice(3, 5)) // (comeca, termina) lembrar que a contagem comeca na portinha do elemento
// const numeros = [5, 3, 8, 2, 9, 5, 4, 10, 23, 5, 2];
// let teste = numeros.splice(2, 3)
// console.log(numeros)
// console.log(teste)


// let numeros = [5, 3, 8, 2, 9, 5, 4, 10, 23, 5, 2];
// // console.log(numeros[2])

// let resultado = []; // colocando esse colchete eu disse q vai ser um array
// for(i=0; i<numeros.length; i++) { // i=i+2
//     resultado.push(numeros[i]*2)
// }
// console.log(resultado)

// numeros.forEach(elemento => resultado.push(elemento*2))
// console.log(resultado)

// EXEMPLO PARA EXPLICAR CONST:
// const teste = [1, 2, 3];
// function mudarArray() {
//     teste = teste.map(elemento => elemento*2)
// }
// mudarArray()
// console.log(teste)
//quando declara const, nao pode reatribuir o valor, mas pode alterar como retirar ou colocar mais coisas nele.

// const palavras = ['macaco', 'cama', 'boneca', 'carro', 'zebra', 'bola'];
// let palavras2 = palavras.sort()
// console.log(palavras)
// console.log(palavras2)

// let numeros = [1, 10, 5, 3, 7];
// numeros.sort((a, b) => a - b)
// console.log(numeros)

// let numeros = [1, 10, 5, 3, 7];
// numeros.sort((a, b) => b - a)
// console.log(numeros)

// let numeros = [1, 10, 5, 3, 7];
// console.log(numeros.includes(5, 0))
// console.log(numeros)

let numeros = [1, 10, 5, 3, 7, 5];
console.log(numeros.indexOf(11))


// numeros.find((elemento, indice) => {
//     elemento == 5
//     return indice
// })

// console.log(numeros.find((elemento) => elemento == 5))
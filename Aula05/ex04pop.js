// Aula 05 - 11/06/2021
// Array - pop - retira o ultimo elemento

let cores = ["Azul", "Branco", "Vermelho", "Verde"];

console.log(cores);
console.log(cores.length);

let ultimoElemento = cores.pop();

console.log(cores);
console.log(cores.length);

console.log(ultimoElemento);

function calcular (a, b, c) {
    if (c=='+') {
        return a+b
    } else {
        console.log("bla")
    }
}

let resultado = calcular('2', 5, '+')
console.log('Resultado= ' +resultado);

let resta = 0;
for (i=5; i>=3; i--) {
    resta=i-1;
    console.log(i+ "teste" + resta + "teste");
}
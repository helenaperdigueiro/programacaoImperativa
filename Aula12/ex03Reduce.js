// Aula 12 - 06/07/2021
// ex01Reduce.js
// O .reduce() eh um metodo que percorre o array e retorna um unico valor. Ele acumula o resultado.

const numeros = [1, 2, -3, 4, -5, 0, 7, 8, 9, 19];
let resultado = numeros.reduce(
    function(totalizador, elemento) {
        return totalizador + elemento;
    }
);

console.log(resultado);
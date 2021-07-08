// Aula 12 - 06/07/2021
// ex08SortNumeros.js
// O .sort() eh um metodo que ordena os elementos de um array

const numeros = [50, 100, 2, 5, 25, 10];

// ordem crescente
console.log(numeros.sort(
    function(a, b) {
        return a-b
    }
))

// ordem decrescente
console.log(numeros.sort(
    function(a, b) {
        return b-a
    }
))

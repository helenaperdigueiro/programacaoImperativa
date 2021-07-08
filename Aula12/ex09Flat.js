// Aula 12 - 06/07/2021
// ex09Flat.js
// O .flat() eh um metodo que desembrulha sub-arrays dentro de array, ou seja, ele nao modifica o array original

let numeros = [1, 2, 3, [4, 5]];
novoArray = numeros.flat(2);
console.log(novoArray);
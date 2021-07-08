// Aula 12 - 06/07/2021
// ex01Filter.js
// O .filter() eh um metodo que retorna um novo array com os elementos que atendem a uma condicao logica.

const numeros = [1, 2, -3, 4, -5, 0, 7, 8, 9, 19];

const numerosMaiores = numeros.filter(elemento => elemento > 5)

console.log(numerosMaiores)
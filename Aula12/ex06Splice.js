// Aula 12 - 06/07/2021
// ex06Splice.js
// O .splice() eh um metodo que remove ou adiciona elementos de um array em posicoes especificas.
// sintaxe:(array.slice(inicio, quantidade que quer retirar, item1, ...))
// quantidade: opcional - numeros inteiros a retirar do array
// Itens: 

const frutas = ['banana', 'laranja', 'limao', 'maca', 'manga'];
console.log(frutas);

frutas.splice(2, 0, 'mamao', 'kiwi')

console.log(frutas);
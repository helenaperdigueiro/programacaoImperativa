// Aula 05 - 11/06/2021
// Array - Shift - retira o primeiro elemento no inicio da lista
// Array - UnShift - adiciona elemento no inicio da lista

let cores = ["Azul", "Branco", "Vermelho", "Verde"];
console.log(cores);
console.log(cores.length);

console.log("***Shift***");
cores.shift();
console.log(cores);
console.log(cores.length);

console.log("***Unshift***");
cores.unshift("Violeta", "Amarelo");
console.log(cores);
console.log(cores.length);
// Aula 09 - Modulos
// Fora da pasta modulos

let familia = require('./modulos/ex02export'); //importacao

console.log(familia.pessoa);
console.log(familia.pessoa.nome);
console.log(familia.pessoa.idade);
console.log(familia.pessoa.sexo);
console.log(familia.pessoa.filho);

console.log(familia.cachorro);
console.log(familia.cachorro.nome);
console.log(familia.cachorro.idade);
console.log(familia.cachorro.sexo);
console.log(familia.cachorro.raca);

// objetivo: criar funcoes de calculo e exportar
// dentro da pasta modulo
// ex03impFuncoes.js

let calculadora = require("./modulos/ex03exportFuncoes");

console.log(calculadora.somar(2, 3));
console.log(calculadora.subtrair(5, 2));
console.log(calculadora.multiplicar(2, 3));
console.log(calculadora.dividir(2,1));
console.log(calculadora.dividir(2,0));
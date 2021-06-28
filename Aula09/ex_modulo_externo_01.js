const date = require('date-and-time'); //importando as funcoes do modulo externo date-and-time

const now = new Date(); //nao tem relacao com o modulo date-and-time, eh do js mesmo. Instanciei um objeto numa variavel chamada now.
console.log(now);

let dataFormatada1 = date.format(now, 'YYYY/MM/DD HH:mm:ss'); //chamei uma funcao chamada format do modulo externo date-and-time formatando de uma forma
console.log(dataFormatada1);

let dataFormatada2 = date.format(now, 'ddd, MMM DD YYYY'); //chamei a funcao de novo formatando de outra forma
console.log(dataFormatada2);

let dataFormatada3 = date.format(now, 'hh:mm A [GMT]Z'); //chamei a funcao de novo formatando de outra forma
console.log(dataFormatada3);

let dataFormatada4 = date.format(now, 'hh:mm A [GMT]Z', true); //chamei a funcao de novo formatando de outra forma
console.log(dataFormatada4);

/* const pattern = date.compile('MMM D YYYY h:m:s A');
date. */
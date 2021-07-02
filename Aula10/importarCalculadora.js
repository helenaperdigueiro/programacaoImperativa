// importarCalculadora.js
// fora da pasta modulos

const operacoes = require('./modulos/exportarCalculadora');

function calcular(a, b, acao) {
    switch(acao) {
        case '+': console.log(operacoes.somar(a, b));
        break;
        case '-': console.log(operacoes.subtrair(a, b));
        break;
        case '*': console.log(operacoes.multiplicar(a, b));
        break;
        case '/': console.log(operacoes.dividir(a, b));
        default: console.log('Digite uma opcao valida!');
    }
}

calcular('ola', 5, '*')
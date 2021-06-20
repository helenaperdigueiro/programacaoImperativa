let somar = function(a, b) {
    return a + b;
}

let subtrair = function(a, b) {
    return a - b;
}

let calculadora = function(a, b, operacao) {
    return console.log(operacao(a, b));
}

calculadora(3, 2, somar);
calculadora(3, 2, subtrair);
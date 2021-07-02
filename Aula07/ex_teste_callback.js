let somar = function(a, b) {
    return a + b;
}

let subtrair = function(a, b) {
    return a - b;
}

let calculadora = function(x, y, funcao) {
    return console.log(funcao(x, y));
}

calculadora(3, 2, somar);
calculadora(3, 2, subtrair);
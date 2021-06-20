/*let calculadora = (a, b, c) => console.log('Resultado: ' + c(a, b));

let somar = (x, y) => x + y

let subtrair = (x, y) => x - y

calculadora(1, 2, somar);
calculadora(5, 1, subtrair);*/

let resultado = function() {
    console.log("Resultado: " + resultadoDaSoma)
}

let somar = function(a, b) {
    return a+b
}
let resultadoDaSoma = somar(1,2)

let subtrair = function(a, b) {
    return a-b
}
let resultadoDaSubtracao = subtrair()

resultado()
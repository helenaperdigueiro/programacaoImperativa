// objetivo: criar funcoes de calculo e exportar
// dentro da pasta modulo
// ex03exportFuncoes.js

let somar = (a, b) => {
    return a + b;
}

let subtrair = (a, b) => {
    return a - b;
}

let multiplicar = (a, b) => {
    return a * b;
}

let dividir = (a, b) => {
    if (b != 0) {
        return a/b;
    } else {
        return "Nao eh possivel fazer divisao por 0.";
    };
};

module.exports = {somar, subtrair, multiplicar, dividir};
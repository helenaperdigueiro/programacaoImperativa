//Soma
let somar = function(a, b){
    return a + b
}

resultadoDaSoma = somar(5, 3);
console.log(resultadoDaSoma);

//Subtracao
let subtrair = function(a, b){
    return a - b
}

resultadoDaSubtracao = subtrair(5, 3);
console.log(resultadoDaSubtracao)

//Multiplicacao
let multiplicar = function(a, b){
    return a * b
}

resultadoDaMultiplicacao = multiplicar(5, 3);
console.log(resultadoDaMultiplicacao)

//Divisao
let dividir = function(a, b){
    return a / b
}

resultadoDaDivisao = dividir(5, 3);
console.log(resultadoDaDivisao.toFixed(2)); //.toFixed(2) - arrendonda para 2 casas decimais, no caso.

console.log("****");

resultadoDaSoma = somar(5, 3);
resultadoDaSubtracao = subtrair(5, 3);
resultadoDaMultiplicacao = multiplicar(5, 3);
resultadoDaDivisao = dividir(5, 3);

console.log(resultadoDaSoma);
console.log(resultadoDaSubtracao);
console.log(resultadoDaMultiplicacao);
console.log(resultadoDaDivisao.toFixed(2));

console.log("****");

//Pode chamar a funcao sem colocar seu resultado em uma variavel.
console.log(somar(5,3));

//Aqui os resultados de dividir e multiplicar vao ser os valores a serem somados. Os resultados de dividir e multiplicar sao os parametros de somar.
console.log(somar(dividir(20,5), multiplicar(20, 5)));
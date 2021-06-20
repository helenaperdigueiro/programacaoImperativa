let calcularFatorial = function(a) {
    if (typeof a != "number" || a<0) {
        return "Insira um numero inteiro positivo para realizar um calculo fatorial."
    }

    let resultadoDoFor = 1
    
    for (i=a; i>=1; i--) {
        resultadoDoFor = resultadoDoFor * i
    }
    return resultadoDoFor
}

console.log(calcularFatorial(4))
console.log(calcularFatorial(3))
console.log(calcularFatorial("bla"))
console.log(calcularFatorial(-4))
console.log(calcularFatorial(0))
console.log(calcularFatorial(1))
console.log(calcularFatorial(true))

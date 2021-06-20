let calcularFatorial = function(a) {
 
if (a===1 || a===0) {
        return 1
    } else if (a>1) {
        return a * calcularFatorial(a-1)
    } else{
        console.log("Insira um numero inteiro positivo para realizar um calculo fatorial.");
        return ""
    }
    
}

console.log(calcularFatorial(4))
console.log(calcularFatorial(-4))
console.log(calcularFatorial(0))
console.log(calcularFatorial(1))
console.log(calcularFatorial("bla"))
console.log(calcularFatorial(true))
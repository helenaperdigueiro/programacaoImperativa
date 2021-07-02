
let objeto1 = {

    somar: function(a, b) {
          return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        if (b == 0) {
            return "Nao eh possivel dividir por zero.";
        // } else {
        //     return a / b;
        // }
    }
}
}

console.log(objeto1.dividir(3,0))
console.log(objeto1.dividir(3,2))

module.exports = {objeto1}

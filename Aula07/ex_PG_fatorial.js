let testValues = ["4", 4, -4, 0, 1, -1, true, "bla"]; 

let calcularFatorialComFor = a => {
    if (typeof a != "number" || a<0) {
        return "Para realizar o calculo de fatorial, insira um numero inteiro positivo. Numero entrado: " + a;
    }

    let resultadoDoFor = 1;

    for (i=a; i>1; i--) {
        resultadoDoFor = resultadoDoFor * i;
    };
    return resultadoDoFor;
};

testValues.forEach(j => {
    console.log(calcularFatorialComFor(j));
});
console.log("****")

let calcularFatorialComRecursividade = a => {
    if ( a === 0 || a === 1 ) {
        return 1;
    } else if ( a > 1 && typeof a == "number") {
        return a * calcularFatorialComRecursividade(a-1);
    } else {
        return "Para realizar o calculo de fatorial, insira um numero inteiro positivo. Numero entrado: " + a;
    }

};

testValues.forEach(j => {
    console.log(calcularFatorialComRecursividade(j));
});
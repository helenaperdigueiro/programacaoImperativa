numerosPrimos = [1, 2, 3, 5, 7, 11, 13];
let numeros = [1000, 2000, ...numerosPrimos];

let menorNumero = (...num) => {
    console.log('Os elementos do Array sao: ', ...num);
    return Math.min(...num);
};

let maiorNumero = (...num) => {
    console.log('Os elementos do Array sao: ', ...num);
    return Math.max(...num);
};

/* console.log(numeros); */
console.log(menorNumero(...numeros));
console.log(maiorNumero(...numeros));

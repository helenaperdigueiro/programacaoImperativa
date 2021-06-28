function Conta(numeroDaConta, saldo, nomeDoTitular) {
    this.numeroDaConta = numeroDaConta,
    this.saldo = saldo,
    this.nomeDoTitular = nomeDoTitular,
    this.depositar = function(valorDepositado) {
        if (typeof(valorDepositado) === 'number') {
            this.saldo += valorDepositado;
            return this.saldo;
        } else {
            return `Algo inesperado ocorreu. Confirme os dados e tente novamente.`;
        };
    },
    this.sacar = function(valorSacado) {
        if (valorSacado <= this.saldo && typeof(valorSacado) === 'number') {
            this.saldo -= valorSacado;
            return this.saldo;
        } else if (valorSacado > this.saldo && typeof(valorSacado) === 'number') {
            return `Fundos insuficientes`;
        } else {
            return `Algo inesperado ocorreu. Confirme os dados e tente novamente.`;
        };
    };
};

let conta1 = new Conta(12345, 1000, 'Helena');
console.log(conta1.nomeDoTitular, conta1.numeroDaConta, conta1.saldo);
console.log('****');
console.log('Teste true (deu certo), false (deu errado):')

// Teste de comparacao de resultado com o que eh esperado, respondendo apenas se esta certo (vai retornar true) ou errado (vai retornar false)
let arrayParaTeste = ['bla', 100, 500, 400, 100];
let arrayValoresEsperadosTesteSacar = ['Algo inesperado ocorreu. Confirme os dados e tente novamente.', 900, 400, 0, 'Fundos insuficientes'];
let resultadoDoTeste = []

for (i=0; i<arrayParaTeste.length; i++) {
    resultadoDoTeste.push(conta1.sacar(arrayParaTeste[i]))
};

console.log(resultadoDoTeste);

for (i=0; i<arrayValoresEsperadosTesteSacar.length; i++) {
    if (resultadoDoTeste[i] == arrayValoresEsperadosTesteSacar[i]) {
        console.log(true);
    } else {
        console.log(false);
    };
};




















/* console.log("Teste true e false:")
for (i=0; i<arrayParaTeste.length; i++) {
    conta1.sacar(arrayParaTeste[i])
    if (conta1.saldo == arrayValoresEsperadosTesteSacar[i]) {
        console.log(true);
    } else {
        console.log(false);
    };
}; */









/* 
let resultadoDoTeste = []

for (i=0; i<arrayParaTeste.length; i++) {
    resultadoDoTeste[i] = conta1.sacar(arrayParaTeste[i]);
};

if ()
 */







/* 
console.log('****');

for (i=0; i<arrayParaTeste.length; i++) {
    conta1.depositar(arrayParaTeste[i]);
    if (conta1.depositar(arrayParaTeste[i]) == arrayValoresEsperadosTesteSacar[i]) {
        console.log(true)
    };
}; */
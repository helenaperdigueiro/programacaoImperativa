function Conta(numeroDaConta, saldo, nomeDoTitular) {
    this.numeroDaConta = numeroDaConta,
    this.saldo = saldo,
    this.nomeDoTitular = nomeDoTitular,
    this.depositar = function(valorDepositado) {
        if (typeof(valorDepositado) === 'number') {
            this.saldo += valorDepositado;
            return `Foi feito um deposito de ${valorDepositado} em sua conta. Seu novo saldo: ${this.saldo}`;
        } else {
            return `Algo inesperado ocorreu. Confirme os dados e tente novamente.`;
        };
    },
    this.sacar = function(valorSacado) {
        if (valorSacado <= this.saldo && typeof(valorSacado) === 'number') {
            this.saldo -= valorSacado;
            return `Foi feito um saque de ${valorSacado} de sua conta. Seu novo saldo: ${this.saldo}`;
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

let arrayParaTeste = ['bla', 100, 500, 400, 100];

for (i=0; i<arrayParaTeste.length; i++) {
    console.log(conta1.sacar(arrayParaTeste[i]));
    console.log(conta1.nomeDoTitular, conta1.numeroDaConta, conta1.saldo);
};

console.log('****');

for (i=0; i<arrayParaTeste.length; i++) {
    console.log(conta1.depositar(arrayParaTeste[i]));
    console.log(conta1.nomeDoTitular, conta1.numeroDaConta, conta1.saldo);
};

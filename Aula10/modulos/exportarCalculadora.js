// Aula 10 - 29/06/2021

module.exports = {
    somar: (a, b) => {
        if(typeof a=='number' && typeof b=='number') {
            return a + b;
        } else { return 'Favor informar numeros!'}
    },
    subtrair: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
        if ( b!= 0) {
            return a / b;
        } else {
            return 'Impossivel dividir por 0!';
        }
    },
    function verificarTipo(a, b) {
        if
    }
}


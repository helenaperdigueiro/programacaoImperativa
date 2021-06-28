// funcao que calcula a velocidade em Km/h recebendo como parametro o pace.

let calcularVelocidade = (pace) => {
    if (pace > 0 && typeof pace =='number') {
        let resultado = 60 / pace;
        return resultado.toFixed(1);  
    } else {
        return 'Insira um pace valido para calcular a velocidade.';
    }
};

module.exports = calcularVelocidade;
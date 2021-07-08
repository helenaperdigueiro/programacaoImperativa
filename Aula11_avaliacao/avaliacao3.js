const microondas = {
    _mensagemTempoInsuficiente: 'Tempo insuficiente.',
    _mensagemComidaQueimou: 'Sua comida queimou!',
    _mensagemKabum: 'Kabum!',
    _mensagemPratoPronto: 'Prato pronto! Bom apetite!',
    verificarTempo: function(tempoPadrao, tempo) {
        let mensagem = ''
        if (tempo >= 3*tempoPadrao) {
            mensagem = this._mensagemKabum
        } else if (tempo >= 2*tempoPadrao) {
            mensagem = this._mensagemComidaQueimou
        } else if (tempo < tempoPadrao) {
            mensagem = this._mensagemTempoInsuficiente
        } else {
            mensagem = this._mensagemPratoPronto
        }
        return mensagem
    },
    fazerPipoca: function(tempo) {
        const tempoPadrao = 10
        return this.verificarTempo(tempoPadrao, tempo)
    },
    fazerMacarrao: function(tempo=15) {
        const tempoPadrao = 15
        return this.verificarTempo(tempoPadrao, tempo)
    }
}

console.log('Teste da Pipoca:')
let arrayParaTestePipoca = [9, 10, 11, 19, 20, 21, 29, 30, 31]
for (i=0; i<arrayParaTestePipoca.length; i++) {
    console.log(microondas.fazerPipoca(arrayParaTestePipoca[i]))
}

console.log('Teste do Macarrao:')
let arrayParaTesteMacarrao = [14, 15, 16, 29, 30, 31, 44, 45, 46]
for (i=0; i<arrayParaTesteMacarrao.length; i++) {
    console.log(microondas.fazerMacarrao(arrayParaTesteMacarrao[i]))
}
let qualBebida = function(estacao) {
    if (estacao == 'Verao') {
        console.log('Beba agua de coco!');
    } else if (estacao == 'Inverno') {
        console.log('Beba um cha')
    } else {
        console.log('Beba o que quiser')
    }
}

let qualBebida2 = function(estacao) {
    estacao == 'Verao'? console.log('Beba agua de coco') : console.log('Beba o que quiser')

}

qualBebida2('Verao')
qualBebida2('Inverno')
qualBebida2('verao')

let escolherRoupa = (dia) => {
    let diaPadronizado = dia.toLowerCase()
    switch (diaPadronizado) {
        case 'segunda':
            console.log('Use verde')
            break;
        case 'terca':
            console.log('Use azul')
            break;
        case 'quarta':
            console.log('Use branco')
            break;
        case 'quinta':
            console.log('Use preto')
            break;
        case 'sexta':
            console.log('Use vermelho')
            break;
        default :
            console.log('escreva um dia da semana')
    }
}

escolherRoupa('segunda')
escolherRoupa('terca')
escolherRoupa('quarta')
escolherRoupa('quinta')
escolherRoupa('sexta')
escolherRoupa('sabado')


let escolherRoupa2 = (dia) => {
    dia == 'segunda'? console.log('Use verde') : 
    dia == 'terca'? console.log('Use azul') :
    dia == 'quarta'? console.log('Use branco') :
    dia == 'quinta'? console.log('Use preto') :
    dia == 'sexta'? console.log('Use vermelho') : console.log('escreva um dia da semana')
}

escolherRoupa2('segunda')
escolherRoupa2('terca')
escolherRoupa2('quarta')
escolherRoupa2('quinta')
escolherRoupa2('sexta')
escolherRoupa2('sabado')
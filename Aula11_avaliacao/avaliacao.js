let microondas = (prato, tempo) => {
    switch(prato) {
        case 'Pipoca':
            if (tempo >= 30){
                console.log('Kabumm')
            }
            else if (tempo >= 20 ){
                console.log('Comida queimou')
            }
            else if (tempo < 10) {
                console.log('Tempo insuficiente')
            }
            else {
                console.log('Prato pronto, bom apetite!')
            }
            break;
        case 'Macarrao':
            if (tempo >= 24){
                console.log('Kabumm')
            }
            else if (tempo >= 16 ){
                console.log('Comida queimou')
            }
            else if (tempo < 8) {
                console.log('Tempo insuficiente')
            }
            else {
                console.log('Prato pronto, bom apetite!')
            }
            break;
        case 'Carne':
            if (tempo >= 45){
                console.log('Kabumm')
            }
            else if (tempo >= 30 ){
                console.log('Comida queimou')
            }
            else if (tempo < 15) {
                console.log('Tempo insuficiente')
            }
            else {
                console.log('Prato pronto, bom apetite!')
            }
            break;
        case 'Feijao':
            if (tempo >= 36){
                console.log('Kabumm')
            }
            else if (tempo >= 24 ){
                console.log('Comida queimou')
            }
            else if (tempo < 12) {
                console.log('Tempo insuficiente')
            }
            else {
                console.log('Prato pronto, bom apetite!')
            }
            break;
        case 'Brigadeiro':
            if (tempo >= 24){
                console.log('Kabumm')
            }
            else if (tempo >= 16 ){
                console.log('Comida queimou')
            }
            else if (tempo < 8) {
                console.log('Tempo insuficiente')
            }
            else {
                console.log('Prato pronto, bom apetite!')
            }
            break;
    }
}

console.log(' - Testes da Pipoca:')
microondas('Pipoca', 9) // esperado: Tempo insuficiente
microondas('Pipoca', 10) // esperado: Prato pronto, bom apetite!
microondas('Pipoca', 11) // esperado: Prato pronto, bom apetite!
microondas('Pipoca', 19) // esperado: Prato pronto, bom apetite!
microondas('Pipoca', 20) // esperado: Comida queimou
microondas('Pipoca', 21) // esperado: Comida queimou
microondas('Pipoca', 29) // esperado: Comida queimou
microondas('Pipoca', 30) // esperado: Kabumm
microondas('Pipoca', 31) // esperado: Kabumm

console.log(' - Testes do Macarrao:')
microondas('Macarrao', 7) // esperado: Tempo insuficiente
microondas('Macarrao', 8) // esperado: Prato pronto, bom apetite!
microondas('Macarrao', 9) // esperado: Prato pronto, bom apetite!
microondas('Macarrao', 15) // esperado: Prato pronto, bom apetite!
microondas('Macarrao', 16) // esperado: Comida queimou
microondas('Macarrao', 17) // esperado: Comida queimou
microondas('Macarrao', 23) // esperado: Comida queimou
microondas('Macarrao', 24) // esperado: Kabumm
microondas('Macarrao', 25) // esperado: Kabumm

console.log(' - Testes do Carne:')
microondas('Carne', 14) // esperado: Tempo insuficiente
microondas('Carne', 15) // esperado: Prato pronto, bom apetite!
microondas('Carne', 16) // esperado: Prato pronto, bom apetite!
microondas('Carne', 29) // esperado: Prato pronto, bom apetite!
microondas('Carne', 30) // esperado: Comida queimou
microondas('Carne', 31) // esperado: Comida queimou
microondas('Carne', 44) // esperado: Comida queimou
microondas('Carne', 45) // esperado: Kabumm
microondas('Carne', 46) // esperado: Kabumm

console.log(' - Testes do Feijao:')
microondas('Feijao', 11) // esperado: Tempo insuficiente
microondas('Feijao', 12) // esperado: Prato pronto, bom apetite!
microondas('Feijao', 13) // esperado: Prato pronto, bom apetite!
microondas('Feijao', 23) // esperado: Prato pronto, bom apetite!
microondas('Feijao', 24) // esperado: Comida queimou
microondas('Feijao', 25) // esperado: Comida queimou
microondas('Feijao', 35) // esperado: Comida queimou
microondas('Feijao', 36) // esperado: Kabumm
microondas('Feijao', 37) // esperado: Kabumm

console.log(' - Testes do Brigadeiro:')
microondas('Brigadeiro', 7) // esperado: Tempo insuficiente
microondas('Brigadeiro', 8) // esperado: Prato pronto, bom apetite!
microondas('Brigadeiro', 9) // esperado: Prato pronto, bom apetite!
microondas('Brigadeiro', 15) // esperado: Prato pronto, bom apetite!
microondas('Brigadeiro', 16) // esperado: Comida queimou
microondas('Brigadeiro', 17) // esperado: Comida queimou
microondas('Brigadeiro', 23) // esperado: Comida queimou
microondas('Brigadeiro', 24) // esperado: Kabumm
microondas('Brigadeiro', 25) // esperado: Kabumm
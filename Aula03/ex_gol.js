let nomeJogador = "Joao"
let golsJogador = 5
let precoEmDolares = 50000


let fazerGol = function(){
    golsJogador++
    precoEmDolares = precoEmDolares + 10000
    console.log(nomeJogador)
    console.log(string="GOL!!!")
    console.log(`Quantidade de gols: ${golsJogador}`)
    console.log(`Valor do Jogador: ${precoEmDolares}`)
}

/*fazerGol()
fazerGol()
fazerGol() (tirei essa parte que tinha feito antes para fazer a segunda parte)*/

let hatTrick = function(){
    fazerGol()
    fazerGol()
    fazerGol()
    precoEmDolares = precoEmDolares * 1.1
    console.log(`Valor atualizado do Jogador: ${precoEmDolares.toFixed(0)}`)
}

hatTrick()
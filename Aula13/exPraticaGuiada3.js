let produtos = [
    {
        nome: "Anel",
        valor: 800,
        qualidade: 10,
        status: true,
    },
    {
        nome: "Pulseira",
        valor: 1000,
        qualidade: 9,
        status: true,
    },
    {
        nome: "Colar",
        valor: 1300,
        qualidade: 8,
        status: true,
    }
]

let carrinho = produtos.filter(elemento => {
    return elemento.valor >= 482 && elemento.valor <= 1600 && elemento.qualidade > 6 && elemento.status == true
})

let gerarRecibo = () => {
    console.log("Produtos:")
    carrinho.forEach(elemento => {
        console.log(elemento.nome, elemento.valor)
    })

    let valorTotal = carrinho.reduce((acumulador, elemento) => {
        return {valor: acumulador.valor + elemento.valor}
    })
    console.log(`Valor Total: ${valorTotal.valor}`)
}

gerarRecibo()
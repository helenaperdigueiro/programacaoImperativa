let produtos = [
    {
        nome: 'Mesa',
        valor: 1000,
        qualidade: 9,
        status: true,
    },
    {
        nome: 'Criado-mudo',
        valor: 500,
        qualidade: 10,
        status: true,
    },
    {
        nome: 'Poltrona',
        valor: 600,
        qualidade: 8,
        status: true,
    }
]

let carrinho = produtos.filter(
    elemento => (elemento.valor >= 482 && elemento.valor <= 1600) && elemento.qualidade >= 6 && elemento.status == true
)

let gerarRecibo = () => {
    carrinho.forEach(elemento => {
        console.log(`${elemento.nome} = ${elemento.valor}`);
    })

    let valorTotal = carrinho.reduce((acumulador, elemento) => {
        return {valor: acumulador.valor + elemento.valor}
    })
    console.log(`Valor Total = ${valorTotal.valor}`)
}

gerarRecibo()
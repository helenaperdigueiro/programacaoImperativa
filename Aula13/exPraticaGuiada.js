let produtos = [
    {
        nome: 'Bicicleta',
        valor: 2000,
        qualidade: 10,
        status: false
    },
    {
        nome: 'Casinha de boneca',
        valor: 500,
        qualidade: 8,
        status: true
    },
    {
        nome: 'Patins',
        valor: 1000,
        qualidade: 9,
        status: true
    }
]

let carrinho = produtos.filter(
    elemento => (elemento.valor >= 482 && elemento.valor <= 1600) && elemento.qualidade > 6 && elemento.status == true
);

console.log(`Seu carrinho de compras:`)
carrinho.forEach(
    elemento => {
        console.log(`Produto: ${elemento.nome}`)
        console.log(`Valor: ${elemento.valor}`)
    }
)
console.log(`*****`)

let valorTotal = carrinho.reduce(
    (acumulador, elemento) => acumulador.valor + elemento.valor
)

console.log(`Valor total: ${valorTotal}`)
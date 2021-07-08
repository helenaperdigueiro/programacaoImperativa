// let numeros = [20, 10, 5]

// let soma = numeros.reduce(function(resultadoDaFuncao, cadaElementoDoArray){
//     return resultadoDaFuncao + cadaElementoDoArray
// })

// let subtracao = numeros.reduce(function(resultadoDaFuncao, cadaElementoDoArray){
//     return resultadoDaFuncao - cadaElementoDoArray
// })

// let multiplicacao = numeros.reduce(function(resultadoDaFuncao, cadaElementoDoArray){
//     return resultadoDaFuncao * cadaElementoDoArray
// })

// console.log(soma)
// console.log(subtracao)
// console.log(multiplicacao)

// let paises = ['Brasil', 'Cuba', 'Peru']

// console.log(`Seu destino eh ${paises[0]}`)
// console.log(`Seu destino eh ${paises[1]}`)
// console.log(`Seu destino eh ${paises[2]}`)

// for(i=0; i<paises.length; i++) {
//     console.log(`Seu destino eh ${paises[i]}`)
// }

// paises.forEach((pais) => {
//     console.log(`Seu destino eh ${pais}`)
// })

let frutasDisponiveis = ['banana', 'morango', 'cereja', 'maca', 'pera']

let frutasSelecionadas = frutasDisponiveis.slice(1, 4)

console.log(frutasSelecionadas)
console.log(frutasDisponiveis)

let numeros = [3, 4, 5, 6, 7]

numeros.splice(2, 1, 10)
console.log(numeros)
console.log(numeros.splice(2, 1, 10))
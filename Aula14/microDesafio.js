// Crie um objeto, contendo int, string, object e array em seu conteúdo. 

let banana = {
    nome: "banana",
    unidades: 20,
    fornecedor: {
        nome: "fazenda da roca",
        organico: true,
    },
    tipos: ["naninca", "maca", "prata", "terra"],
}

// Após isso transforme o array em JSON.
// Pegue o JSON validado na etapa anterior, e o atribua a uma string (variavel).

let objetoEmJson = JSON.stringify(banana)

// Exiba o valor do JSON, copie e valide no site

console.log(objetoEmJson)
console.log("----------------")

// Após isso o transforme em um objeto e acesse alguns de seus valores e os exiba.

let objetoEmJs = JSON.parse(objetoEmJson)
console.log(objetoEmJs)
console.log("----------------")
console.log(objetoEmJs.nome)
console.log("----------------")
console.log(objetoEmJs.unidades)
console.log("----------------")
console.log(objetoEmJs.fornecedor)
console.log("----------------")
console.log(objetoEmJs.tipos)
console.log("----------------")
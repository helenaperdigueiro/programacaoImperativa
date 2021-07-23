// troca de dados - formulario para o servidor
// criacao e consumo - utilizando apis
// persistencia de dados em navegadores e servidores
// formato de dados - padrao da web atualmente
// json - nao suporta comentarios

let dadosJson = '{"nome":"Helena", "sobrenome":"Perdigueiro", "idade":30}';
console.log(dadosJson);
// JSON eh um objeto nativo
// desserializacao = parsing (analise)
let dadosConvertidosJS = JSON.parse(dadosJson); // objeto literal
console.log(dadosConvertidosJS);
console.log(dadosConvertidosJS.sobrenome.toUpperCase());

// serializacao cria um arquivo JSON
let objetoConvertidoJson = JSON.stringify(dadosConvertidosJS);
console.log(objetoConvertidoJson);
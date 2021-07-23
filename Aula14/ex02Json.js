// Data: 16/07/2021
// Aula 14 - JSON
// ex02Json.js

let frutas = '{"Fruta":"Banana", "Preco":8.50, "Tipo":["prata", "maca", "nanica"], "Origem":"Brasil"}';
console.log(frutas);
console.log(frutas.origem); // nao da certo pq ainda eh uma string
// converter para JS
let frutasConvertidasJS = JSON.parse(frutas);
console.log(frutasConvertidasJS);
console.log(frutasConvertidasJS.Origem);

// converter de volta para JSON
let frutasConvertidasJSON = JSON.stringify(frutasConvertidasJS);
console.log(frutasConvertidasJSON);
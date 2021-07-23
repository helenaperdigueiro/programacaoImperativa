// Data: 16/07/2021
// Aula 14 - JSON
// ex03Json.js - FS = File System

const fs = require('fs'); // file system
let frutas = '{"Fruta":"Banana", "Preco":8.50, "Tipo":["prata", "maca", "nanica"], "Origem":"Brasil"}';

fs.writeFileSync('./Aula14/teste.txt',frutas); // se puser ./teste.txt ele cria na pasta Programacao Imperativa

// ler o arquivo
let lerJson = fs.readFileSync('./Aula14/teste.txt','utf-8'); // codificacao de caracteres universais
console.log(lerJson);

// converter
let converterLerJson = JSON.parse(lerJson);
console.log(converterLerJson);
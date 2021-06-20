//Aula 03 - 01/06/2021
//Revisao de variaveis
var nome = "Helena"; //string (texto)
var idade = 30; //int (numero inteiro)
var peso = 65.5 //float (numero com ponto flutuante ou casas decimais)
var temFaculdade = true; //boolean (logico - verdadeiro ou falso)
var ehFeioDemais = false;

console.log(`Nome: ${nome}`); //jeito novo de concatenar, mais limpo
console.log("Idade: " + idade); //jeito antigo de concatenar, mais sujo
console.log("Peso: " + peso);
console.log("Tem faculdade? " + temFaculdade);
console.log("É feio demais? " + ehFeioDemais);

console.log(`A ${nome} tem ${idade} anos e pesa ${peso}kg.`); //jeito novo de concatenar, mais limpo
console.log("A " + nome + " tem " + idade + " anos e pesa " + peso + "kg."); //jeito antigo de concatenar, mais sujo

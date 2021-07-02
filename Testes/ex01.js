let variavel1 = "Hello World!!!";
let variavel2 = "Estou chegando!";
let variavel3 = "Ola!";

console.log(variavel1);

console.log(variavel3 + " " + variavel1);


let nomes = ["Helena", "Clarissa", "Debora"];

console.log(nomes);
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);

console.log(variavel3 + " " + nomes[0]);
console.log(`${variavel3} ${nomes[0]}`);
console.log(`${variavel3} ${nomes[0]}, ${nomes[1]}, ${nomes[2]}. Sejam bem vindas!`);
console.log(`${variavel3} ${nomes.join(", ")}. Sejam bem vindas!`);
console.log(variavel3 + " " + nomes[0] + ", " + nomes[1] + " e " + nomes[2] + '. Sejam bem vindas! "Isso eh um agradecimento da DH".');
console.log(`${variavel3} ${nomes[0]}, ${nomes[1]} e ${nomes[2]}. Sejam bem vindas! "Teste" 'Teste' "Isso eh um 'teste'"`);

let frutas = ["Pera", "Uva", "Maca", "Laranja", "Banana"];
console.log(frutas);
frutas.push("Morango");
console.log(frutas);
frutas.push("Cereja");
console.log(frutas);
frutas.pop();
console.log(frutas);
frutas.unshift("Limao");
console.log(frutas);
frutas.unshift("Framboesa");
console.log(frutas);
frutas.shift();

let nomeJogador = "Pele";
var golsJogador = 7;
let precoEmDolares = 25;

function fazerGol() {
    golsJogador++;
    precoEmDolares += 10000;
    console.log(`Eh GOL!!! O ${nomeJogador} fez ${golsJogador} gols e vale ${precoEmDolares} dolares.`);
}

fazerGol();

function somar(umNumero, outroNumero) {
    return umNumero + outroNumero;
};

let compraDaHelena = somar(2, 3);
console.log(compraDaHelena);

let subtrair = function(umNumero, outroNumero) {
    return umNumero - outroNumero;
};

console.log(subtrair(5, 3))

let multiplicar = (umNumero, outroNumero) => umNumero * outroNumero;

console.log(multiplicar(3, 2));




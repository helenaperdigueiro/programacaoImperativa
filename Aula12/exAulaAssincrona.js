let pares = [2, 4, 6, 8, 10];

let impares = pares.map(n => n-1);
console.log(impares);

let nomes = ['Maria', 'Roberta', 'Helena', 'Joao', 'Pedro', 'Maria', 'Clarissa'];
let nomesMaria = nomes.filter(nome => nome == 'Maria');
console.log(nomesMaria);

let numeros = [1, 5, 9, 3, 7];
let nFormatado = numeros.reduce((acumulador, elemento) => acumulador + ' - ' + elemento);
console.log(nFormatado);

let animais = ['macaco', 'cachorro', 'gato', 'peixe', 'baleia'];
let nomesDosAnimais = ['ze', 'kal', 'lele', 'dori', 'bolinha'];
animais.forEach(animal => console.log(`O animal eh ${animal}`));

animais.forEach((animal, index) => {
    console.log(`O nome do(a) animal ${animal} eh ${nomesDosAnimais[index]}`);
});
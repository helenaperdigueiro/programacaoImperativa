let itens = ["Banana", "Shoyu"]

//imprime o Array original e seu comprimento:
console.log("Array original:");
console.log(itens);
console.log("Comprimento do Array:");
console.log(itens.length);
console.log("-----");

//imprime o Array agora com mais 2 elementos no fim e seu novo comprimento:
console.log("O método push realiza:");
itens.push("Cebola", "Alho");
console.log(itens);
console.log("Comprimento do Array:");
console.log(itens.length);
console.log("-----");

//imprime o Array agora com seu ultimo elemento retirado, seu novo comprimento e o valor do elemento retirado:
console.log("O método pop realiza:");
let ultimoElemento = itens.pop();
console.log(itens);
console.log("Comprimento do Array:");
console.log(itens.length);
console.log("Elemento que foi retirado:");
console.log(ultimoElemento);
console.log("-----");

//imprime o Array agora com mais 2 elementos no inicio e seu novo comprimento:
console.log("O método unshift realiza:");
itens.unshift("Azeite", "Farinha");
console.log(itens);
console.log("Comprimento do Array:");
console.log(itens.length);
console.log("-----");

//imprime o Array agora com seu primeiro elemento retirado, seu novo comprimento e o valor do elemento retirado:
console.log("O método shift realiza:");
let primeiroElemento = itens.shift();
console.log(itens);
console.log("Comprimento do Array:");
console.log(itens.length);
console.log("Elemento que foi retirado:");
console.log(primeiroElemento);
console.log("-----");

//imprime todos os elementos juntos (se quiser, pode especificar como quer separar os elementos):
console.log("O método join realiza:");
console.log(itens.join(" - "));
console.log("-----");

//imprime a posicao do elemento pedido:
console.log("A posicao que esta o elemento 'Banana':");
console.log(itens.indexOf("Banana"));
console.log("A posicao que esta o elemento 'Cebola':");
console.log(itens.indexOf("Cebola"));

//imprime o elemento da posicao pedida:
console.log("O elemento que esta na posicao 1:");
console.log(itens[1]);
console.log("O elemento que esta na posicao 3:");
console.log(itens[3]);
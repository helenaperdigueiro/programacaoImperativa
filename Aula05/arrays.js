let filmes = ["star wars", "clube da luta", "o poderoso chefao", "top gun", "interestelar"];

console.log(filmes[1]);

console.log("****");

filmes.forEach(element => {
    console.log(element.toUpperCase());
});

console.log("****");

let filmesUpperCase = [];

filmes.forEach(element => {
    filmesUpperCase.push(element.toUpperCase());
});

console.log(filmesUpperCase);

console.log("****");

let cartoons = ["toy story", "procurando nemo", "kung-fu panda", "wally", "fortnite"];

console.log(cartoons);

cartoons.pop();

console.log(cartoons);

console.log("****");

cartoons.forEach(element => {
    filmes.push(element);
});

console.log(filmes);

console.log("****");

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];
const comparacaoDeArrays = [];

let comparar = (scoreFromAsiaScores, scoreFromEuroScores) => {
    if (asiaScores.length == euroScores.length) { //verifica se os arrays tem tamanhos iguais antes de serem comparadas.
        for (i=0; i<=asiaScores.length-1; i++) {
            console.log("comparing: " + asiaScores[i] + " " + euroScores[i]);
            if (asiaScores[i] == euroScores[i]) {
                comparacaoDeArrays.push(true);
                console.log("true");
            } else {
                comparacaoDeArrays.push(false);
                console.log("false");
            };
        };
    };
};

console.log(comparar(asiaScores, euroScores));
console.log(comparacaoDeArrays);
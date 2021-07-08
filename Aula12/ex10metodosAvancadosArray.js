let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

percentual = array => {
    let somaDoArray = array.reduce((acumulador, elemento) => acumulador + elemento);
    let porcentagem = array.map(elemento => elemento / somaDoArray);
    let porcentagemCom3CasasDecimais = porcentagem.map(elemento => elemento.toFixed(3));
    return porcentagemCom3CasasDecimais;
};

console.log(percentual(array1));
console.log(percentual(array2));
console.log('****');


let array3 = ['banana', 'bicicleta', 'televisao', 'cadeira', 'mesa', 7];

funcaoLouca = array => {
    let valorCaracteres = array[array.length-1];
    let palavrasComQuantidadeCaracteres = array.filter(elemento => elemento.length > valorCaracteres);
    return palavrasComQuantidadeCaracteres;
}

console.log(funcaoLouca(array3));
console.log('****');

let alunos = [
    {
        nome: 'Joao',
        nota: 8,
    },
    {
        nome: 'Alice',
        nota: 9,
    },
    {
        nome: 'Paulo',
        nota: 10,
    }
];

ordenarPorNome = array => array.sort((a, b) => a.nome < b.nome ? -1 : a.nome < b.nome ? 1 : 0 );

ordenarPorNota = array => array.sort((a, b) => b.nota - a.nota);

console.log(ordenarPorNome(alunos));
console.log(ordenarPorNota(alunos));
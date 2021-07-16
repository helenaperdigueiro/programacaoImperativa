const Aluno = require("./aluno");
const curso = require("./curso");

let joao = {
    nome: 'Joao',
    faltas: 0,
    notas: [8, 9, 5, 7]
};

console.log(joao);

let abne = new Aluno('Abne', 1, [7, 7, 7, 7]);
let paulo = new Aluno('Paulo', 1, [10, 8, 10, 9]);
let helena = new Aluno('Helena', 0, [10, 9, 10, 10]);
let clarissa = new Aluno('Clarissa', 0, [9, 9, 10, 10]);
let maria = new Aluno('Maria', 2, [10, 5, 8, 9]);
let mario = new Aluno('Mario', 0, [5, 3, 7, 8]);


// console.log(abne.calcularMedia());
// console.log(paulo.calcularMedia());

abne.adicionarFalta();
paulo.adicionarFalta();


curso.incluirAluno(abne, paulo, helena, clarissa, maria, mario);
console.log(curso.listaEstudante);

console.log(curso.aprovar(helena));
console.log(curso.aprovar(maria));
console.log(curso.aprovar(mario));
console.log(curso.aprovar(abne));

console.log(curso.verificarAprovacoes())
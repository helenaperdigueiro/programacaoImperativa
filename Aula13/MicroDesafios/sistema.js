//aqui estou importando a funcao construtora de aluno:
let Aluno = require('./aluno');

//aqui estou importando o objeto literal curso:
let curso = require('./curso')

let helena = new Aluno('Helena', 0, [10, 9, 10, 10]);
let clarissa = new Aluno('Clarissa', 1, [9, 10, 9, 10]);
let debora = new Aluno('Debora', 2, [7, 9, 8, 8]);
let joao = new Aluno('Joao', 2, [7, 7, 7, 7]);
let pedro = new Aluno('Pedro', 1, [5, 5, 8, 6]);
let maria = new Aluno('Maria', 1, [9, 7, 9, 6]);

// console.log(helena.calcularMedia()) //testamos se o metodo calcularMedia esta funcionando.

// helena.adicionarFalta()
// console.log(helena.faltas) //testamos se o metodo adicionarFalta esta funcionando.
// maria.adicionarFalta()
// console.log(maria.faltas) //testamos se o metodo adicionarFalta esta funcionando.
// maria.adicionarFalta()
// console.log(maria.faltas) //testamos se o metodo adicionarFalta esta funcionando.

// curso.adicionarAluno(helena);
// console.log(curso.listaEstudantes); //testamos se o metodo adicionarAluno esta funcionando.

//testamos se o metodo adicionarAluno agora com parametro rest para adicionar varios alunos de uma vez soh esta funcionando.
// console.log(curso);

curso.adicionarAluno(helena, clarissa, debora, joao, pedro, maria);

// console.log(curso.listaEstudantes);

relatorio = (aluno) => {
    let media = aluno.calcularMedia()
    let aprovado = curso.aprovarAluno(aluno)
    console.log(`
    Nome: ${aluno.nome}
    Faltas: ${aluno.faltas}
    Notas: ${aluno.notas}
    Media: ${media}
    Aprovado: ${aprovado}`)
}

curso.listaEstudantes.forEach((elemento) => relatorio(elemento));

//aqui fiz a importacao do arquivo aluno:
let Aluno = require("./aluno");

//aqui fiz a importacao do arquivo curso:
let curso = require("./curso")

//aqui criei os alunos usando a funcao construtora chamada Aluno:
let joao = new Aluno("Joao", 1, [10, 9, 8, 9]);
let pedro = new Aluno("Pedro", 1, [6, 7, 8, 5]);
let carol = new Aluno("Carol", 1, [8, 7, 8, 9]);
let augusto = new Aluno("Augusto", 1, [8, 7, 8, 9]);
let alex = new Aluno("Alex", 1, [8, 7, 8, 9]);

curso.adicionarAluno(joao, pedro, carol, augusto, alex)
// console.log(curso.listaAlunos)

// console.log(curso.aprovarAluno(pedro))
// console.log(curso.aprovarAluno(joao))
// console.log(curso.aprovarAluno(carol))
// console.log(curso.aprovarAluno(augusto))

// console.log(curso.listarAprovados())

let fazerRelatorio = (aluno) => {
    let media = aluno.calcularMedia()
    let aprovado = curso.aprovarAluno(aluno)
    console.log(`
    Nome: ${aluno.nome}
    Faltas: ${aluno.faltas}
    Notas: ${aluno.notas}
    Media: ${media}
    Aprovado: ${aprovado}`)
}

curso.listaAlunos.forEach(elemento => fazerRelatorio(elemento))


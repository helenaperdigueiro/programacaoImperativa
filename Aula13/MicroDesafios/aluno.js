//objeto literal:

// let joao = {
//     nome: 'Joao',
//     faltas: 0,
//     notas: [5, 8, 9, 8]
// }

//funcao construtora de alunos:

let Aluno = function(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function() {
        return this.notas.reduce((acumulador, elemento) => acumulador + elemento)/this.notas.length
    };
    this.adicionarFalta = function() {
        return this.faltas++
    }
};

//aqui estou exportando esse objeto:

module.exports = Aluno;
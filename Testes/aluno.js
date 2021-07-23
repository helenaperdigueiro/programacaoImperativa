// objeto aluno literal:

// let maria = {
//     nome: "Maria",
//     faltas: 2,
//     notas: [6, 8, 9, 8]
// }

// OBS IMPORTANTE!! Nao dah pra usar arrow function para fazer funcao construtora. Mas pode usar para fazer os metodos dentro de uma funcao construtora.
// OBS 
let Aluno = function(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = () => this.notas.reduce((acumulador, elemento) => acumulador + elemento)/this.notas.length;
    this.adicionarFalta = () => this.faltas++;
}

module.exports = Aluno;


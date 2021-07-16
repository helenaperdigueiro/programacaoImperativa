function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function() {
        let somaDasNotas = this.notas.reduce((acumulador, elemento) => acumulador + elemento)
        media = somaDasNotas/notas.length
        return media;
    },
    this.adicionarFalta = function() {
        return this.faltas += this.faltas;
    }
};

module.exports = Aluno;
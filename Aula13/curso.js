let curso = {
    nomeDoCurso: 'CTD',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudante: [],
    incluirAluno: function(...aluno) {
        this.listaEstudante.push(...aluno)
    },
    aprovar: function(aluno) {
        let media = aluno.calcularMedia();
        if (aluno.faltas < this.faltasMaximas && media >= this.notaAprovacao) {
            return true
        } else if (aluno.faltas = this.faltasMaximas && media >= this.notaAprovacao*1.1) {
            return true
        } else {
            return false
        }
    },
    verificarAprovacoes: function() {
        let listaAprovacoes = [];
        this.listaEstudante.forEach(aluno => {
            listaAprovacoes.push(this.aprovar(aluno))
        })
        return listaAprovacoes
    }
}

module.exports = curso;
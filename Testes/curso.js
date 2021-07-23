let curso = {
    nome: "CTD",
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaAlunos: [],
    adicionarAluno: function (...nomeDoAluno) {
        this.listaAlunos.push(...nomeDoAluno)
    },
    aprovarAluno: function (aluno) {
        let media = aluno.calcularMedia()
        if (aluno.faltas < this.faltasMaximas && media >= this.notaAprovacao) {
            return true
        } else if (aluno.faltas == this.faltasMaximas && media >= this.notaAprovacao*1.1) {
            return true
        } else {
            return false
        }
    },
    listarAprovados: function() {
        let listaAprovados = [];
        this.listaAlunos.map(elemento => listaAprovados.push(this.aprovarAluno(elemento)))
        return listaAprovados
    }
}

module.exports = curso;

// função construtora - serve para otimizar objetos literais  
// nao tem como fazer arrow function para criar uma função construtora, mas pode para fazer como método dentro da função construtora.
// em um objeto literal você não pode usar arrow function para fazer um método. Dah erro!
// o objeto literal não usa arrow function, porque é literal. 
// this funciona de forma diferente em situações diferentes

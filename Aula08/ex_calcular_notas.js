function Aluno(nome, numeroDoArquivo, listaDeNotas) {
    this.nome = nome,
    this.numeroDoArquivo = numeroDoArquivo,
    this.listaDeNotas = listaDeNotas
    this.calcularMedia = function() {
        let somaDasNotas = 0;
        for (i=0; i<this.listaDeNotas.length; i++) {
            somaDasNotas = somaDasNotas + this.listaDeNotas[i];
            }

        return `Media: ${somaDasNotas/this.listaDeNotas.length}`;
    }
}

let aluno1 = new Aluno('Helena', 123, [10, 9, 10, 7, 8]);
console.log(aluno1.nome, aluno1.numeroDoArquivo, aluno1.listaDeNotas);

console.log(aluno1.calcularMedia());
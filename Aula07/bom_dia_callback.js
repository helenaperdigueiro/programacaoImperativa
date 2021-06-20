function nomeCompletoHomem(nome, sobrenome) {
    return 'Sr. ' + nome + ' ' + sobrenome;
}

function nomeCompletoMulher(nome, sobrenome) {
    return 'Sra. ' + nome + ' ' + sobrenome;
}

function bomDia (nome, sobrenome, bla) {
    return console.log('Ola, ' + bla(nome, sobrenome));
}

bomDia('Joao', 'Silva', nomeCompletoHomem);
bomDia('Amanda', 'Ferreira', nomeCompletoMulher);
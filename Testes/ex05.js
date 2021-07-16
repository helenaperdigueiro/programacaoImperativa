let pessoa1 = { 
    nome: "Helena", 
    idade: 30, 
    temCachorro: true,
    falarOi: function() {
        return "Oi!"
    }
}

let pessoa2 = {
    nome: 'Clarissa',
    idade: 32,
    temCachorro: false,
    falarOi: function() {
        return 'Oi!'
    }
}

// console.log(pessoa1.falarOi())
// console.log(pessoa2.falarTchau())
// console.log(pessoa1)
// console.log(pessoa1.nome)

// funcao construtora de objetos:

let Pessoa = function(x, y, z) {
    this.nome = x;
    this.idade = y;
    this.temCachorro = z;
    this.falarOi = function(a) {
        return `Oi, ${a}! Eu sou o(a) ${this.nome}!`
    }
}

let pessoa3 = new Pessoa('Debora', 35, true);
let pessoa4 = new Pessoa('Joao', 20, false);
let pessoa5 = new Pessoa('Maria', 25, true);

console.log(pessoa3.falarOi(pessoa5.nome));
console.log(pessoa4.falarOi('Mama'));
console.log(pessoa5.falarOi('Pedro'));


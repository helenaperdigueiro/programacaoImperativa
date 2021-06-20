function saudacao(a, b) {
    function juntarNome(a, b) {
        return a + " " + b;
    }
    return "Ola, seja bem vinda " + juntarNome(a, b)
    
}
console.log(saudacao("Helena", "Perdigueiro"))

/*outro jeito:*/

function saudacao2(a, b) {
    function juntarNome2(a, b) {
        return a + " " + b;
    }
    console.log("Ola, seja bem vinda " + juntarNome2(a, b))
    
}
saudacao2("Helena", "Perdigueiro")
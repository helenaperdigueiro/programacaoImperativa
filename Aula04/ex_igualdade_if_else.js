//if simples:
console.log("Teste do if simples:");

let linguagem = "javascript"

if ("javascript") {
    console.log("Estou aprendendo")
} else {
    console.log("Aprenderei mais tarde")
};

console.log("****");

//if ternario:
console.log("Teste do if ternário:");

let linguagemTernario = "javascript"

console.log(
    linguagemTernario == "javascript" ? "Estou aprendendo" : "Aprenderei mais tarde"
);

console.log("****");

//switch:
console.log("Teste do switch:");

let linguagemSwitch = "bla"

switch (linguagemSwitch){
    case "javascript":
        console.log("Estou aprendendo")
        break;
    default:
        console.log("Aprenderei mais tarde")
};

console.log("****");

//switch sem repetir console.log para cada um (mais usado):
console.log("Teste do switch sem repetir console.log:");

let linguagemSwitch2 = "bla"
let textToPrint = ""

switch (linguagemSwitch2) {
    case "javascript":
        textToPrint = "Estou aprendendo"
        break;
    default:
        textToPrint = "Aprenderei mais tarde"
};

console.log(textToPrint)
console.log("****");
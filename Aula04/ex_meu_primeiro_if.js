//if simples
console.log("Teste do if simples 1:");

let status = true

if (status == true) {
    console.log("verdadeiro")
} else {
    console.log("falso")
};

console.log("****");

//if simples (true)
console.log("Teste do if simples 2:");

if (status) {
    console.log("verdadeiro")
} else {
    console.log("falso")
};

console.log("****");

//if simples (false)
console.log("Teste do if simples 3:")

if (!status) {
    console.log("verdadeiro")
} else {
    console.log("falso")
};

console.log("****");

//if ternario:
console.log("Teste do if ternario:")

console.log(status == false ? "verdadeiro" : "falso");

console.log("****");

//switch:
console.log("Teste do switch:");

let statusSwitch = "bla"

switch (statusSwitch) {
    case true:
        console.log("verdadeiro")
        break;
    case false:
        console.log("falso")
        break;
    default:
        console.log("nenhum dos dois")
};

console.log("****");

//switch sem repetir console.log para cada um (mais usado):
console.log("Teste do switch sem repetir console.log:");

let statusSwitch2 = "bla"
let textToPrint = ""

switch (statusSwitch2) {
    case true:
        textToPrint = "verdadeiro"
        break;
    case false:
        textToPrint = "falso"
        break;
    default:
        textToPrint = "nenhum dos dois"
}
console.log(textToPrint)

console.log("****");
const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];

console.log(pontos);

let arrayCriada = ["Helena", "Alex", "Buda", "Kal", "Sakura", "Renata"];

console.log(arrayCriada.indexOf("Renata"))
arrayCriada[5] = "Hinata"
console.log(arrayCriada)

// Perguntar para os professores sobre as questoes 3 e 4
let arrayCriada2 = []

for (i=1; i<=25; i++) {
    if (i<=9) {
        console.log(i*11)
    } else if (i<=18) {
        console.log((i-9)*111)
    } else if (i<=27) {
        console.log((i-18)*1111)
    }
}

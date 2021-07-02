/* for (i=5; i<=5; i++) {  // i=1 (onde comeca); i<=5 (onde para); i++ (incremente de um em um)
    console.log(i + ' Hello World!!')
}

for (i=0; i<=10; i+=2) { // i=i+2 comeca no 0, para no 10, incremenda de 2 em 2
    console.log(i)
} */

let tabuada = (numero) => {
    for (i=0; i<=10; i++) {
        console.log(numero*i)
    }
}

tabuada(5)
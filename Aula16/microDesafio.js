// Crie uma função, que após 5 segundos, dobre o resultado do número
// passado como parâmetro. Essa função deverá retornar uma Promise. Use
// o setTimeOut como temporizador.

function dobrarNumero(numero) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(numero*2);
        }, 5000);
    });
}

// 2. Crie uma função assíncrona que irá receber um parâmetro x. Crie três
// variáveis: a, b e c dentro do corpo da função. Cada uma dessas variáveis
// receberá um await da função do passo anterior. Você deve passar como
// parâmetros dessa função os números 10, 20 e 30, respectivamente.
// 3. Retorne a soma de todos esses elementos, inclusive o parâmetro da
// função assíncrona.

async function somaDosElementos(x) {
    let a = await dobrarNumero(10); //20
    let b = await dobrarNumero(20); //40
    let c = await dobrarNumero(30); //60
    return x + a + b + c; //1120
}

somaDosElementos(1000).then(resultado => {
    console.log(resultado);
});
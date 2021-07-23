//Aula 15 - Promises - 20/07/2021
//O que sao promises? Um objeto que vincula a producao do codigo e o consumo do codigo.

function meuVerificador(resposta) {
    console.log(resposta);
}

let minhaPromessa = new Promise(
    function (resolve, reject) {
        let x = 10;
        if (x == 0) {
            resolve('Tudo OK');
        } else {
            reject('Deu erro');
        }
    }
);

minhaPromessa.then(
    function (resolve) {
        meuVerificador(resolve)
    }).catch((reject) => {
        console.log(reject)
    }
    );
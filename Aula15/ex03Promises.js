//Aula 15 - Promises - 20/07/2021
//Para demonstrar o uso de promessas, usaremos exemplos de retorno de chamada:
//Esperando por um tempo limite.

//host
let dadosConexaoJson = '{"server":"192.168.0.1", "login":"admin", "senha":123}';
// console.log(dadosConexaoJson);

//convertendo para JS
let dadosConexaoJS = JSON.parse(dadosConexaoJson);
// console.log(dadosConexaoJS);
console.log(dadosConexaoJS.server);
console.log(dadosConexaoJS.login);
console.log(dadosConexaoJS.senha);

//usuario
let txtServer = "192.168.0.1";
let txtLogin = "admin";
let txtSenha = 123;

let conexao = false;

if (dadosConexaoJS.server == txtServer && dadosConexaoJS.login == txtLogin && dadosConexaoJS.senha == txtSenha) {
    conexao = true;
} else {
    conexao = false;
}

//Criacao da promise
const promessa = new Promise((resolve, reject) => {
    console.log('Requisicao em andamento...')
    //Criacao de um delay de 3seg
    setTimeout(() => {
        //Verificamos se a promise darah erro ou nao
        if (conexao == false) {
            reject("ACESSO NEGADO - SERVER NAO CONECTADO")
        } else {
            resolve(JSON.stringify({
                vServer: "192.168.0.1",
                vLogin: "admin",
                vSenha: 123
            }))
        }
    }, 3000)
})
promessa.then((resolve) => { //consumo/utilizacao do retorno da promise
    const dados = JSON.parse(resolve);
    console.log(dados);
}).catch((reject) => {
    console.log(reject);
})
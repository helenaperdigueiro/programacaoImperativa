let acaoCarro = (callback) => (callback);

let andar = () => console.log("O carro esta andando");

let parar = () => console.log("O carro parou");

acaoCarro(andar());
acaoCarro(parar());

/*let acaoCarro = (callback) => console.log(callback);

let andar = () => mensagem = "O carro esta andando";

let parar = () => mensagem = "O carro parou";

acaoCarro(andar());
acaoCarro(parar());*/
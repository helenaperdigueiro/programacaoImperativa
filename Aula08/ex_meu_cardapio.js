function Restaurante(nomeDoRestaurante, cardapio) {
    this.nomeDoRestaurante = nomeDoRestaurante
    this.cardapio = cardapio
    this.entrada = function() {
        return `Seja bem vindo, ${nomeDoRestaurante}! Este é o seu cardápio:${cardapio}`
    }
};

let restaurante1 = new Restaurante("Outback", [" Alice Spring Chicken", " Kookaburra Wings", " Ribs on the Barbie"]);

console.log(restaurante1.entrada());
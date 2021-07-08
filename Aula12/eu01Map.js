// Aula 12 - 06/07/2021
// ex01Map.js
// O .map() eh um metodo que cria uma nova matriz com os resultados da chamada de uma funcao para cada elemento da matriz.

let letrasMinusculas = ['a', 'b', 'c', 'd'];

let letrasMaiusculas = letrasMinusculas.map(
    function maiuscula(elemento) {
        return elemento.toUpperCase();
    }
);



console.log(letrasMinusculas)
console.log(letrasMaiusculas)
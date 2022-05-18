// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrayInteiros = [2, 3, 6, 7, 10, 1];

maiorValor (arrayInteiros);

function maiorValor() {
    console.log(Math.max.apply(null, arrayInteiros));
}
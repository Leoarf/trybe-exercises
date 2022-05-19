// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let arrayInteiros = [2, 4, 6, 7, 10, 0, -3];

menorValor (arrayInteiros);

function menorValor () {
    console.log(Math.min.apply(null, arrayInteiros));
}

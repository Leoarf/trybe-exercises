// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let arrayInteiros = [2, 4, 6, 7, 10, 0, -3];

menorValor (arrayInteiros);

function menorValor (array) {
    let menor = array[0];
    let indice = 0;
    for (let index = 1; index < array.length; index += 1) {
        if (array[index] < menor) {
            menor = array[index];
            indice = index;
        }
    }
    return indice;
}
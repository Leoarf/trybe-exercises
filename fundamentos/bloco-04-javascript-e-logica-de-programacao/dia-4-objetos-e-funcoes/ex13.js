// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrayInteiros = [2, 3, 6, 7, 10, 1];

maiorValor (arrayInteiros);


function maiorValor (array) {
    let maior = array[0];
    let indice = 0;
    for (let index = 1; index < array.length; i += 1) {
        if (array[index] > maior) {
            maior = array[index];
            indice = index;
        }
    }
    return indice;
}
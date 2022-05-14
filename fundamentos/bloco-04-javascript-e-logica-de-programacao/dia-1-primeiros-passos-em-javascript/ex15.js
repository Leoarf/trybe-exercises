const a = 2;
const b = 3;
const c = 5;

let eImpar = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  eImpar = true;
}

console.log(eImpar);

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.
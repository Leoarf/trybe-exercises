// Crie uma função que receba um número e retorne seu fatorial.

const fatorial = 5;
let resultado = fatorial;

const returnFatorial = (number) => {
  for (let i = 1; i < number; i++) {
    resultado *= i;
  }
  console.log(resultado);
};
returnFatorial(5);

const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

// condição ? valor se for verdadeiro : valor se for falso
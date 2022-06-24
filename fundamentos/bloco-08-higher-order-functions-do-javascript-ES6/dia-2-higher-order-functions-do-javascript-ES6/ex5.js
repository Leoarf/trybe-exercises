// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;

const names = ["Mateus", "José", "Ana", "Cláudia", "Bruna"];

// const hasName = (arr, name) => {
//   return arr.some((names) => {
//     return names === name;
//   });
// };

const hasName = (arr, name) => arr.some((names) => {return names === name;});

console.log(hasName(names, "Leo"));
console.log(hasName(names, "Mateus"));


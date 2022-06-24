// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => {
//   if (number % 3 === 0 && number % 5 === 0) {
//     let thisIsTheNumber = number;
//     return thisIsTheNumber;
//   }
// };

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

console.log(findDivisibleBy3And5(45));

console.log(numbers.find(findDivisibleBy3And5));

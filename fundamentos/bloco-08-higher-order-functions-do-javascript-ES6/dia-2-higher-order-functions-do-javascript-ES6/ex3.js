// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ["João", "Irene", "Fernando", "Maria"];

// const findNameWithFiveLetters = (name) => {
//   if (name.length === 5) {
//     let thisIsTheName = name;
//     return thisIsTheName;
//   }
// };

const findNameWithFiveLetters = (name) => name.length === 5;

console.log(findNameWithFiveLetters("João"));

console.log(names.find(findNameWithFiveLetters));

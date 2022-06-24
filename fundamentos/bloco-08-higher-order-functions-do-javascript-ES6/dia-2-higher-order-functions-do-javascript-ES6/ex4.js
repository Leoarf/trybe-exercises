// 3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
  { id: "31031685", title: "Partita in C moll BWV 997" },
  { id: "31031686", title: "Toccata and Fugue, BWV 565" },
  { id: "31031687", title: "Chaconne, Partita No. 2 BWV 1004" },
];

// function findMusic(element) {
//   if (element.id === "31031685") {
//     const thisIsTheMusic = element.title;
//     console.log(`O nome da música é ${thisIsTheMusic}`);
//     return element;
//   }
// }

const findMusic = (element) => element.id === "31031685";

// console.log(findMusic("31031685"));

console.log(musicas.find(findMusic).title);

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Adicione o código do exercício aqui:

//   🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find.

const authorBornIn1947 = (books) => {
  return books.find((book) => book.author.birthYear === 1947).author.name;
};

console.log(authorBornIn1947(books));

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach.

const smallerName = (books) => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}; // o contrário de falso é verdade, logo a condição dá certo e a variavel nameBook vazia recebe o nome do primeiro livro da condição, em seguida o segundo livro é comparado ao primeiro até chegar ao menor, mas poderia dizer que nameBook é undefined por exemplo.

console.log(smallerName(books));

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

const getNamedBook = (books) => {
  return books.find((book) => book.name.length === 26);
};

console.log(getNamedBook(books));

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

const booksOrderedByReleaseYearDesc = (books) => {
  return books.sort((a, b) => {
    return b.releaseYear - a.releaseYear;
  });
};

console.log(booksOrderedByReleaseYearDesc(books));

// 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const everyoneWasBornOnSecXX = (books, secnumber) => {
  return books.every((book) => book.author.birthYear >= secnumber);
};

console.log(everyoneWasBornOnSecXX(books, 1901));

// 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const someBookWasReleaseOnThe80s = (books, secnumber) => {
  return books.some((book) => book.releaseYear >= secnumber);
};

console.log(someBookWasReleaseOnThe80s(books, 1980));

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

const expectedResult = false;

const authorUnique = (books) => {
  return books.every(
    (book) =>
      !books.some(
        (bookSome) =>
          bookSome.author.birthYear === book.author.birthYear &&
          bookSome.author.name !== book.author.name
      )
  );
};

console.log(authorUnique(books));

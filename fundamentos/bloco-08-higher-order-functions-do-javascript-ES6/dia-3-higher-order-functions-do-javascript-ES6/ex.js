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

// 🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

const formatedBookNames = (books) => {
  return books.map((book) => {
    return `${book.name} - ${book.genre} - ${book.author.name}`;
  });
};

console.log(formatedBookNames(books));

// 🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map, sort

const nameAndAge = (books) =>
  books
    .map((book) => {
      return {
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear,
      }; // usa as chaves para dizer que o retorno vai ser um array com objetos
    })
    .sort((a, b) => a.age - b.age); //usa o metódo sorte nesse retorno. visto que é um array de objetos, através do mesmo podemos acessar cada elemento e sua propriedade de idade por dote notation.

console.log(nameAndAge(books));

// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter

const fantasyOrScienceFiction = (books) => {
  return books.filter((book) => {
    return book.genre === "Ficção Científica" || book.genre === "Fantasia"; // prestar mais atenção ao usar o ||, eu estava usando book.genre === "Ficção Científica" || Fantasia"
  });
};

console.log(fantasyOrScienceFiction(books));

// 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const oldBooksOrdered = (books) => {
  return books
    .filter((book) => {
      return 2020 - book.releaseYear > 60;
    })
    .sort((a, b) => a.releaseYear - b.releaseYear);
};

console.log(oldBooksOrdered(books));

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const fantasyOrScienceFictionAuthors = (books) => {
  return books
    .filter((book) => {
      return book.genre === "Ficção Científica" || book.genre === "Fantasia";
    })
    .map((book) => book.author.name);
};

console.log(fantasyOrScienceFictionAuthors(books));

// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// const expectedResult = [
//   "O Senhor dos Anéis",
//   "Fundação",
//   "O Chamado de Cthulhu",
// ];

const oldBooks = (books) => {
  return books
    .filter((book) => {
      return 2020 - book.releaseYear > 60;
    })
    .map((book) => book.name);
};

console.log(oldBooks(books));

// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const expectedResult = "O Senhor dos Anéis";

const authorWith3DotsOnName = (books) => {
  return books.find(
    (book) =>
      book.author.name.split("").filter((letra) => letra === ".").length === 3
  ).author.name; // o split está retirando todos espaços das strings no path book.author e em seguida o metodo filter pega esse array de strings e filtra os nomes que tiverem apeans 3 pontos no comrpimento total do nome, dessa forma no final é possível retornar o nome do autor.
  //https://pt.stackoverflow.com/questions/486918/como-contar-ocorr%C3%AAncias-de-uma-letra-em-uma-frase#:~:text=%C3%89%20poss%C3%ADvel%20utilizar%20o%20m%C3%A9todo,String%20ou%20uma%20express%C3%A3o%20regular.%20const%20nome%20=%20'Qualquer.%20Coisa.'%20const%20arrNome%20=%20nome.split('');%20console.log(arrNome);%20const%20pontos%20=%20arrNome.filter((caracter)%20=%3E%20caracter%20===%20'.');%20console.log(pontos);%20console.log(pontos.length);
};

console.log(authorWith3DotsOnName(books));

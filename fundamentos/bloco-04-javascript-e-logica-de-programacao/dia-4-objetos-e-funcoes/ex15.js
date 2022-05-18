// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

let maiorPalavra = nomes[0];

maiorChar (nomes);


function maiorChar() {
    for (let index in nomes) {
      if (maiorPalavra.length < nomes[index].length) {
        maiorPalavra = nomes[index];
      }
    }
 console.log(maiorPalavra);
 return maiorPalavra;
}


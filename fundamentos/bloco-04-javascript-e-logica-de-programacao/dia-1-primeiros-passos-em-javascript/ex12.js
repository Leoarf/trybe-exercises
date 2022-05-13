let chessPiece = 'PeÃo';

switch(chessPiece.toLocaleLowerCase()){

    case "peão": console.log('Peão movimenta-se apenas uma casa para frente e só consegue matar outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo');
      break;

    case "torre": console.log('Torre movimenta-se pela vertical ou horizontal, mas com uma limitação: não pode pular outras peças');
      break;

    case "cavalo": console.log('Cavalo pode pular outras pessoas, o movimento dele é em forma de “L”, isso significa duas casas em sentido horizontal e mais uma na vertical ou vice-versa');
      break;

    case "rei": console.log('Rei move-se em todas as direções mas somente uma casa por vez');
      break;

    case "rainha": console.log('Rainha move-se ao longo da horizontal, vertical e diagonais mas com uma limitação: não pode pular outras peças');
      break;

    case "bispo": console.log("Bispo move-se na diagonal");
      break;

    default:
        console.log("Peça inválida");
}

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)


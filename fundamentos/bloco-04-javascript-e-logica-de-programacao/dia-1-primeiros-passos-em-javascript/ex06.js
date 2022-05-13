let estado = 'aprovada'

switch (estado) {
    case 'aprovada':
        console.log('você foi aprovada(o)');
        break;

    case 'reprovada':
        console.log('você foi reprovada(o)');
        break;

    case 'lista':
        console.log('você está na lista de espera');
        break;

    default:
        console.log('não se aplica');
}

// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.
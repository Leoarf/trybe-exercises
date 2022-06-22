// 1 - Crie uma função que retorne a string 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

const returnString = () => "Acordando!!";
const returnString2 = () => "Bora tomar café!!";
const returnString3 = () => "Partiu dormir!!";

const doingThings = (func) => func();

console.log(doingThings(returnString3))
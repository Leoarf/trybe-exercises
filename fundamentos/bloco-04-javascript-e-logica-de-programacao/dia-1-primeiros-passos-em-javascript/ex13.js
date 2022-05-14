const nota = 91;

if (nota < 0 || nota > 100) {
  console.log('Erro: impossível calcular a nota com esse número.');
} else if (nota >= 90) {
  console.log("Parabéns! você tirou um A");
} else if (nota >= 80) {
  console.log("Parabéns! você tirou um B");
} else if (nota >= 70) {
  console.log("Nada mal! você tirou um C");
} else if (nota >= 60) {
  console.log("Xiii :( você tirou um D");
} else if (nota >= 50) {
  console.log("isso só não é pior que um F, você tirou um E");
} else {
  console.log("Você foi péssimo!, tirou um F");
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


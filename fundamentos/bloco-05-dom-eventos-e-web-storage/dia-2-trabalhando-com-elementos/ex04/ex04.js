 // Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
 let remover = document.querySelector("#pai").childNodes;
 let remover2 = document.querySelector("#segundoEUltimoFilhoDoFilho");
 for (let index = remover.length - 1; index >= 0; index -= 1) {
   let filhoAtual = remover[index];
   if (filhoAtual.id !== "elementoOndeVoceEsta") {
     filhoAtual.remove();
   }
   remover2.remove();
 }
// Acesse o elemento elementoOndeVoceEsta.
document.querySelector('#elementoOndeVoceEsta')
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let a = document.querySelector('#elementoOndeVoceEsta').parentNode
a.style.backgroundColor = 'green'
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let b = document.querySelector('#primeiroFilhoDoFilho')
b.innerText = 'lorem ipsum'
// Acesse o primeiroFilho a partir de pai.
let c = document.querySelector('#pai').firstElementChild
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let d = document.querySelector('#elementoOndeVoceEsta').previousElementSibling
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let e = document.querySelector('#elementoOndeVoceEsta').nextSibling
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let f = document.querySelector('#elementoOndeVoceEsta').nextElementSibling
// Agora acesse o terceiroFilho a partir de pai.
let g = document.querySelector('#pai').children[2]
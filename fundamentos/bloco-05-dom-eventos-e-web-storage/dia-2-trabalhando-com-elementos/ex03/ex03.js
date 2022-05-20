// Crie um irmão para elementoOndeVoceEsta.

let irmao = document.createElement('section')
irmao.innerText = 'irmão do elementoOndeVoceEsta'
let a = document.querySelector('#pai')
a.appendChild(irmao)

// Crie um filho para elementoOndeVoceEsta.

let filho = document.createElement('ol')
let b = document.querySelector('#elementoOndeVoceEsta')
b.appendChild(filho)
filho.innerText = 'filho de elementoOndeVoceEsta'

// Crie um filho para primeiroFilhoDoFilho.

let filho2 = document.createElement('p')
let c = document.querySelector('#primeiroFilhoDoFilho')
c.appendChild(filho2)
filho2.innerText = 'filho para primeiroFilhoDoFilho'

// A partir desse filho criado, acesse terceiroFilho.

let d = document.querySelector('#primeiroFilhoDoFilho p').parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling


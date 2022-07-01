const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(elementoOndeVoceEsta);

elementoOndeVoceEsta.parentNode.color = 'red';
console.log(elementoOndeVoceEsta.parentNode);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Hadouuuuken!';
console.log(primeiroFilhoDoFilho);

const pai = document.getElementById('pai');
console.log(pai.firstElementChild);

console.log(elementoOndeVoceEsta.previousElementSibling);
console.log(elementoOndeVoceEsta.nextElementSibling);
console.log(pai.lastElementChild.previousElementSibling);
console.log(pai.firstChild);

const  elementoP = document.createElement('p');
elementoP.innerText = 'Filho elementoOndeVoceEsta: vai karai!!';
elementoOndeVoceEsta.appendChild(elementoP);

const  elementoP2 = document.createElement('p');
elementoP2.innerText = 'Filho primeiroFilhoDoFilho: vai karai!!';
primeiroFilhoDoFilho.appendChild(elementoP2);

const  elementoP3 = document.createElement('p');
pai.appendChild(elementoP3);

console.log(elementoP3.previousElementSibling.previousElementSibling)

const paiDoPai = document.getElementById('paiDoPai');



const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
const primeiroFilho = document.getElementById('primeiroFilho');
const terceiroFilho = document.getElementById('terceiroFilho');
const quartoEUltimoFilho = document.getElementById('quartoEUltimoFilho');

segundoEUltimoFilhoDoFilho.remove();
primeiroFilho.remove();
terceiroFilho.remove();
quartoEUltimoFilho.remove();

console.log(elementoOndeVoceEsta.nextSibling);

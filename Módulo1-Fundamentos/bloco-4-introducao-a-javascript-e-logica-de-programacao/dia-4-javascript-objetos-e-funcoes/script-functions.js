/* Exe 1 */

function verificarPalindrome(palavra) {
  let aoContrario = "";
  for (let letra of palavra) {
    aoContrario = letra += aoContrario;
  }
  console.log("Teste do exe1: ", aoContrario);
  if (palavra === aoContrario) {
    return true;
  } else {
    return false;
  }
}

console.log("Exe 1: ", verificarPalindrome("arara"));
console.log("Exe 1: ", verificarPalindrome("string"));

/* Exe 2  */
let teste = [2, 3, 6, 7, 10, 1];

function indexMaiorNumero(array) {
  let indiceMaior = 0;
  for (let indice in array) {
    if (array[indice] > array[indiceMaior]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log("Exe 2: Index do maior número é: ", indexMaiorNumero(teste));

/* Exe 3  */
let teste1 = [2, 4, 6, 7, 10, 0, -3];

function indexMenorNumero(array) {
  let indiceMenor = 0;
  for (let indice in array) {
    if (array[indice] < array[indiceMenor]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}

console.log("Exe 3: Index do menor número é: ", indexMenorNumero(teste1));

/* Exe 4 */

let teste2 = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function maiorNome(array) {
  let indiceMaiorNome = 0;
  for (let indice in array) {
    if (array[indice].length > array[indiceMaiorNome].length) {
      indiceMaiorNome = indice;
    }
  }
  return array[indiceMaiorNome];
}

console.log("Exe 4: o maior nome é: ", maiorNome(teste2));

/* Exe 5 */

let teste3 = [3, 2, 2, 5, 8, 2, 3];

function maisRepetições(array) {
  let salvo = 0;
  let indexNumeroRepetido = 0;
  for (let index in array) {
    let contNumero = 0;
    for (let index2 in array) {
      if (array[index2] === array[index]) {
        contNumero += 1;
      }
    }
    if (contNumero > salvo) {
      salvo = contNumero;
      indexNumeroRepetido = index;
    }
  }
  return array[indexNumeroRepetido];
}

console.log("Exe 5: numero que mais repetiu foi o: ", maisRepetições(teste3));

/* Exe 6 */
function somatorio(n) {
  let sum = 0;
  for (let index = 1; index <= n; index += 1) {
    sum = sum + index;
  }
  return sum;
}

console.log("Exe 6: resultado dos somatórios: ", somatorio(5));

/* Exe 7 */

function verificarFimPalavra(word, ending) {
  let quantidade = 0;
  
  for (let index = 0; index < ending.length; index += 1) {
    if (ending[index] === word[word.length - ending.length + index]) {
      quantidade = quantidade + 1;
    } else {
      quantidade = quantidade;
    }
  }
  if (quantidade === ending.length) {
    return true;
  } else {
    return false;
  }
}

console.log("Exe 7: verificar fim da palavra: ", verificarFimPalavra("trybe", "be"));

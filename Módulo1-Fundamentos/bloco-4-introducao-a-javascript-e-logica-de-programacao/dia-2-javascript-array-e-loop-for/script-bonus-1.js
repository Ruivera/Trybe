/* Bonus 1 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highestNumber = numbers[0];
let numbersOrdemCrescente = [];
let quantidadeDeNumeros = 10;

while (quantidadeDeNumeros > 0) {
  for (let numeros of numbers) {
    if (numeros > highestNumber) {
      highestNumber = numeros;
    }
  }
  numbersOrdemCrescente.unshift(highestNumber);
  let myIndex = numbers.indexOf(highestNumber);
  if (myIndex !== -1) {
    numbers.splice(myIndex, 1);
  }
  highestNumber = numbers[0];
  quantidadeDeNumeros = quantidadeDeNumeros - 1;
}

console.log(numbersOrdemCrescente);

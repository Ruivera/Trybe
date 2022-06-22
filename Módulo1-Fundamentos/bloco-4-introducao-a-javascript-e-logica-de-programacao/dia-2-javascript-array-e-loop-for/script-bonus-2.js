/* Bonus 2 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smallestNumber = numbers[0];
let numbersOrdemDecrescente = [];
let quantidadeDeNumeros = 10;

while (quantidadeDeNumeros > 0) {
  for (let numeros of numbers) {
    if (numeros < smallestNumber) {
      smallestNumber = numeros;
    }
  }
  numbersOrdemDecrescente.unshift(smallestNumber);
  let myIndex = numbers.indexOf(smallestNumber);
  if (myIndex !== -1) {
    numbers.splice(myIndex, 1);
  }
  smallestNumber = numbers[0];
  quantidadeDeNumeros = quantidadeDeNumeros - 1;
}

console.log(numbersOrdemDecrescente);

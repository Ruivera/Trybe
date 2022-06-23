/* Exe 1 */
let n = 10;
let resultado = 1;

for (let i = 1; i <= n; i += 1) {
    resultado = resultado * i;
}

console.log("Exe 1: Fatorial de n é: ", resultado)

/* Exe 2 */
let word = 'Leopoldina';
let contrario = "";


for(let index = word.length -1; index > -1; index -= 1) {
    contrario = contrario + word[index];
}

console.log("Exe 2: ", contrario);

/* Exe 3 */
let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = "";

for(let index = 0; index < array.length; index += 1) {
    if(array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
}

let menorPalavra = maiorPalavra;

for(let index = 0; index < array.length; index += 1) {
    if(array[index].length < menorPalavra.length){
        menorPalavra = array[index];
    }
}

console.log("Exe 3: a maior palavra do array é: ", maiorPalavra);
console.log("Exe 3: a menor palavra do array é: ", menorPalavra);

/* Exe 4 */
let arrayNumeroPrimo = [2, 3, 5, 7];

for(let index = 2; index <= 50; index += 1) {
    if(index % 2 != 0 && index % 3 != 0 && index % 5 != 0 && index % 7 != 0) {
        arrayNumeroPrimo.push(index);
    }
}

let maiorNumero = 0;

for(let index = 0; index < arrayNumeroPrimo.length; index += 1){
    if(arrayNumeroPrimo[index] > maiorNumero) {
        maiorNumero = arrayNumeroPrimo[index];
    }
}

console.log("Exe 4, retornando o maior numero primo entre 2 a 50: ", maiorNumero);

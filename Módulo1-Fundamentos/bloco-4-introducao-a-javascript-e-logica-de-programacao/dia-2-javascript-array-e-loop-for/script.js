let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Exe 1 */
for (let numeros of numbers) {
    console.log("Exe 1: ", numeros);
}

/* Exe 2 */
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    /* soma = soma + numbers[index é a msm coisa] */
}

console.log("Exe 2: ", soma);

/* Exe 2 com for/of */
let soma1 = 0;

for (let numeros of numbers) {
    soma1 = soma1 + numeros;
}

console.log("Exe 2 bonus: ", soma1);

/* Exe 3 - reutilizando a estrutura do Exe 2*/
let mediaAritmetica = soma / numbers.length;
console.log("Exe 3: ", mediaAritmetica);

/* Exe 4 */
if (mediaAritmetica > 20) {
    console.log("Exe 4: Valor maior que 20");
} else {
    console.log("Exe 4: Valor menor que 20");
}

/* Exe 5 */
let numerosImpares = 0;

/* Exe 6 */
for (let numeros of numbers) {
    if (numeros % 2 !== 0) {
        numerosImpares = numerosImpares + 1;
    }
}

console.log("Exe 6: Qntd de Numero Impares, ", numerosImpares)

/* Exe 7 - é o oposto do 5 */


/* Exe 8 */
let array = [];

for (let n = 1; n <= 25; n += 1) {
    array.push(n);
}

console.log("Exe 8: array = ", array);

/* Exe 9 - aproveitando a estrutura do exe 8*/
let arrayDivididoPor2 = [];

for (let index = 0; index < array.length; index =+ 1) {
    array[index] = array[index] / 2;
}

console.log("Exe 9: array dividido por 2 = ", array);
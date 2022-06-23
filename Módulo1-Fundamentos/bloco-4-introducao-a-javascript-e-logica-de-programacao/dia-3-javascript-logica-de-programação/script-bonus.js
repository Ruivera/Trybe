/* Bonus 1 */
let n = 5;
let sum = "";

if (n > 0) {
  for (let index = 1; index <= n; index += 1) {
    sum = sum + "*";
  }
  for (let contador = 1; contador <= n; contador += 1) {
    console.log("Bonus 1: ", sum);
  }
} else {
  console.log("Bonus 1: 'n' não é maior do que 0");
}

/* Bonus 2 */
let sum1 = "";

if (n > 0) {
  for (let index = 1; index <= n; index += 1) {
    sum1 = sum1 + "*";
    console.log("Bonus 2: ", sum1);
  }
} else {
  console.log("Bonus 2: 'n' não é maior do que 0");
}
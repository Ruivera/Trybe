/* Bonus 3 - Por construção*/
let n = 5;
let i = 1;

if (n > 0) {
  while (n - i >= 0) {
    for (let contador = 1; contador <= n; contador += 1) {
      let sum = "";
      for (let index = 1; index <= n - contador; index += 1) {
        sum = sum + " ";
      }
      for (let index = 1; index <= i; index += 1) {
        sum = sum + "*";
      }
      console.log(sum);
      i = i + 1;
    }
  }
}

/* console.log("Começa aqui:", sum);

let result = sum.replace(sum[2], "8");

console.log("2Começa aqui:", result); */

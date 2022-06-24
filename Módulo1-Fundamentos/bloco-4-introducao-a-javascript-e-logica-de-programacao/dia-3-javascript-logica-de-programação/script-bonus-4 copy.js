/* Bonus 4 - Usando o rastreador */
let n = 5;
let sum = "";
let centro = (n + 1) / 2;
let indexEsquerdo = centro;
let indexDireito = centro;

if (n > 0) {
  for (let index = 1; index <= centro + 1; index += 1) {
    let sum = "";
    for (let rastreador = 1; rastreador <= n; rastreador += 1) {
      if (rastreador > indexEsquerdo && rastreador < indexDireito) {
        sum += "*";
      } else {
        sum += " ";
      }
    }
    console.log("Bonus 4 feito na raça!:", sum);
    indexDireito += 1;
    indexEsquerdo -= 1;
  }
}

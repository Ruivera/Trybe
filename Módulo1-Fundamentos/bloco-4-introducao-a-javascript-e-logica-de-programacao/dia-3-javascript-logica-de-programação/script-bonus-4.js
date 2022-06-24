/* Bonus 4 */
let n = 5;
let sum = "";
let media = (n + 1) / 2;
let diminuidor = 0;
let aumentador = 1;

if (n > 0) {
  for (let index = 0; index <= media + 1; index += 1) {
    let sum = "";
    for (let lados = media - 1; lados > diminuidor; lados -= 1) {
      sum = sum + " ";
    }
    for (let centro = 1; centro <= aumentador; centro += 1) {
      sum = sum + "*";
    }
    for (let lados = media - 1; lados > diminuidor; lados -= 1) {
      sum = sum += " ";
    }
    console.log("Bonus 4 feito na raça!:", sum);
    diminuidor = diminuidor + 1;
    aumentador = aumentador + 2;
    if(aumentador > n) {
      break;
    }
  }
}

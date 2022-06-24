/* Bonus 6 */
let divisores = 1;
let definido = 13;

for(let number = 2; number <= definido; number += 1) {
  if(definido % number == 0) {
    divisores += 1;
  }
}

if(divisores == 2) {
  console.log("Bonus 6: Este número definido é primo");
} else {
  console.log("Bonus 6: Este número definido não é primo");
}
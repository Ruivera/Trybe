/* Exe 1 */

function verificarPalindrome(palavra) {
  let aoContrario = "";
  for (let letra of palavra) {
    aoContrario = letra += aoContrario;
  }
  console.log("Teste do exe1: ", aoContrario)
  if (palavra === aoContrario) {
    return true;
  } else {
    return false;
  }
}

console.log("Exe 1: ", verificarPalindrome("arara"));
console.log("Exe 1: ", verificarPalindrome("string"));

/* Exe 2 */

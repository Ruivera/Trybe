/* Exe 1 */
const a = 5;
const b = 6;
const c = 33;

console.log("Exe 1:", a + b);
console.log("Exe 1:", a - b);
console.log("Exe 1:", a * b);
console.log("Exe 1:", a / b);
console.log("Exe 1:", a % b);

/* Exe 2 */

if (a >= b) {
  console.log("Exe 2:", a);
} else {
  console.log("Exe 2:", b);
}

/* Exe 3 */
if (a >= b && a >= c) {
  console.log("Exe 3:", a);
} else if (b >= a && b >= c) {
  console.log("Exe 3:", b);
} else if (c >= a && c >= b) {
  console.log("Exe 3:", c);
}

/* Exe 4 */
if (a > 0) {
  console.log("Exe 4: positivo");
} else if (a == 0) {
  console.log("Exe 4: zero");
} else {
  console.log("Exe 4: negativo");
}

/*  Exe 5 */
const x = 45;
const y = 45;
const z = 90;

if (!(x > 0)) {
  console.log("Exe 5: 'Ângulo x inválido:'", x);
} else if (!(y > 0)) {
  console.log("Exe 5: 'Ângulo y inválido:'", y);
} else if (!(z > 0)) {
  console.log("Exe 5: 'Ângulo z inválido:'", z);
}

console.log("Exe 5:", 180 === x + y + z);

/* Exe 6 */
const chessPiece = "Rei";

switch (chessPiece.toLowerCase()) {
    case "rei":
        console.log("Exe 6: Move somente para 1 casa de distância da sua origem");
        break;

    case "bispo":
        console.log("Exe 6: Move diagonalmente o quanto livre estiver e assim o jogador desejar");
        break;

    case "cavalo":
        console.log("Exe 6: Move em 'L' 1 casa para um lado e 2 perpendicularmente ou vice-versa, além disso ele pode pular as peças que estão no seu caminho");
        break;
    
    case "torre":
        console.log("Exe 6: Move-se para frente ou para o lado, quantas casas tiverem disponiveis e for do desejo do jogador");
        break;
    
    case "rainha":
        console.log("Exe 6: Move-se para qualquer direção menos em 'L', e quanto casas tiverem disponíveis e forem da vontade do jogador");
        break;
    
    case "peão":
        console.log("Exe 6: Move somente em frente uma casa por vez e come em diagonal, 1 casa de distância somente. Se chegar até a última casa do time adversário pode-se transformar em quaquer peça que o jogador desejar"
            );
        break;  
}

/* Pulei exe 7 */

/* Exe 8 */
const d = 45;
const e = 23;
const f = 33;

if (d % 2 == 0 || e % 2 == 0 || f % 2 == 0) {
    console.log("Exe 8: True")
} else {
    console.log("Exe 8: False")
}

/* Exe 9, reutilizando as const do exe 8 */
if (d % 2 !== 0 || e % 2 !== 0 || f % 2 !== 0) {
    console.log("Exe 9: True")
} else {
    console.log("Exe 9: False")
}

/* Exe 10 */

const custo = 10;
const venda = 20;

if (custo < 0 || venda < 0) {
        console.log("Exe 10: 'Erro: algum dos valores não é uma integer'");
} else {
    console.log("Exe 10: O lucro da empresa é de:", venda - 1.2 * custo);
}

/* Exe 11 */
const salario = 45337;

if (salario <= 1556.94) {
    salarioBase = salario * (1 - 0.08);
} else if (1556.94 < salario && salario <= 2594.92) {
    salarioBase = salario * (1 - 0.09);
} else if (2594.92 < salario && salario <= 5189.82) {
    salarioBase = salario * (1 - 0.11);
} else if (5189.82 < salario) {
    salarioBase = salario - 570.88;
}

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
} else if (1903.98 < salarioBase && salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - (salarioBase * 0.075 - 142.80);
} else if (2826.65 < salarioBase && salarioBase <= 3751.05) {
    salarioLiquido = salarioBase - (salarioBase * 0.15 - 354.80);
} else if (3751.05 < salarioBase && salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - (salarioBase * 0.225 - 636.13);
} else if (4664.68< salarioBase) {
    salarioLiquido = salarioBase - (salarioBase * 0.275 - 869.36);
}

console.log("Exe 11: O salário bruto do cidadão é: ", salario + "," + " depois do INSS e IR a mixaria que sobra é: ", salarioLiquido.toFixed(2));
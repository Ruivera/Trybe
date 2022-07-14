/* Exe 1 */
const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(`Exe 1: ${ifScope}`);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(`Exe 1: ${elseScope}`);
    }
}

testingScope(false);

/* Exe 2 */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

oddsAndEvens.sort((a, b) => a - b);

console.log(`Exe 2: Os números ${oddsAndEvens} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉

/* Parte 2 - Exe 1 */

const fatorial = (num) => (num === 0) ? (1) : (num * fatorial(num - 1));
console.log(`Exe 3: ${fatorial(3)}`);

/* Parte 2 - Exe 2 */
let longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu'; // retorna 'aconteceu'

const maiorPalavra = string => string.split(' ').sort((a, b) => (b.length - a.length))[0];
console.log(`Exe 4: Maior palavra da string é: ${maiorPalavra(longestWord)}`);

/* Parte 2 - Exe 3 */
/* const botao = document.getElementById('btn');
let a = 0
const divContagem = document.getElementById('contagem')
botao.addEventListener('click', () => {
    a += 1;
    divContagem.innerHTML = `Contagem: ${a}`;
}) */

/* Parte 2 - Exe 4 */
let string = 'Tryber x aqui!';

const modificação = (letra) => (string.replace(/x/gi, letra));
const function2 = (letra) => {
    const function1 = modificação(letra);
    const skills = ['Javascript', 'CSS', 'HTML'];
    return `Exe 6 função 2: ${function1} Minhas três principais habilidades são: ${skills[0]}, ${skills[1]} e ${skills[2]}`;
}

console.log(`Exe 6: string modificada: "${modificação('juarez')}"`);
console.log(function2('Bernardo'));

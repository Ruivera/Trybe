const readline = require('readline-sync');

function inserting () {
    const peso = readline.question('Qual é o seu peso em kg? Escreve uma unica casa decimal e usando o ponto "."');
    const altura = readline.question('Qual sua altura em metros? Escreve com duas casas decimais utilizando o ponto "."');

    return ({ peso, altura});
}

function handleBMI (weight, height) {
    console.log(`Weight: ${weight}, Height: ${height}`);

    const bmi = weight / (height**2);

    return bmi;
}

function main(){
    const { peso, altura } = inserting();
    const bmi = handleBMI(peso, altura);

    console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();
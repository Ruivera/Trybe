const readline = require('readline-sync');

const BMI_MAX_AND_MIN = {
    'Underweight': {
        minBMI: 0,
        maxBMI: 18.4,
    },
    'Normal Weight': {
        minBMI: 18.5,
        maxBMI: 24.9,
    },
    'Overweight': {
        minBMI: 25,
        maxBMI: 29.9,
    },
    'Obese Class I': {
        minBMI: 30.0,
        maxBMI: 34.9,
    },
    'Obese Class II': {
        minBMI: 35,
        maxBMI: 39.9,
    },
    'Obese Class III': {
        minBMI: 40,
        maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
    },
};

function handleBMIResult(bmi) {
    for (const category in BMI_MAX_AND_MIN) {
        if (bmi >= BMI_MAX_AND_MIN[category].minBMI && bmi <= BMI_MAX_AND_MIN[category].maxBMI) {
            return category;
        }
    }
}


function inserting() {
    const peso = readline.questionFloat('Qual é o seu peso em kg? Escreve uma unica casa decimal e usando o ponto "."');
    const altura = readline.questionFloat('Qual sua altura em metros? Escreve com duas casas decimais utilizando o ponto "."');

    return ({ peso, altura });
}

function handleBMI(weight, height) {
    console.log(`Weight: ${weight}, Height: ${height}`);

    const bmi = weight / (height ** 2);

    return bmi;
}

function main() {
    const { peso, altura } = inserting();
    const bmi = handleBMI(peso, altura);
    const bmiResult = handleBMIResult(bmi);

    console.log(`BMI: ${bmi.toFixed(2)}`);
    console.log(bmiResult);
}

main();
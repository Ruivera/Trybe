// Exe 1
const person = (nomeCompleto) => {
    const partesDoNome = nomeCompleto.toLowerCase().split(' ');
    const email = partesDoNome.join('_');
    return { nomeCompleto, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};
console.log(newEmployees(person));

// Exe 2
const numberChecker = (number1, number2) => number1 === number2;

const lotteryResult = (myNumber, callback) => {
    const luckyNumber = Math.floor(Math.random() * 5);
    return callback(myNumber, luckyNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(lotteryResult(2, numberChecker));


// Exe 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerChecker = (rightAnswer , studentAnswera) => {
    if(rightAnswer === studentAnswera) {
        return 1;
    } if (studentAnswera === 'N.A') {
        return 0;
    }
    return -0.5;
}

const countMark = (rightAnswers, studentAnswers, action) => {
    let mark = 0;
    for(let index = 0; index < rightAnswers.length; index += 1) {
        const compareCounter = action(rightAnswers[index], studentAnswers[index]);
        mark += compareCounter;
    }
    return `Nota final: ${mark}`
}
console.log(countMark(RIGHT_ANSWERS, STUDENT_ANSWERS, answerChecker));

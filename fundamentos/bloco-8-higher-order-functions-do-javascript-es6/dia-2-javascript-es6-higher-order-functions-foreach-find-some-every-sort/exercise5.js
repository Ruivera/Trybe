const books = require('./base');

const expectedResult = false;

function everyoneWasBornOnSecXX(array) {
    // escreva seu código aqui
    return array.every(objeto => objeto.author.birthYear > 1901 && objeto.author.birthYear < 2000);
}
console.log(everyoneWasBornOnSecXX(books));

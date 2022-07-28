const books = require('./base');

const expectedResult = true;

function someBookWasReleaseOnThe80s(array) {
    // escreva seu código aqui
    return array.some(objeto => objeto.releaseYear < 1990 && objeto.releaseYear > 1981);
}

console.log(someBookWasReleaseOnThe80s(books));

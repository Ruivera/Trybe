const books = require('./base');

function booksOrderedByReleaseYearDesc(array) {
    // escreva aqui seu código
    array.sort((a, b) => b.releaseYear - a.releaseYear);
    return array;
}
console.log(booksOrderedByReleaseYearDesc(books));

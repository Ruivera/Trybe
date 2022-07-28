const books = require('./base');

function getNamedBook(array) {
    // escreva seu código aqui
    return array.find((objeto) => objeto.name.length === 26);
}
console.log(getNamedBook(books));

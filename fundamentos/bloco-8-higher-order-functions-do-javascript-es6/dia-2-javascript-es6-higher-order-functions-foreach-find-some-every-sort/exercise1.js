const books = require('./base');

function authorBornIn1947(array) {
    // escreva aqui o seu código
    return array.find((objeto) => objeto.author.birthYear === 1947).author.name;
}

console.log(authorBornIn1947(books));

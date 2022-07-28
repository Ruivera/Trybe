const books = require('./base');

const expectedResult = false;

function authorUnique(array) {
    return array.every((objeto) => {
        !array.some((objetoSome) => {
            (objetoSome.author.birthYear === objeto.author.birthYear)
            && (objetoSome.author.name === objeto.author.name)
        })
    })
        
}
console.log(authorUnique(books));

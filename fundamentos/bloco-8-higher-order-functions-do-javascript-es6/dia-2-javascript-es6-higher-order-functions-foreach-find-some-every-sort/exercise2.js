const books = require('./base');

function smallerName(array) {
    let nameBook;
    // escreva aqui o seu código
    nameBook = array[0].name;
    array.forEach(element => {
        (element.name.length < nameBook.length) && (nameBook = element.name);
    });
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
}
console.log(smallerName(books));


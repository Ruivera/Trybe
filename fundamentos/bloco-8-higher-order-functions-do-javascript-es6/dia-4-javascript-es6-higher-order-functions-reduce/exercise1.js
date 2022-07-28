const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

    // escreva seu código aqui
const novoArray = arrays.reduce((acc, curr) => acc.concat(curr));
console.log(novoArray);

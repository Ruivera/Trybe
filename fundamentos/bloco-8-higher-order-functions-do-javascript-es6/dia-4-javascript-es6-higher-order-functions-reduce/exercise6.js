const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
    // escreva seu código aqui
    return students.map((nome, index) => ({
        name: nome, average: grades[index].reduce((acc, curr, indexReduce) =>
            (indexReduce === grades[index].length - 1) ?
                (acc + curr) / grades[index].length :
                (acc + curr)
            , 0)
    }))
}
console.log(studentAverage());

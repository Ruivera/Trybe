/* Intro 1 */

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log("Intro 1: ", indexOfPortfolio);

/* Intro 2 */

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log("Intro 2: ", groceryList[index]);
}

/* Intro 3 */

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log("Intro 3: ", name);
}

/* Intro 4 */


function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
}
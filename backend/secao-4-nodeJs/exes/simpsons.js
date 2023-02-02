const fs = require('fs').promises;
const { exit } = require('process');
const readline = require('readline-sync');

/* async function leitura6A () {
    try {
        const read = await fs.readFile('./simpsons.json');
        const readJson = JSON.parse(read);
        const result = readJson.map((e) => {
            console.log(`${e.id} - ${e.name}`);
        });
    
        return result;
    } catch(error) {
        console.error(`Erro na leitura do arquivo: ${error.message}`);
    }
} */
/* async function leitura6B () {
    const idSimp = readline.question("Insira o id do simpson que deseja: ");
    const id = +idSimp;
    try {
        const read = await fs.readFile('./simpsons.json');
        const readJson = JSON.parse(read);
        const result = readJson.find((e) => +e.id === id);
    
        if (!result) {
            throw new Error('id não encontrado');
        }
        return result;
    } catch(error) {
        console.error(`Erro na leitura do arquivo: ${error.message}`);
    }
} */
/* async function leitura6C () {
    try {
        const read = await fs.readFile('./simpsons.json');
        const readJson = JSON.parse(read);
        const result = readJson.filter((e) => (+e.id !== 6 && +e.id !== 10));
    
        return result;
    } catch(error) {
        console.error(`Erro na leitura do arquivo: ${error.message}`);
    }
}
async function main6C() {
    const simpsonNew = await leitura6C();
    const simpsonString = JSON.stringify(simpsonNew)
    await fs.writeFile('./simpsons.json', simpsonString);

    const simpsonsUpdated = await leitura6C();

    console.log(simpsonsUpdated);
}
main6C(); */
/* async function leitura6D (pathConst) {
    try {
        const read = await fs.readFile(pathConst);
        const readJson = JSON.parse(read);

        return readJson;
    } catch(error) {
        console.error(`Erro na leitura do arquivo: ${error.message}`);
    }
}
function creating6D (simpsons) {
        const result = simpsons.filter((e) => +e.id < 5);

        return result;
}
async function main6D() {
    const pathFamily = './simpsonsFamily.json';
    const pathOld = './simpsons.json';

    const simpsons = await leitura6D(pathOld);
    const simpsonsFamily = creating6D(simpsons);
    const simpsonsString = JSON.stringify(simpsonsFamily)
    
    await fs.writeFile(pathFamily, simpsonsString);
    
    const simpsonsUpdated = await leitura6D(pathFamily);
    
    console.log(simpsonsUpdated);
}
main6D(); */
/* async function leitura6E (pathConst) {
    try {
        const read = await fs.readFile(pathConst);
        const readJson = JSON.parse(read);

        return readJson;
    } catch(error) {
        console.error(`Erro na leitura do arquivo: ${error.message}`);
    }
}
async function main6E() {
    const pathFamily = './simpsonsFamily.json';

    const simpFamOld = await leitura6E(pathFamily);

    if (!simpFamOld.find((e) => +e.id === 8)) {
        simpFamOld.push({ id: '8', name: 'Nelson Muntz' });
    }

    const simpsonsString = JSON.stringify(simpFamOld)
    
    await fs.writeFile(pathFamily, simpsonsString);
    
    const simpsonsUpdated = await leitura6E(pathFamily);
    
    console.log(simpsonsUpdated);
}
main6E(); */
/* async function leitura6F (pathConst) {
    try {
        const read = await fs.readFile(pathConst);
        const readJson = JSON.parse(read);

        return readJson;
    } catch(error) {
        console.error(`Erro na leitura do arquivo: ${error.message}`);
    }
}
async function main6F() {
    const pathFamily = './simpsonsFamily.json';

    const simpFamOld = await leitura6F(pathFamily);
    let filtrado;


    if (simpFamOld.find((e) => +e.id === 5)) {
        filtrado = simpFamOld.filter((e) => {
            if (+e.id !== 5 && +e.id !==8 ) {
                return true;
            }
        });
        filtrado.push({ id: '5', name: 'Maggie Simpson' });
    }

    const simpsonsString = JSON.stringify(filtrado)
    
    await fs.writeFile(pathFamily, simpsonsString);
    
    const simpsonsUpdated = await leitura6F(pathFamily);
    console.log(simpsonsUpdated);
}
main6F(); */

function doCheck (n) {
    return new Promise((resolve, reject) => {
        if (typeof n !== "number") {
            return reject(new Error('Informe apenas números'));
        }

        if (n > 50 ) {
            return reject(new Error('Valor muito alto, escreva numero abaixo de 50'));
        };
        if (n <= 2 ) {
            return reject(new Error('Valor muito alto, escreva um numero maior que 2'));
        };

        return resolve(n);
    });
}


async function doMath () {
    try {
        const num = await doCheck(10);

        let a = 1;
        let b = 1;

        for (let n = num; n > 0; n -= 1) {
            if(a) console.log(a);

            let printed = a;
            a = b;
            b += printed;
        }
    } catch(err) {
        console.log(err.message);
    }
}
doMath();

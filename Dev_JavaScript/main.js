
const { gets, print } = require('./funcaoImport.js');

const quantidadeNumeros = gets();

let maiornumero = 0;

for (let i = 0; i < quantidadeNumeros; i++) {
    const sorteado = gets();
    if (sorteado > maiornumero) {
        maiornumero = sorteado;
    }
}

print(maiornumero);
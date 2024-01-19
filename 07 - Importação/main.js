const {gets, print} = require('./funcoes-auxiliares')

const lista = [8, 9, 36, 2, 55, 16, 95];
let res = 0;

for(let i = 1; i < lista.length; i++) {
    if (lista[i] > res) {
        res = lista[i]
    }
}

console.log(`O maior número da lista é ${res}`);
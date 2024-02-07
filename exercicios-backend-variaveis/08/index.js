// Calcular a circunferência de um circulo a partir do raio
function circunferencia(raio) {
    return 2 * Math.PI * raio;
}
let raio = 15;
console.log(circunferencia(raio).toFixed(2));

// ou na verão para o usuário inputar o valor

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Insira o valor do raio: ', (raio) => {
    console.log(circunferencia(raio).toFixed(2));
    readline.close();
});

function circunferencia(raio) {
    return 2 * Math.PI * raio;
}
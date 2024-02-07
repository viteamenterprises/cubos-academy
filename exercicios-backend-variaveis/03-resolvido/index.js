// Porcentagem de desconto utilizando regra de 3!

function Desconto(precoOriginal, precoComDesconto) {

    // Calculo é a diferença do preço original menos o preço com desconto, dividido pelo preço original, vezes *100, onde temos
    // Calculo da diferença
    const diferenca = precoOriginal - precoComDesconto;

    // Calculo da porcentagem de desconto usando a regra de três
    const porcentagemDesconto = (diferenca / precoOriginal) * 100;

    return porcentagemDesconto;
}

// Valores fornecidos do problema
const precoOriginal = 129.99;
let dinheiroDisponivel = 80;

// Calcula o preço com desconto (preço original - dinheiro disponível)
let precoComDesconto = precoOriginal - dinheiroDisponivel;

// Chama a função para calcular a porcentagem de desconto
const porcentagemDesconto = Desconto(precoOriginal, precoComDesconto);
// Exibe o resultado no console
console.log(`Para comprar o tênis, preciso de um desconto de ${porcentagemDesconto.toFixed(2)}%.`);


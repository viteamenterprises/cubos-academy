const valorDaCompra = 1000;
const numeroDeParcelas = 7;

if (numeroDeParcelas === 1) {
    // a vista - com 10% desconto
    const desconto = valorDaCompra * 10 / 100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Você deve pagar ${valorAPagar}, pois à vista tem 10%  de desconto`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    // parcelado sem juros
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas} sem juros de R$${valorDaParcela}`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    // parcelado com juros
    const valorAPagarComJuros = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x de R$${valorDaParcela} totalizando R$${valorAPagarComJuros} devido incidência de juros`)
} else {
    // numero de parcelas inválido
    console.log("Número de parcelas é inválido.")
}

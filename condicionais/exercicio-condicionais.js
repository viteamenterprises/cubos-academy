const valorDaCompra = 100;
const numeroDeParcelas = 3;

if (numeroDeParcelas === 1) {
    // a vista - com 10% desconto
    const desconto = valorDaCompra * 10 / 100
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Você deve pagar ${valorAPagar}, pois à vista tem 10%  de desconto`)
} else {
    // parcelado
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar ${numeroDeParcelas} de R$${valorDaParcela}`);
}
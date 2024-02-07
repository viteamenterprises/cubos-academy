//Calculadora de IMC
{
    let peso = 76;
    let altura = 1.79;

    console.log(`Seu IMC atual é: ${peso / Math.pow(altura, 2)}`);

    peso = 76;
    altura = 1.79;
    imc = peso / (altura ** 2);
    imcFormatado = imc.toFixed(2);
    console.log("Seu IMC atual é:", imcFormatado);
}
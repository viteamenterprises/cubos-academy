// Conversor de Medidas: FAHRENHEIT X CELSIUS
function fahrenheitXCelsius(tempFahrenheit) {
    // Declarar a variável local celsius dentro da função
    let celsius = (tempFahrenheit - 32) * (5 / 9);

    // depois de declarado usa um 'return' do valor em Celsius
    return celsius;
}

// Exemplificando a conversão para a fuction
let tempFahrenheit = 73;
let tempCelsius = fahrenheitXCelsius(tempFahrenheit);
//.toFixed utilizado para retornar x casas decimais do resuiltado
tempCelsiusFormatado = tempCelsius.toFixed(2);
// retornar o resultado no console.log
console.log("A conversão para graus Celsius é: ", tempCelsiusFormatado);
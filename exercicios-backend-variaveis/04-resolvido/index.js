//## Calcular juros compostos ##

// capital (valor inicial de uma dívida, empréstimo ou investimento)
let capitalInicial = 100;
// taxa fixa de juros (expressa em decimal na fórmula, ou seja, o valor da taxa dividido por 100)
let taxaFixaJuros = 12.5;
const juros = (taxaFixaJuros / 100);
// período de tempo
let numeroDeParcelas = 5;
// montante (o capital acrescido dos juros, ou seja, Capital + Juros)
let montante = (capitalInicial * (1 + juros) ** numeroDeParcelas).toFixed(2);

console.log(`O capital de R$${capitalInicial} aplicado durante ${numeroDeParcelas} meses à uma taxa de juros de ${taxaFixaJuros}% resulta um montante final de R$${montante}`);

console.log(juros);
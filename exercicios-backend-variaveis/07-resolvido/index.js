//Infectados COVID-19

// Po = a população incial de pessoas infectadas
let populacao = 1000;
// X = a quantidade de pessoas para as quais um paciente infectado pode transmitir
let infectadosX = 4;
// t = o tempo percorrido (em dias)
let tempo = 100;
let infectadosTotal = (populacao * (infectadosX) ** (1 / 7)).toFixed();

console.log(`O quantidade de indivíduos infectados no período de ${tempo} dias é de ${infectadosTotal} pessoas.`);

const temIngresso = true;
const censura = 16;
const idade = 18;
const estaComPais = true;

// tem ingresso E
// tem idade maior ou igual a sensura ou está com os pais

// quando a vari[avel for Boleana o JS já faz a verifica a comparação e não precisa do ===true
if (temIngresso) {
    if (idade >= censura || estaComPais) {
        console.log("Pode entrar!");
    } else {
        console.log("Barrado!");
    }
} else {
    console.log("Barrado!");
}
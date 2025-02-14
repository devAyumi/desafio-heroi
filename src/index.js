const prompt = require('prompt-sync')();

const nome = prompt("Insira o nome do herói: ");
const xpHeroi = prompt("Insira o nível de experiência do herói: ");
const xp = Number(xpHeroi);

function verificarNivel(xp) {
    let nivel;
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp > 1000 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp > 2000 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp > 5000 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp > 8000 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp > 9000 && xp <= 1000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    return nivel;
}

let nivel = verificarNivel(xp); // passar o valor de xp ao chamar a função

console.log("O herói de nome " + nome + " está no nível " + nivel);
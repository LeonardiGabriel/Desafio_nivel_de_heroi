var nomeHeroi = "Joaozinho das neves"
var xpHeroi = 0;
var nivel;
const max = 10000
const min = 1000
let experienciaDoMonstro = Math.floor(Math.random() * (max - min + 1)) + min;


console.log("Bem vindo " + nomeHeroi)
console.log("Tome cuidado, o caminho é perigoso, deseja prosseguir?")
console.log("Você encontrou um inimigo e irá batalhar com ele! Armas à postos!")
console.log("Inimigo derrotado. Voce ganhou: " + experienciaDoMonstro + " pontos de experiência.")
xpHeroi += experienciaDoMonstro
console.log("Parabens, sua nova experiência é: " + xpHeroi)

while (xpHeroi >= 1000) {
    for (var i = 1; i <= 8; i++) {
        switch (i) {
            case 1:
                if (xpHeroi <= 1000) {
                    nivel = "Ferro";
                    break;
                }
            case 2:
                if (xpHeroi >= 1001 && xpHeroi <= 2000) {
                    nivel = "Bronze";
                    break;
                }
            case 3:
                if (xpHeroi >= 2001 && xpHeroi <= 6000) {
                    nivel = "Prata";
                    break;
                }
            case 4:
                if (xpHeroi >= 6001 && xpHeroi <= 7000) {
                    nivel = "Ouro";
                    break;
                }
            case 5:
                if (xpHeroi >= 7001 && xpHeroi <= 8000) {
                    nivel = "Platina";
                    break;
                }
            case 6:
                if (xpHeroi >= 8001 && xpHeroi <= 9000) {
                    nivel = "Ascendente";
                    break;
                }
            case 7:
                if (xpHeroi >= 9001 && xpHeroi <= 10000) {
                    nivel = "Imortal";
                    break;
                }
            case 8:
                if (xpHeroi >= 10001) {
                    nivel = "Radiante";
                    break;
                }
        }
    }
    break;
}

console.log("O herói " + nomeHeroi + " está no nível " + nivel);

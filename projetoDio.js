let nomeDoHeroi = "orcBold";
let xpDoHeroi = 4500 ;

{

if (xpDoHeroi < 1000) {
    console.log("xp atual = ferro");

} else if (xpDoHeroi => 1000 && xpDoHeroi <= 2000) {
    console.log("xp atual = bronze");

} else if(xpDoHeroi => 2001 && xpDoHeroi <= 5000) {
    console.log("xp atual = prata");

} else if(xpDoHeroi => 5001 && xpDoHeroi <= 7000) {
    console.log("xp atual = ouro");
    
} else if (xpDoHeroi => 7001 && xpDoHeroi <= 8000) {
    console.log("xp atual = platina");

} else if (xpDoHeroi => 8001 && xpDoHeroi <= 9000) {
    console.log("xp atual = diamante");

} else if(xpDoHeroi => 9001 && xpDoHeroi <= 10000) {
    console.log("xp atual = ascendente");

} else(xpDoHeroi > 10000)
    console.log("xp atual = radiante");
}

        console.log(" O herói " + nomeDoHeroi + "está atualmente no nível" + xpDoHeroi + ".")

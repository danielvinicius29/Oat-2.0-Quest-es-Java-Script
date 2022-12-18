const prompt = require("prompt-sync") ();

var numero1 = +prompt("Digite o primeiro numero ");
var numero2 = +prompt("Digite o segundo numero ");

if (numero1 == numero2) {
    console.log("NÚMEROS IGUAIS. TENTE NOVAMENTE");
}
else if (numero1 > numero2){
    console.log("O numero " + numero1 + " é maior que o número " + numero2);
}
else if (numero2 > numero1) {
    console.log("O numero " + numero2 + " é maior que o número " + numero1);
}

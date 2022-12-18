const prompt = require("prompt-sync") ();

var numero = prompt("Digite o numero ");
var verificacao = numero % 2;
if (verificacao == 0) {
    console.log("O numero " + numero + " é Par");
}
else {
    console.log("O numero " + numero + " é Impar");
}

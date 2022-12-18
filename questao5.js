const prompt = require("prompt-sync") ();

var idade = +prompt("Digite a idade do nadador ");

if (idade > 4 && idade < 8) {
    console.log("O nadador é da categoria Infantil A");
}
else if (idade > 7 && idade < 11) {
    console.log("O nadador é da categoria Infantil B");
}
else if (idade > 10 && idade < 14) {
    console.log("O nadador é da categoria Juvenil A");
}
else if (idade > 13 && idade < 18) {
    console.log("O nadador é da categoria Juvenil B");
}
else if (idade > 17) {
    console.log("O nadador é da categoria Senior");
}
else {
    console.log("O nadador ainda não tem idade para nenhuma categoria, ou idade invalida.");
}

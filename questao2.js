const prompt = require("prompt-sync") ();

var nota1 = +prompt("Digite a primeira nota ");
var nota2 = +prompt("Digite a segunda nota ");
var nota3 = +prompt("Digite a terceira nota ");
var media = (nota1 + nota2 + nota3)/3;
if (media >= 60) {
    console.log("O aluno foi aprovado com nota " + media);
}
if (media < 40) {
    console.log("O aluno foi reprovado com nota " + media);
}
if (media < 60 && media > 39)   {
    console.log("O aluno fara VF devido a nota ter sido " + media);
}

/*
5. Faça um programa para a leitura de duas notas parciais de um aluno. O programa
deve calcular a média alcançada por aluno e apresentar:
a. A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
b. A mensagem "Reprovado", se a média for menor do que sete;
c. A mensagem "Aprovado com Distinção", se a média for igual a dez.
*/

let nota_01 = prompt("Digite sua primeira nota: ");
nota_01 = parseFloat(nota_01);

let nota_02 = prompt("Digite sua segunda nota: ");
nota_02 = parseFloat(nota_02);

let media = (nota_01 + nota_02)/2;

if( media < 7 ) {

    alert("Reprovado");

}else if( media > 7 && media < 10 ){

    alert("Aprovado");
}
else if( media == 10 ){

    alert("Aprovado com Distinção");
}
else{

    alert("Dado inválido");
}
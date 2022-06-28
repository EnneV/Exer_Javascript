/*
1. Faça um Programa que peça dois números e imprima o maior deles.
*/

let Number_01 = prompt("Digite um número: ");
Number_01 = parseFloat(Number_01);

let Number_02 = prompt("Digite outro número: ");
Number_02 = parseFloat(Number_02);

if( Number_01 > Number_02 ){

alert('O maior número é: ' + Number_01)

}else{

    alert('O maior número é: ' + Number_02)
}
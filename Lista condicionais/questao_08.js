/*
 Faça um programa que calcule as raízes de uma equação do segundo grau, na
forma ax2 + bx + c. O programa deverá pedir os valores de a, b e c e fazer as
consistências, informando ao usuário nas seguintes situações:

a. Se o usuário informar o valor de A igual a zero, a equação não é do segundo
grau e o programa não deve pedir os demais valores, sendo encerrado;
b. Se o delta calculado for negativo, a equação não possui raízes reais. Informe
ao usuário e encerre o programa;
c. Se o delta calculado for igual a zero a equação possui apenas uma raiz real;
informe ao usuário;
d. Se o delta for positivo, a equação possui duas raiz reais; informe-as ao
usuário;
*/

let a_fixo = prompt("Digite um número para A:");
a_fixo = parseInt(a_fixo);

if(a_fixo == 0){

    alert("Esse equação não é de segundo grau");
   exit;

}

let b_fixo = prompt("Digite um número para B:");
b_fixo = parseInt(b_fixo);

let c_fixo = prompt("Digite um número para C:");
c_fixo = parseInt(c_fixo);

let x_variavel;


let delta = b_fixo ** 2 - 4 * a_fixo * c_fixo;

if(delta < 0 ){

  alert("Essa equação não possui raízes reais");  

} else if (delta == 0){

x_variavel = (-1 * b_fixo) / 2 * a_fixo;
alert (x_variavel);

}
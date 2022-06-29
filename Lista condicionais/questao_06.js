/*
6. As Organizações Tabajara resolveram dar um aumento de salário aos seus
colaboradores e lhe contrataram para desenvolver o programa que calculará os
reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste
segundo o seguinte critério, baseado no salário atual:
a. salários até R$ 280,00 (incluindo) : aumento de 20%
b. salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
c. salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
d. salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser
realizado, informe na tela:
i. o salário antes do reajuste;
ii. o percentual de aumento aplicado;
iii. o valor do aumento;
iv. o novo salário, após o aumento.
*/


let salario = prompt("Qual seu salário atual? ");

salario = parseFloat(salario);

let salario_reajustado;
let valor_reajuste;

if(salario <= 280 ){

   valor_reajuste = salario * 0.2;

   salario_reajustado = salario + valor_reajuste;

    alert("Salario anterior era R$ " + salario.toFixed(2) + "\nSeu salário será aumentando em 20% \nSeu salário será aumentando em R$ " 
    + valor_reajuste.toFixed(2) + "\nSeu novo salário será R$ " + salario_reajustado.toFixed(2) );

} else if(salario > 280 && salario <= 700){

 valor_reajuste = salario * 0.15;
 
 salario_reajustado = salario + valor_reajuste;

 alert("Salario anterior era R$ " + salario.toFixed(2) + "\nSeu salário será aumentando em 15% \nSeu salário será aumentando em R$ " 
 + valor_reajuste.toFixed(2) + "\nSeu novo salário será R$ " + salario_reajustado.toFixed(2) );


} else if(salario > 700 && salario <= 1500){

    valor_reajuste = salario * 0.1;
    
    salario_reajustado = salario + valor_reajuste;
   
    alert("Salario anterior era R$ " + salario.toFixed(2) + "\nSeu salário será aumentando em 10% \nSeu salário será aumentando em R$ " 
    + valor_reajuste.toFixed(2) + "\nSeu novo salário será R$ " + salario_reajustado.toFixed(2) );


} else if(salario > 1500){

    valor_reajuste = salario * 0.05;
    
    salario_reajustado = salario + valor_reajuste;
   
    alert("Salario anterior era R$ " + salario.toFixed(2) + "\nSeu salário será aumentando em 5% \nSeu salário será aumentando em R$ " 
    + valor_reajuste.toFixed(2) + "\nSeu novo salário será R$ " + salario_reajustado.toFixed(2) );
}
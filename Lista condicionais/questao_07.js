
/*
7. Faça um programa para o cálculo de uma folha de pagamento, sabendo que os
descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela
abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto,
mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde
ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor
da sua hora e a quantidade de horas trabalhadas no mês.
Desconto do IR:
a. Salário Bruto até 900 (inclusive) - isento
b. Salário Bruto até 1500 (inclusive) - desconto de 5%
c. Salário Bruto até 2500 (inclusive) - desconto de 10%
d. Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as
informações, dispostas conforme o exemplo abaixo. No exemplo o valor da
hora é 5 e a quantidade de hora é 220.
Exemplo de Saída:
Salário Bruto: (5 * 220) : R$ 1100,00
(-) IR (5%) : R$ 55,00
(-) INSS ( 10%) : R$ 110,00
FGTS (11%) : R$ 121,00
Total de descontos : R$ 165,00
Salário Líquido : R$ 935,00
*/

let valor_hora = prompt("Qual o valor da sua hora? ");
valor_hora = parseFloat(valor_hora);

let hora_trabalhadas = prompt("Quantas horas você trabalhou esse mês? ");
hora_trabalhadas = parseFloat(hora_trabalhadas);

let salario_bruto = valor_hora * hora_trabalhadas;


if(salario_bruto <= 900){

    let INSS = salario_bruto * 0.1;
    let FGTS = salario_bruto * 0.11;
    let salario = salario_bruto - INSS;



    alert("Salario bruto: (" +  valor_hora + " * "+ hora_trabalhadas + ") : R$ " + salario_bruto + "\n(-) IR: Isento\n(-) INSS (10%): R$ "+ INSS.toFixed(2) + 
    "\nFGTS (11%): R$ "+ FGTS.toFixed(2) + "\nTotal de descontos: R$ " + INSS.toFixed(2) + "\nSalário Líquido: R$ " + salario.toFixed(2));

} else if(salario_bruto > 900 && salario_bruto <= 1500){

        let IR = salario_bruto * 0.05;
        let INSS = salario_bruto * 0.1;
        let FGTS = salario_bruto * 0.11;
        let descontos_salario = INSS + IR;
        let salario = salario_bruto - descontos_salario;
    
    
    
        alert("Salario bruto: (" +  valor_hora + " * "+ hora_trabalhadas + ") : R$ " + salario_bruto + "\n(-) IR: R$" +  IR.toFixed(2) 
        + "\n(-) INSS (10%): R$ "+ INSS.toFixed(2) + "\nFGTS (11%): R$ "+ FGTS.toFixed(2) + "\nTotal de descontos: R$ " 
        + descontos_salario.toFixed(2) + "\nSalário Líquido: R$ " + salario.toFixed(2));
    
    }else if(salario_bruto > 1500 && salario_bruto <= 2500){

        let IR = salario_bruto * 0.1;
        let INSS = salario_bruto * 0.1;
        let FGTS = salario_bruto * 0.11;
        let descontos_salario = INSS + IR;
        let salario = salario_bruto - descontos_salario;
    
    
    
        alert("Salario bruto: (" +  valor_hora + " * "+ hora_trabalhadas + ") : R$ " + salario_bruto + "\n(-) IR: R$" +  IR.toFixed(2) 
        + "\n(-) INSS (10%): R$ "+ INSS.toFixed(2) + "\nFGTS (11%): R$ "+ FGTS.toFixed(2) + "\nTotal de descontos: R$ " 
        + descontos_salario.toFixed(2) + "\nSalário Líquido: R$ " + salario.toFixed(2));
    
    } else if(salario_bruto > 2500){

        let IR = salario_bruto * 0.2;
        let INSS = salario_bruto * 0.1;
        let FGTS = salario_bruto * 0.11;
        let descontos_salario = INSS + IR;
        let salario = salario_bruto - descontos_salario;
    
    
    
        alert("Salario bruto: (" +  valor_hora + " * "+ hora_trabalhadas + ") : R$ " + salario_bruto + "\n(-) IR: R$" +  IR.toFixed(2) 
        + "\n(-) INSS (10%): R$ "+ INSS.toFixed(2) + "\nFGTS (11%): R$ "+ FGTS.toFixed(2) + "\nTotal de descontos: R$ " 
        + descontos_salario.toFixed(2) + "\nSalário Líquido: R$ " + salario.toFixed(2));
    
    }
    
    


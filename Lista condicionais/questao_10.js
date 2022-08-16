/**
10. Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao
usuário o valor do saque e depois informar quantas notas de cada valor serão
fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo
é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a
quantidade de notas existentes na máquina.
a. Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas
notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
b. Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas
de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
 * 
 */

let saque = prompt("Digite o valor que será sacado: ");
saque = parseInt(saque);


let centenas;
let ciquentas;
let dezenas;
let cincos;
let unidades;

let sinal_grafico_dezena = "";
let sinal_grafico_unidade= "";
let notas_centenas = "";
let notas_ciquentas = "";
let notas_dezenas = "";
let notas_cincos = "";
let notas_unidades = "";

// tratar dado
if( saque < 0 ){

    alert("Número fora do intervalo aceito");
    
} else{

centenas = saque / 100;
centenas = Math.floor(centenas);

ciquentas = (saque - (centenas * 100)) / 50;
ciquentas = Math.floor(ciquentas);

dezenas = (saque - ((centenas * 100) + (ciquentas * 50))) / 10;
dezenas = Math.floor(dezenas);

cincos = (saque - ((centenas * 100) + (ciquentas * 50) + (dezenas * 10))) / 5;
cincos = Math.floor(cincos);

unidades = (saque - ((centenas * 100) + (ciquentas * 50) + (dezenas * 10) + (cincos * 5)));

if(centenas != 0){

    notas_centenas = " Notas de 100 \n";

    if(ciquentas != 0){

    notas_ciquentas = " Notas de 50 \n";   
    }else{

        ciquentas = "";
    }

    if(dezenas != 0){

    notas_dezenas = " Notas de 10 \n";
    }else{

        dezenas = "";
    }

    if(cincos != 0){

    notas_cincos = " Notas de 5 \n";
    }else{

        cincos = "";
    }

    if(unidades != 0){

     notas_unidades = " Notas de 1";
    }else{

        unidades = "";
    }

}else{

    centenas = "";
    if(ciquentas != 0){

        notas_ciquentas = " Notas de 50 \n";   
        }else{
    
            ciquentas = "";
        }
    
        if(dezenas != 0){
    
        notas_dezenas = " Notas de 10 \n";
        }else{
    
            dezenas = "";
        }
    
        if(cincos != 0){
    
        notas_cincos = " Notas de 5 \n";
        }else{
    
            cincos = "";
        }
    
        if(unidades != 0){
    
         notas_unidades = " Notas de 1";
        }else{
    
            unidades = "";
        }
  

}

alert("Para a quantia de " + saque + " as notas fornecidas serão: " + "\n" + 
centenas + notas_centenas + 
ciquentas + notas_ciquentas + 
dezenas + notas_dezenas + 
cincos + notas_cincos +
unidades + notas_unidades);
}
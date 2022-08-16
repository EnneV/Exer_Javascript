/*
9. Faça um Programa que leia um número inteiro menor que 1000 e imprima a
quantidade de centenas, dezenas e unidades do mesmo. Observando os termos no
plural, a colocação do "e", da vírgula entre outros. Exemplo:
a. 326 = 3 centenas, 2 dezenas e 6 unidades
b. 12 = 1 dezena e 2 unidades.
c. Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21,
11, 1, 7 e 16
*/

// entrada de dado
let numero = prompt("Digite um número positivo menor que 1000 ");
numero = parseInt(numero);

let centenas;
let dezenas;
let unidades;
let sinal_grafico_dezena = "";
let sinal_grafico_unidade= "";
let medida_centenas = "";
let medida_dezenas = "";
let medida_unidades = "";

 // tratar dado
if( numero < 0 || numero > 1000 ){

    alert("Número fora do intervalo aceito");

} else{

centenas = numero / 100;
centenas = Math.floor(centenas);

dezenas = (numero - (centenas * 100)) / 10;
dezenas = Math.floor(dezenas);

unidades = (numero - ((centenas * 100) + (dezenas * 10)));

// condição para "e" e virgula



if(centenas == 0){

    if(dezenas != 0 && unidades != 0){

        sinal_grafico_unidade = " e "
        medida_dezenas = " Dezenas";
        medida_unidades = " Unidades";
    
    } else if (dezenas != 0 && unidades == 0) {
    
        medida_dezenas = " Dezenas";

    } else if(dezenas == 0 && unidades != 0){

        dezenas = "";
        medida_unidades = " Unidades";

    }
        

} else {


medida_centenas = " Centenas";

if(dezenas != 0 && unidades != 0){

    sinal_grafico_dezena = ", ";
    sinal_grafico_unidade = " e "
    medida_dezenas = " Dezenas";
    medida_unidades = " Unidades";

} else if (dezenas != 0 && unidades == 0) {

    
    sinal_grafico_dezena = " e ";
    medida_dezenas = " Dezenas";

} else if (dezenas == 0 && unidades != 0){


sinal_grafico_unidade = " e ";
medida_unidades = " Unidades";

}
    
}

if (centenas == 0){

    centenas = "";
}
if(dezenas == 0){

    dezenas = "";
}
if(unidades == 0){

    unidades ="";
}


alert("O númer " + numero + " tem: \n" + centenas + medida_centenas + sinal_grafico_dezena + dezenas + medida_dezenas + sinal_grafico_unidade + unidades + medida_unidades );

}


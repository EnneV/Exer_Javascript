/**
 * Faça um Programa para uma loja de tintas. 
 * O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
 * Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que
custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
Informe ao usuário as quantidades de tinta a serem compradas e os respectivos
preços em 3 situações:
a. comprar apenas latas de 18 litros;
b. comprar apenas galões de 3,6 litros;
c. misturar latas e galões, de forma que o desperdício de tinta seja menor.
Acrescente 10% de folga e sempre arredonde os valores para cima, isto é,
considere latas cheias.
 */
let area = prompt("Digite a área que você quer pintar?");

area = parseFloat(area);
let total_litro_tinta = (area + ( area * 0.1 )) / 6;
let total_tinta = ( area + (area * 0.1 ) );

const area_lata = 108;
let total_tinta_lata = Math.ceil ( ( area + ( area * 0.1 ) ) / area_lata );
let total_preco_lata = total_tinta_lata * 80;

let area_lata_economia = Math.floor(total_tinta / area_lata);
let total_preco_economia_lata = area_lata_economia * 80;

let area_galao_economia = Math.floor ( ( total_tinta - ( area_lata_economia * 108 ) ) / 21.6 );
let total_preco_economia_galao = area_galao_economia * 25;

const area_galao = 21.6;
let total_tinta_galao = Math.ceil ( ( area + ( area * 0.1 ) ) / area_galao );
let total_preco_galao = total_tinta_galao * 25;

alert("O total de litros de tinta a ser utlizado são: " + total_litro_tinta.toFixed(2) 
+ "\n \n O total de Galões que serão utilizadas é: " + total_tinta_galao.toFixed(0)
+ "\n \n O preço total gasto nos galões é: R$" + total_preco_galao.toFixed(2)
+ "\n \n O total de Latas que serão utilizadas é: " + total_tinta_lata.toFixed(0)
+ "\n \n O preço total gasto nas latas é: R$" + total_preco_lata.toFixed(2) 
+ "\n \n A forma mais economica é utlizar " + area_lata_economia + " latas e " + area_galao_economia +" galões" 
+ "\n \n O valor total desta forma será: R$" + (total_preco_economia_lata + total_preco_economia_galao))

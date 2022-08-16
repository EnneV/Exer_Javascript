let saque = prompt("Digite o valor que será sacado: ");
saque = parseInt(saque);

let centenas;
let dezenas;
let unidades;
let sinal_grafico_dezena = "";
let sinal_grafico_unidade= "";
let medida_centenas = "";
let medida_dezenas = "";
let medida_unidades = "";

// tratar dado
if( saque < 0 ){

    alert("Número fora do intervalo aceito");

}

centenas = saque / 100;
centenas = Math.floor(centenas);

dezenas = (saque - (centenas * 100)) / 10;
dezenas = Math.floor(dezenas);

unidades = (saque - ((centenas * 100) + (dezenas * 10)));

alert(centenas, dezenas, unidades);

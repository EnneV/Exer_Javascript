

/*
3. Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra
escrever: F - Feminino, M - Masculino, Sexo Inválido.
*/

let letra = prompt(" Digite a letra F ou M ");


if( letra == "F" || letra == "f" ){

    alert("F - Feminino");
}

if( letra == "M" || letra == "m" ){

    alert(" M - Masculino ");

} else {

    alert("Sexo Inválido");
}

/*
4. Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
*/


let letra = prompt("Digite uma letra");
letra = letra.toLowerCase();

if( letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {

alert("Essa letra é um vogal");

} if(letra == 'b' || letra == 'c' || letra == 'd' || letra == 'f' || letra == 'g' || 
letra == 'h' || letra == 'j' || letra == 'k' || letra == 'l' || letra == 'm' || letra == 'n' || letra == 'p' 
|| letra == 'q' || letra == 'r' || letra == 's' || letra == 't' || letra == 'v' || letra == 'w' || letra == 'x' 
|| letra == 'y' || letra == 'z') {

    alert("Essa letra é um consoante");
    
} else {

    alert("Caracter inválido");
}

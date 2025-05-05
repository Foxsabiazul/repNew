//OPERADORES °adC(+): suB(-): mulTi(*): diV(/):
//rESTdiV(%): incR(++): decR(--): ExponeN(**): . //

//Bibliotecas Utilizadas: 2 = Nomes(Prompt, Math)
//sqrt = √(raiz quadrada), pow = ** (potencia/exponenciação)
const prompt = require("prompt-sync")();
//console.log("1+1=" + (1+1));//
//val1 = prompt("inf the 1 value: ");
//val2 = prompt("inf the 2 value: ")
//soma= Number(val1) % Number(val2);//
//var val1=3, val2=5, soma;
//console.log("the result is: " +Math.pow(3,5));//
//if(a < b || c > d){
//console.log("verdadeiro");
//}else{  
//console.log("falso");
//}
//var a= 1, b= 2, c= 3, d= 4;// 

var nome;
var nota;

nome = prompt ("Qual Nome?; ")
nota = prompt ("Qual Nota?; ")

if(nota >= 70){
    console.log("O aluno "+nome+" esta aprovado");

}else if(nota < 70 && nota >= 40){
    console.log("O aluno "+nome+" esta de exame");
}else{  
    console.log("O aluno "+nome+" esta reprovado");
}


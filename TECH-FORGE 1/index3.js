const prompt = require  ("prompt-sync")();

//for(var i=0; i<10; i++){
  //  console.log(i+10);
//}

//const qtdNotas=10;
//var notas= [];
//var media= 0;

//for(var i=0; i < qtdNotas; i++){
  //  notas[i] = prompt(" Informe o valor "+(i+1)+": ");
  //  media= Number(media) + Number(notas[i]);
//}

//for(var i=0; i<qtdNotas; i++){
  //console.log("A "+(i+1)+" nota é: "+notas [i]);
//}

//console.log("A media das notas é: "+(media/qtdNotas));

var senha = 568;
var senhaSolic; 

do{
    var senhaSolic= prompt("Qual a senha: ");

}while(senhaSolic === senha){
    console.log("Senha incorreta, digite novamente: ");

}if(senhaSolic = prompt("Qual a senha: ")){

    console.log("Funcionou!");

}else(senhaSolic !== prompt("Qual a senha: "));
{

  console.log("Tente Novamente: ");

  senhaSolic != senha;
  
  senhaSolic = prompt("Mais uma Vez:  ");
}

console.log("Acesso ao Sistema");
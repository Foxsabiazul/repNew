let numbers = [1,2,3,4,5,6,7,8];
let names = ["foxsa", "jeni", "zenith", "afton", "skyler", "wilton", "briano", "jesse", "kauan"];
let Função = 0;
function getNumberWithNames(){

    if (Função >= 8 && Função < numbers.lenght && Função < names.lenght){
        return `${numbers[Função]} - ${names[Função]}`;
        
    }else{
        return "Indice esta invalido"
    }
}

console.log(getNumberWithNames("foxsa has been entered the chat")(0)); // 1 - foxsa
console.log(getNumberWithNames("jeni has been entered the chat")(1)); // 2 - jeni
console.log(getNumbersWithNames("star has been entered the chat")(7)); // 8 - jesse 



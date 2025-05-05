let cont, res, n, x;

cont = 1;
res = 0;
n = 4;
x = 2;

while (cont <= n) {
    res = res * x;
    cont = cont + 1;
    console.log(`Resultado parcial:  ${res}`);
}
    
    console.log('valor final: ' + res);
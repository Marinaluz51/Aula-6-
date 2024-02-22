// 4. Faça um programa que mostre todos os números primos de 0 a 100.
// Um número primo é aquele que é dividido apenas por um e por ele mesmo. Entre 0 e 100 existem apenas 25 números primos.
var n = 0;

while(n <= 100){

    var isPrime = true;

    if (n > 1) {
        var i = 2;

        while (i < n) {
            if (n % i === 0) {
             
                isPrime = false;
                break; 
            }
            i++;
        }

        
        if (isPrime) {
            console.log(n);
        }
    }

    n++;
}

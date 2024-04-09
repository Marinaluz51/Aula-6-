/* 
    7. Escreva um programa que recebe um número inteiro e mostre os números pares e ímpares (separados), de 1 até esse inteiro.
    Para saber se um dado numero é par ou ímpar a melhor maneira é usando o operador modulus/resto, % . Que retorna o resto da divisão de dois numeros.
    Se n % 2 der resto zero, o numero é par, e impar caso contrário.
*/

var n = parseInt(prompt("Digite um número inteiro:"), 10);

console.log("Números pares de 1 até " + n + ":");
for (var i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i); 
    }
}

console.log("Números ímpares de 1 até " + n + ":");
for (var i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

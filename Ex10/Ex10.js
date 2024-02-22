// 10. Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado daquele tamanho com asteriscos.

var inteiro = prompt('Digite um número inteiro:');

var result = '';
for(var i=1; i<=inteiro; i++) {
    for(var j=1; j<=i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);
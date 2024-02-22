// 8. Faça um programa que receba 5 idades, calcule e mostre a média das idades digitadas.

var age = prompt("Digite 5 idades separadas por vírgula");
var numbers = age.split(",");
console.log('ages', numbers);

var totalage = 0;
var i = 0;
while (i<numbers.length) {
    
    totalage += parseInt(numbers[i],10);
    i++;
}

var media = totalage / numbers.length;
console.log('Média', media);

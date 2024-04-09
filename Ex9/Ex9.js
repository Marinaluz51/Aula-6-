// 9. Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

var age = prompt("Digite 10 idades separadas por vírgula");
var numbers = age.split(",");
console.log('ages', numbers);

var totalAge = 0;
var i = 0;
var countOver18 = 0;
while (i<numbers.length) {
    
    currentAge = parseInt(numbers[i],10);
    totalAge += currentAge;
   
    if (currentAge >= 18){
        countOver18++;
    }
    i++;
}

alert(`Quantidade de pessoas com idade maior ou igual a 18 anos: ${countOver18}`);

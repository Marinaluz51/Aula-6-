// 6. Faça um programa que recebe um número inteiro e mostre a tabuada desse número.

var n = parseInt(prompt("Digite um número inteiro:"), 10);


    console.log(`Multiplication Table for ${n}:`);

    for (let j = 1; j <= 10; j++) { 
        console.log(`${n} * ${j} = ${n * j}`); 
    }
    console.log('-------------------'); 

const prompt = require ('prompt-sync')();
const showImc = require ('./imc');

   let peso = 0;
   let altura = 0;

        peso = Number (prompt ('Digite seu peso: '))
        altura = Number (prompt ('Digite sua altura: '))
        console.log(`Seu imc é: ${showImc(peso, altura)}`)
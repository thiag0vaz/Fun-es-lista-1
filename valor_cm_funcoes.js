//Leia um valor em m, calcule e escreva o equivalente em cm.

import { question } from "readline-sync";

function main(){ 

    //Entrada 
    const metros = Number(question('Valor em metros: '))

    //Processamento 
    const cm = calcular_centimetros(metros)

    //Saída 
    console.log(`${metros} metros é igual a ${cm} centímetros`)
}
main()

function calcular_centimetros(valor_metros){
    const centimetro = valor_metros * 100
    return centimetro
}
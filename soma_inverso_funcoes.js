/*Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767)*/

import { question } from "readline-sync"

function main(){

    //Entrada 
    const numero = Number(question('Valor do número inteiro de 3 dígitps: '))

    //Processamento 
    const centenas = calcular_centena(numero)
    const resto = numero % 100
    const dezenas = calcular_dezena(resto)
    const unidades = calcular_unidade(resto)
    const inverso = inversao_numero(unidades, dezenas, centenas)
    const soma = numero + inverso 

    //Saída 
    console.log(`Número ${numero}`)
    console.log(`Inverso ${inverso}`)
    console.log(`O número somando com seu inverso resulta em ${soma}`)
}

main()

function calcular_centena(numero){
    const centena = Math.floor(numero / 100)
    return centena 
}

function calcular_dezena(valor){
    const dezena = Math.floor(valor / 10)
    return dezena
}

function calcular_unidade(valor){
    const unidade = valor % 10
    return unidade
}

function inversao_numero(valor1, valor2, valor3){
    const inversao = valor1 * 100 + valor2 * 10 + valor3
    return inversao
}
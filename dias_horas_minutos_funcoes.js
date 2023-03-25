/*Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
corresponde.*/

import { question } from "readline-sync";

function main(){
    
    //Entrada 
    const minutos = Number(question('valor em minutos: '))

    //Processamento
    const dias = calcular_dias(minutos)
    const horas = calcular_horas(minutos)
    const minutos_restante = calcular_minutos(minutos)

    //Saída 
    console.log(`${minutos} minutos é o mesmo que ${dias} dias ${horas} horas ${minutos_restante} minutos`)
}

main()

function calcular_dias(valor){
    const calc_dias = Math.floor(valor / 1440)
    return calc_dias
}

function calcular_horas(valor){
    const calc_minutos = Math.floor((valor % 1440) / 60)
    return calc_minutos
}

function calcular_minutos(valor){
    const calc_minutos_restantes = valor % 60
    return calc_minutos_restantes
}

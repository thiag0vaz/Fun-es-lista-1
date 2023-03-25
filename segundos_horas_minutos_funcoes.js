/*Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
segundos ele corresponde.*/

import { question } from 'readline-sync'

function main(){
    //Entrada 
    const segundos = Number(question('valor em segundos: '))

    //Processamento 
    const horas = calcular_horas(segundos)
    const segundos_restantes_da_hora = calcular_segundos_restantes(segundos)
    const minutos = calcular_minutos(segundos_restantes_da_hora)
    const segundos_finais = calcular_segundos_finais(segundos_restantes_da_hora)

    //Saída 
    console.log(`${segundos} segundos é o mesmo que ${horas} horas ${minutos} minutos e ${segundos_finais} segundos`)
}
main()

function calcular_horas(segundos){
    const h = Math.floor (segundos / 3600)
    return h
}

function calcular_segundos_restantes(segundos){
    const segundos_restantes = segundos % 3600
    return segundos_restantes
}

function calcular_minutos(segundos_rest){
    const min = Math.floor (segundos_rest / 60)
    return min
}

function calcular_segundos_finais(segundos){
    const segundos_end = segundos % 60
    return segundos_end
}
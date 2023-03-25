//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

import {question} from "readline-sync"

function main(){
    //Entrada 
    const minutos_entrada = Number(question('Digite um valor (minutos): '))

    //Processamento 
    const horas = somente_hora(minutos_entrada)
    const minutos_saida = somente_minutos(minutos_entrada, horas)

    //Saída
    console.log(minutos_entrada, 'minutos equivalem a', horas, 'horas e ', minutos_saida, 'minutos')
}

function somente_hora(minutos_entrada){
    const horas = Math.floor(minutos_entrada / 60)
    return horas
}

function somente_minutos(minutos_entrada, horas){
    const minutos_restantes = Math.floor(((minutos_entrada / 60) - horas) * 60)
    return minutos_restantes
}
main()

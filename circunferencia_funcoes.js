//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

import { question } from "readline-sync"

function main(){
     
    //Entrada 
    const raio = Number(question('Valor do raio (cm): '))
    const pi = 3.14
    //Processamento 
    const comprimento = calcular_comprimento(raio, pi)
    

    //Saída 
    console.log(`O comprimento da circunferência é aproximadamente ${comprimento} cm`)
}
main()

function calcular_comprimento(raio, pi){
    const calculo = Math.floor(2 * raio * pi)
    return calculo
}
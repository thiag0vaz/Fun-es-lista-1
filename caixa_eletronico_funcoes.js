/*45. Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima.*/

import { question } from "readline-sync"

function main(){
    //Entrada 
    const saque = Number(question('valor do saque: '))

    //Processamento 
    const notas50 = calcular_notas_50(saque)
    const notas10 = calcular_notas_10(saque)
    const notas5 = calcular_notas_5(saque)
    const notas1 = calcular_notas_1(saque)

    //Saída
    console.log(`seu saque será dividido em ${notas50} notas de 50, ${notas10} notas de 10, ${notas5} notas de 5 e ${notas1} notas de 1`)
}
main()

function calcular_notas_50(saque){
    const cinquenta = Math.floor(saque / 50)
    return cinquenta
}

function calcular_notas_10(saque){
    const dez = Math.floor((saque % 50) / 10)
    return dez
}

function calcular_notas_5(saque){
    const cinco = Math.floor((saque % 10) / 5)
    return cinco 
}

function calcular_notas_1(saque){
    const um = saque % 5
    return um

}

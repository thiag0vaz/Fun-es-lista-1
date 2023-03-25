/*6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)*/

import {question} from "readline-sync"

function main(){

    //Entrada
    const velocidade_entrada = Number(question('Valor em (km/h): '))

    //Processamento
    const velocidade_saida = velocidade_em_ms(velocidade_entrada)

    //Saída 
    console.log(velocidade_entrada, 'Km/h é equivalente a', velocidade_saida, 'm/s')

}

function velocidade_em_ms(velocidade_entrada){
    const ms = velocidade_entrada / 3.6
    return ms 
}
main()
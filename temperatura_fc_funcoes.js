//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9)

import { question } from 'readline-sync'

function main(){
    //Entrada 
    const temp_F = Number(question('valor em fahrenheit: '))
    
    //Processamneto 
    const temp_C = calcular_temperatura(temp_F)

    //Saída 
    console.log(`${temp_F} °F é equivalente a aproximadamente ${temp_C.toFixed(2)} °C`)
}
main()

function calcular_temperatura(temperatura_em_fahrenheit){
    const transformacao = ((5 * temperatura_em_fahrenheit) - 160) / 9
    return transformacao
}
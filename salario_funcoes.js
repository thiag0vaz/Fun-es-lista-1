//12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

import {question} from "readline-sync"

function main(){

    //Entrada 
    const salario = Number(question('Valor do salário: '))
    const percentual_de_aumento = Number(question('Percentual de aumento (%): ')) //Possibilita a generalização do percentual
   
    //Processamento 
    const percentual = percentual_do_aumento(percentual_de_aumento)
    const aumento_salario = aumento_salarial(salario, percentual)
    const salario_final = salario_aumentado(salario, aumento_salario)
    //Saída 
    console.log('Salário atual: ', salario, 'R$')
    console.log('Aumento de: ', aumento_salario, 'R$')
    console.log('Salário final: ', salario_final, 'R$')


}

function percentual_do_aumento(percentual_de_aumento){
    const percent = percentual_de_aumento / 100
    return percent
}

function aumento_salarial(salario, percentual){
    const aumento = salario * percentual
    return aumento
}

function salario_aumentado(salario, aumento_salario){
    const final = salario + aumento_salario
    return final 
}
main()

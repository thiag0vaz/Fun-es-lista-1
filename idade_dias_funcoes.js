/*Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.*/

import { question } from "readline-sync"

function main(){
    
    //Entrada 
    const idade_anos = Number(question('valor da idade em anos: '))
    const idade_meses = Number(question('valor da idade em meses: '))
    const idade_dias = Number(question('valor da idade em dias: '))
    
    //Processamento 
    const anos = calcular_anos_para_dias(idade_anos)
    const meses = calcular_meses_para_dias(idade_meses)
    const soma = anos + meses + idade_dias
    
    //Saída 
    console.log('A pessoa que tem:')
    console.log(idade_anos, 'anos;')
    console.log(idade_meses, 'meses;')
    console.log(idade_dias, 'dias;')
    console.log(`Possui ${soma} dias de vida`)
}
main()

function calcular_anos_para_dias(valor){
    const anos_dias = valor * 365
    return anos_dias
}

function calcular_meses_para_dias(valor){
    const meses_dias = valor * 30 
    return meses_dias
}
//15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

import {question} from "readline-sync"

function main(){

    //Entrada 
    const base = Number(question('Valor da base (cm): ')) 
    const altura = Number(question('Valor da altura (cm): ')) 

    //Processamento 
    const area = area_do_triangulo(base, altura)

    //Saída 
    console.log(`A área do triangulo é ${area} cm²`)
}

main()
function area_do_triangulo(qualquer_base, qualquer_altura){
    const calcular_area = (qualquer_base * qualquer_altura) / 2
    return calcular_area
}

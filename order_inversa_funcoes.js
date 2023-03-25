//9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).

import {question} from "readline-sync"

function main(){

    //Entrada 
    const numero1 = Number(question('Número 1: '))
    const numero2 = Number(question('Número 2: '))

    //Processamento 
    const inverso1 = numero2
    const inverso2 = numero1
    //Saída 
    console.log('Ordem original', numero1,',', numero2)
    console.log('Ordem invertida', inverso1,',', inverso2)

}

main()
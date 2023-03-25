//Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: (D = R + S / 2) onde R = (a+b)² e S = (b+c)²

import {question} from "readline-sync"

function main(){
    //Entrada 
    const a = Number(question('valor de a: '))
    const b = Number(question('valor de b: '))
    const c = Number(question('valor de c: '))

    //Processamento 
    const r = calcular_R(a, b)
    const s = calcular_S(b, c)
    const d = calcular_D(r, s)

    //Saída 
    console.log(`D = ${d}`)
}
main()

function calcular_R(valor_a, valor_b){
    const resultado_r = (valor_a + valor_b) ** 2
    return resultado_r
}

function calcular_S(valo_b, valor_c){
    const resultado_s = (valo_b + valor_c) ** 2
    return resultado_s
}

function calcular_D(valor_r, valor_s){
    const resultado_d = (valor_r + valor_s) / 2
    return resultado_d
}
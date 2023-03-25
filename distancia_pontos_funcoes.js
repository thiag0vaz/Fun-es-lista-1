/*Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.*/

import { question } from "readline-sync"

function main(){
    //Entrada 
    const x1 = Number(question('valor de x1: '))
    const x2 = Number(question('valor de x2: '))
    const y1 = Number(question('valor de y1: '))
    const y2 = Number(question('valor de y2: '))

    //Processamento 
    const quadrado1 = calcular_quadrado1(x2, x1)
    const quadrado2 = calcular_quadrado2(y2, y1)
    const raiz = calcular_raiz(quadrado1, quadrado2)

    //Saída 
    console.log(`A distência entre os pontos é aproximadamente ${raiz.toFixed(2)}`)
}
main()

function calcular_quadrado1(valor_x2, valor_x1){
    const calculo = (valor_x2 - valor_x1) ** 2
    return calculo
}

function calcular_quadrado2(valor_y2, valor_y1){
    const calculo2 = (valor_y2 - valor_y1) ** 2
    return calculo2
}

function calcular_raiz(quadrado1, quadrado2){
    const resultado_raiz = Math.sqrt(quadrado1 + quadrado2)
    return resultado_raiz
}
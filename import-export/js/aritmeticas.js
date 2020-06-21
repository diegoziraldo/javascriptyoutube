'use strict'

function sumar (a,b){
    return a + b
}

function restar (a, b){
    return a - b
}

//Aqui estamos creando un objeto que tiene dos funciones adentro,
//y la vamos a exportar
export const aritmetica = {
    sumar,
    restar
}

//aqui estamos exportando una funcion con la propiedad 'default',
//esta propiedad nos permite exporta una funcion, un objeto, una clase etc,
//de manera 
export default function saludar() {
    console.log('Hola como estas')
}


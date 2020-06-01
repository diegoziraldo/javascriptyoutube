'use strict'

//PARAMETROS REST

//Aqui estamos creando una funcion donde tendremos dos parametros, y un paramtro REST,
//este parametro rest, va a recibir infinitas variables
function sumar(a,b, ...c){
    let resultado = a+b;
    //Este parametro REST, me va a guardar todos los valores, dentro de un array,
    //entonces para ver estos elementos del array lo voy a hacer mediante un bucle 'forEach'
    c.forEach(function(n){
        resultado = resultado + n
    })
    return resultado;
}

console.log(sumar(1,2,2,25))
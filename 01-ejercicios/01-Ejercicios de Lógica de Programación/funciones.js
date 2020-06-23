



//4) Programa una función que repita un texto X veces, 
//pe.miFuncion('Hola Mundo', 3), 
//devolverá Hola Mundo Hola Mundo Hola Mundo.



'use strict'
//1) Programa una función que cuente el número de caracteres,
//de una cadena de texto, pe.miFuncion("Hola Mundo") devolverá 10.

//Con el metodo 'length()', vamos a obtener la cantidad de elementos,
//que tiene una cadena de texto, o la cantidad de elementos de un array,
//o la cantidad de objetos que tenga una clase

//Contando caracteres
function primerEjercicio(texto){
    texto = texto.length;
    return `La cantidad de caracteres que tiene el texto son: ${texto}`;
}
console.log(primerEjercicio('Hola Mundo'))

//Contando elementos de un array
function primerEjercicio2(texto) {
    texto = texto.length;
    return `La cantidad de elementos de la cadena son: ${texto}`;
}
console.log(primerEjercicio2([2, 4, 5, 2, 4]))

//Contando objetos
let miObjeto = {
    nombre : 'Diego',
    apellido : 'Ziraldo',
    edad : 35,
    sexo : 'Masculino',
    
    function(){
        console.log('Esta es mi funcion')
    }
}

let objetos = Object.values(miObjeto)

console.log(objetos);
console.log(`La cantidad de objetos son: ${objetos.length}`);
console.log(miObjeto);

    

//2) Programa una función que te devuelva el texto recortado,
//según el número de caracteres indicados, 
//pe.miFuncion("Hola Mundo", 4) devolverá "Hola".

//Con el metodo 'slice()', 
//vamos a obtener los caracteres de una cadena de texto,
//dependiendo de los valores que pongamos en el parametro


//Contando caracteres de un String
function segundoEjercicio(texto) {
    return texto.slice(0,5);
}
let text = segundoEjercicio('Hello World')
console.log(text)


//Contando elementos del array
function segundoEjercicio2(texto){
    return texto.slice(0);
}
let text2 = segundoEjercicio2(['Queen','Metallica','Nirvana', 'Kiss', 'Pink Floyd'])
console.log(text2)


//Contando objetos
let miObjeto2 = {
    nombre: 'Diego',
    apellido: 'Ziraldo',
    edad: 35,
    sexo: 'Masculino',

    function () {
        console.log('Esta es mi funcion')
    }
}

let cant = Object.values(miObjeto2)
console.log(cant.slice(1,3))


//3) Programa una función que dada una String te devuelva un Array,
//de textos separados por cierto caracter, 
//pe.miFuncion('hola que tal', ' ') devolverá['hola', 'que', 'tal'].

function tercerEjercicio(texto){
    return texto.split(' ');
}

let resultado = tercerEjercicio('hola que tal')
console.log(resultado)
console.log(resultado.length);


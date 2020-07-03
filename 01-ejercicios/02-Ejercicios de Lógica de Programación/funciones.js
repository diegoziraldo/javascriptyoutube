'use strict'


//5) Programa una función que invierta las palabras de una cadena de texto,
//pe.miFuncion("Hola Mundo") devolverá "odnuM aloH".

//Aqui estamos crando la funcion que dara vuelta la frase que pondremos
function reversa(text = ""){
    //Aqui estamos validando si se ingresa o no un texto
    if (!text) return console.warn('No se ingreso ningun texto');
    
    if (!text) return console.warn('Debe ingresar el texto con comillas');

    if (isNaN(!text)) return console.warn('Solamente se pueden poner palabras');
    
    //Una ves que se cargo el texto en el parametro de la funcion,
    //
    else return console.log(text.split("").reverse().join("")); 
}
    reversa(a);












//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo(que se lee igual en un sentido que en otro), pe.mifuncion("Salas") devolverá true.
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.



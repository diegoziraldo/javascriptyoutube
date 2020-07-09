'use strict'
//https://www.youtube.com/watch?v=-JmapiNx7Jc

//5) Programa una función que invierta las palabras de una cadena de texto,
//pe.miFuncion("Hola Mundo") devolverá "odnuM aloH".

//Aqui estamos crando la funcion que dara vuelta la frase que pondremos
function reversa(text = ""){
    //Aqui estamos validando si se ingresa o no un texto
    if (!text) return console.warn('No se ingreso ningun texto');
    
    //Aqui estamos validando que el valor ingresado sea solamente letras
    if (isNaN(!text)) return console.warn('Solamente se pueden poner palabras');
    
    //Una ves que se cargo el texto en el parametro de la funcion,
    //se le pasara el metodo 'split()', lo que haces este metodo, 
    //es darnos un 'array' con todos los valores separados,
    //segun el valor que le hayamos puesto en el parametro del metodo.

    //Luego le pasaremos el metodo 'reverse()', este metodo lo que hace,
    //es darnos vuelta el orden de los elementos del array, 
    //si ingresamos tres datos, entonces el primer dato sera el ultimo,
    //y el ultimo dato sera el primero.
    
    //Y por ultimo le pasaremos el metodo join(),
    //este metodo va a hacer lo mismo que split pero al reves,
    //a una cadena de elementos la convertira en un 'String',
    //segun el valor que le hayamos puesto en el parametro del metodo. 
    else return console.log(text.split("").reverse().join(""));
}
    //Aqui estamos ejecutando la funcion que creamos anteriormente,
    //y como parametros le estamos pasando el texto a dar vuelta.
    reversa("Para bailar la bamba para bailar la bamba se necesita un poquito de gracia poquito de gracia y una cosita y arriba y arriba y arriba y arriba arriba ire por ti sere por ti sere bamba bamba ");





/* --------------------------------------------------------------------------- */





//6) Programa una función para contar el número de veces 
//que se repite una palabra en un texto largo, 
//pe.miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function palabraRepetida(texto = "", palabra = ""){
    
    let repetidas=0;
    let palabrasNoRepetidas;
    let palabras = texto.split(" ")
    
    if (!isNaN(palabra)) return console.warn('No se pueden ingresar numeros');
    if (!isNaN(texto)) return console.warn('No se pueden ingresar numeros');
    if (texto === undefined) return console.warn('No se ingreso ningun texto');
    if (palabra === undefined) return console.warn('No se ingreso ningun texto');
    
    for(let i=0;i<=palabras.length;i++){
        if(palabras[i] === palabra){
            repetidas++;
    }
}

console.log(`Las palabras repetidas a la palabra "${palabra}" son: ${repetidas}`)
}


palabraRepetida("Para bailar la bamba para bailar la bamba se necesita un poquito de gracia poquito de gracia y una cosita y arriba y arriba y arriba y arriba arriba ire por ti sere por ti sere bamba bamba", "bamba")




/* ----------------------------------------------------------------------------- */




//7) Programa una función que valide si una palabra o frase dada, 
//es un palíndromo(que se lee igual en un sentido que en otro), 
//pe.mifuncion("Salas") devolverá true.

function palindromo(texto = ""){
    if (!isNaN(texto)) return console.warn('Solo ingresar texto!');
    
    let letrasTexto = texto.toLowerCase();
    let letrasTextoReves = texto.split("").reverse().join("").toLowerCase();
    
        if(letrasTexto === letrasTextoReves){
            console.log(true)
        }
        else{
            console.log(false)
        }

}
palindromo('Salas')





/* ------------------------------------------------------------------------------------ */







//8) Programa una función que elimine cierto patrón de caracteres 
//de un texto dado, pe.miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
//devolverá "1, 2, 3, 4 y 5

function patron(texto, buscar){
    let textoIndex = texto.indexOf("Hola");
    //let array = [];

/*     for (let i = 0; i < texto.length; i++) {
        if (!isNaN(texto[i])) {
            //console.log('si')
            console.log(texto[i]);
        }
        else{
            console.log('no')
        }
    } */




    console.log(textoIndex);
}

console.log(patron('Hola1, Hola2, Hola3', 'Hola2'));
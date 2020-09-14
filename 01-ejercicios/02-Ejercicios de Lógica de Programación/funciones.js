'use strict'
//https://www.youtube.com/watch?v=-JmapiNx7Jc

//5) Programa una función que invierta las palabras de una cadena de texto,
//pe.miFuncion("Hola Mundo") devolverá "odnuM aloH".

//Aqui estamos crando la funcion que dara vuelta la frase que pondremos
function reversa(text = "") {
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

//Resuelto Clase
const invertirCadena = (cadena = "") => {
    (!cadena) ?
    console.warn('No ingresaste ningun texto'): console.log(cadena.split("").reverse().join(""));

}
invertirCadena('Hola');






/* --------------------------------------------------------------------------- */





//6) Programa una función para contar el número de veces 
//que se repite una palabra en un texto largo, 
//pe.miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function palabraRepetida(texto = "", palabra = "") {

    let repetidas = 0;
    let palabrasNoRepetidas;
    let palabras = texto.split(" ")
    if (!texto) return console.warn('No ingresaste texto en el parametro del texto');
    if (!palabra) return console.warn('No ingresaste texto en el parametro de la palabra');
    if (!isNaN(texto)) return console.warn('No se pueden ingresar numeros');
    if (!isNaN(palabra)) return console.warn('No se pueden ingresar numeros');

    for (let i = 0; i <= palabras.length; i++) {
        if (palabras[i] === palabra) {
            repetidas++;
        }
    }

    console.log(`Las palabras repetidas a la palabra "${palabra}" son: ${repetidas}`)
}
palabraRepetida("Para bailar la bamba para bailar la bamba se necesita un poquito de gracia poquito de gracia y una cosita y arriba y arriba y arriba y arriba arriba ire por ti sere por ti sere bamba bamba", "bamba")

//Resuelto clase

const textoEnCadena = (cadena = "", texto = "") => {
    if (!texto) return console.warn('No ingresaste texto en el parametro del texto');
    if (!cadena) return console.warn('No ingresaste texto en el parametro de la palabra');
    if (!isNaN(texto)) return console.warn('No se pueden ingresar numeros');
    if (!isNaN(cadena)) return console.warn('No se pueden ingresar numeros');

    let i = 0;
    let contador = 0;

    //Aqui estamos creando un bucle 'while', 
    while (i !== -1) {
        //Dentro del bucle vamos a igualar el valor de la variable i,
        //con lo que nos devolvera el método 'indexOf()',
        //Este metodo lo que hace es devolvernos la posicion,
        //de la palabra que buscaremos en la cadena de texto.
        i = cadena.indexOf(texto, i);
        //Una ves que nos devuelve el numero de la posicion, 
        //vamos a validar que este no sea igual a -1,
        //si no es igual a -1 entonces entrara dentro del condicional
        if (i !== -1) {
            //Dentro del condicional a la variable 'i' y la variable,
            //'contador', le sumaremos uno, entonces la variable 'i',
            //va a valer el el numero de la posicion del string + 1,
            //y la variable contador va a pasar de 0 a 1, que son
            //las igualdades que hay en el texto 
            i++;
            contador++
        }
    }
    //Aqui vamos a mostrar por consola el resultado de la funcion
    console.info(`La palabra ${texto}, se repite ${contador} `)
}

textoEnCadena('Hola mundo adios Mundo', 'mundo');





/* ----------------------------------------------------------------------------- */





//7) Programa una función que valide si una palabra o frase dada, 
//es un palíndromo(que se lee igual en un sentido que en otro), 
//pe.mifuncion("Salas") devolverá true.

function palindromo(texto = "") {
    if (!texto) return console.warn('No se ingreso ningun texto');
    if (!isNaN(texto)) return console.warn('No se puede ingresar numeros');

    //Con el metodo "toLowerCase()", convertiremos todos los caracteres que nos llegan en minusculas
    let letrasTexto = texto.toLowerCase();
    //Cuando tenemos todo el texto igualdados en minusculas,
    //vamos a separar cada caracter en un elemento del array, lo vamos a dar vuelta,
    //lo vamos vamos a volver a juntar y lo vamos a igualar en minusculas
    let letrasTextoReves = texto.split("").reverse().join("").toLowerCase();

    //Una ves que tenemos en una variable texto al reves y en otra variable,
    //el texto al derecho, la vamos a comparar entre si. 
    if (letrasTexto === letrasTextoReves) {
        console.log(true)
    } else {
        console.log(false)
    }

}
palindromo('jaj')

//Resolucion Video

function palindromo(texto = "") {
    if (!texto) return console.warn('No se ingreso ningun texto');
    if (!isNaN(texto)) return console.warn('No se puede ingresar numeros');

    texto = texto.toLowerCase();
    let letrasTextoReves = texto.split("").reverse().join("");

    return (texto === letrasTextoReves) ?
        console.log(true) :
        console.log(false)

}
palindromo('jojO')





/* ------------------------------------------------------------------------------------ */







//8) Programa una función que elimine cierto patrón de caracteres 
//de un texto dado, pe.miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
//devolverá "1, 2, 3, 4 y 5

function patron(texto, buscar) {
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


    //Resolucion Video

    //Aca estamos creando la funcion donde vamos a recibir dos valores por parametros
    const eliminarCaracteres = (texto = "", patron = "") => {
        //Aca estamos evaluando si en el parametro texto hay algun valor
        (!texto) ?
        console.warn('No ingresaste ningun texto')
            //Aca estamos evaluando si en el parametro patron hay algun valor
            : (!patron) ?
            console.warn('No ingresaste ningun patron de caracteres')
            //Aca estamos creando una expresion regular, lo que hacen las expreciones regulares es
            //buscar un patron en las cadenas de texto.
            //este valor del patron se lo pasaremos en el primer parametro, en el segundo iran las banderas,
            //que es lo que le va a dar la forma de la busqueda, y en el segundo parametro de la funcion,
            //ira el valor que le pondra el metodo "replace()" cuando se encuentre una coincidencia.
            :
            console.info(texto.replace(new RegExp(patron, 'ig'), ""))

    }

    eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")

}

console.log(patron('Hola1, Hola2, Hola3', 'Hola2'));
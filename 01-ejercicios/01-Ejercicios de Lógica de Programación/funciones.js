'use strict'
//1) Programa una función que cuente el número de caracteres,
//de una cadena de texto, pe.miFuncion("Hola Mundo") devolverá 10.

//Con el metodo 'length()', vamos a obtener la cantidad de elementos,
//que tiene una cadena de texto, o la cantidad de elementos de un array,
//o la cantidad de objetos que tenga una clase

//Contando caracteres
console.log('1)Programa una función que cuente el número de caracteres, de una cadena de texto, pe.miFuncion("Hola Mundo") devolverá 10.')

function primerEjercicio(texto) {
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
    nombre: 'Diego',
    apellido: 'Ziraldo',
    edad: 35,
    sexo: 'Masculino',

    function () {
        console.log('Esta es mi funcion')
    }
}

let objetos = Object.values(miObjeto)

console.log(objetos);
console.log(`La cantidad de objetos son: ${objetos.length}`);
console.log(miObjeto);


//1)Ejercicio resuelto
console.log('Resolucion del ejercicio 1');
//Aqui vamos a crear una funcion que recibira como parametros,
//una cadena de texto, que la predefinimos vacia "(texto = "")"
/* function contarCaracteres(texto = ""){
    //Aqui estamos creando el condicional,
    //que le pondremos el signo exclamacion, 
    //el cual nos devolvera un valor booleano, este valor booleano,
    //sera lo contrario a lo que seria realmente,
    //si la cadena de texto tiene un texto, el booleando seria true,
    //pero como esta el signo de exclamacion, entonces devuelve false 
    if(!texto){
        console.warn('No se ingreso ningun texto')
    //Aqui estamos cargando el console.info con un texto literal,
    //el cual nos informara sobre el texto ingresado. 
    }else{
        console.info(`El texto ingresado es ${texto}, y la cadena tiene ${texto.length} caracteres`)
    }
} 
//Aqui estamos llamando a la funcion y pasandole por parametros, 
//un texto, al ingresar un texto el parametro se completa, 
//y no nos tirara el mensaje de alerta. 
contarCaracteres('Hola Mundo') */

//1)Ejercicio resuelto "Con arrow function"
console.log('Resolucion del ejercicio 1, con arrow function')

//Aqui estamos creando una funcion flecha, 
//la que guardaremos en una constante.
const contarCaracteres = (texto = "") =>
    //Aqui estamos aplicando los operadores "ternarios", 
    //el cual nos simplifica muchisimo las lineas de codigo
    (!texto) ? console.warn('No se ingreso ningun texto') :
    console.info(`El texto ingresado es ${texto}, y la cadena tiene ${texto.length} caracteres`)

//Aqui estamos llamando a la funcion y cargandole el parametro
contarCaracteres()





/* ---------------------------------------------------------------------- */





//2) Programa una función que te devuelva el texto recortado,
//según el número de caracteres indicados, 
//pe.miFuncion("Hola Mundo", 4) devolverá "Hola".

//Con el metodo 'slice()', 
//vamos a obtener los caracteres de una cadena de texto,
//dependiendo de los valores que pongamos en el parametro


//Contando caracteres de un String
console.log('2)Programa una función que te devuelva el texto recortado, según el número de caracteres indicados, pe.miFuncion("Hola Mundo", 4) devolverá "Hola".')

function segundoEjercicio(texto) {
    return texto.slice(0, 5);
}
let text = segundoEjercicio('Hello World')
console.log(text)


//Contando elementos del array
function segundoEjercicio2(texto) {
    return texto.slice(0);
}
let text2 = segundoEjercicio2(['Queen', 'Metallica', 'Nirvana', 'Kiss', 'Pink Floyd'])
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
console.log(cant.slice(1, 3))


//2)Ejercicio Resuelto con arrow function
console.log('Ejercicio Resuelto numero 2')
//Aqui estamos guardando en una constante un funcion arrow
const recortarTexto = (cadena = "", longitud = undefined) =>
    //Aqui estamos usando los condicionales de operadores ternarios,
    //para validar si se ingreso o no un texto.
    (!cadena)
    //Si la cadena esta vacia, recibo un false, 
    //pero con el signo de exclamacion lo doy vuelta, 
    //para que sea un true entonces entre al primer warn
    ?
    console.warn('No ingresaste ningun texto')
    //si es falso, me va a preguntar si longitud,
    //es "undefined", si es asi me va a mostrar el warn
    :
    (longitud === undefined) ?
    console.warn('No ingresaste la longitud para cortar el texto')
    //Si la longitud no es undefined, 
    //entonces los parametros estan completos, 
    //y me ejecuta la funcion correctamente
    :
    console.info(cadena.slice(0, longitud));



recortarTexto()
recortarTexto('', 6)
recortarTexto('Hola Mundo', )
recortarTexto('Hola Mundo', 6)





/* ---------------------------------------------------------------------- */





//3) Programa una función que dada una String te devuelva un Array,
//de textos separados por cierto caracter, 
//pe.miFuncion('hola que tal', ' ') devolverá['hola', 'que', 'tal'].

//Separando palabras de un string a un array
console.log('3)Programa una función que dada una String te devuelva un Array, de textos separados por cierto caracter, pe.miFuncion("hola que tal", " ") devolverá["hola", "que", "tal"].')

function tercerEjercicio(texto) {
    return texto.split(' ');
}

let resultado = tercerEjercicio('hola que tal')
console.log(resultado)
console.log(resultado.length);


//3)Ejercicio Resuelto con arrow function
console.log('Ejercicio Resuelto numero 3')

//Aqui estamos creando la constante "cadenaAArreglo",
//donde guardaremos la funcion arrow
const cadenaAArreglo = (cadena = "", separador = undefined) =>

    //Aqui evaluaremos el parametro "cadena", si este viene vacio,
    //entonces devolvera un false, 
    //pero al darlo vuelta con el signo de exclamacion, sera true.
    (!cadena) ?
    console.warn("No ingresaste una cadena de texto")
    //Aqui evaluaremos el parametro "separador", 
    //que esta predefinido como "undefined", 
    //si este no recibe ningun valor seguira siendo undefined,
    //entonces sera true. 
    :
    (separador === undefined) ?
    console.warn("No ingresaste el caracter separador")
    //Si llegamos hasta aqui es porque todos los parametros,
    //fueron correctamente cargados, entonces se ejecutara el codigo
    //Lo que hace la propiedad "split",  
    //es crearnos un array con elementos,
    //separados por un elemento definido
    :
    console.info(cadena.split(separador))

cadenaAArreglo("Hola que tal", " ")






/* ---------------------------------------------------------------------- */






//4) Programa una función que repita un texto X veces, 
//pe.miFuncion('Hola Mundo', 3), 
//devolverá Hola Mundo Hola Mundo Hola Mundo.

//Repitiendo el texto de una cadena
console.log('4)Programa una función que repita un texto X veces pe.miFuncion("Hola Mundo", 3), devolverá Hola Mundo Hola Mundo Hola Mundo.')

function cuartoEjercicio(texto) {
    return texto.repeat(3);
}

let repeticiones = cuartoEjercicio('Hola Mundo ')
console.log(repeticiones)


//4)Ejercicio Resuelto 
console.log('4)Ejercicio resuelto')

//Aqui estamos guardando una funcion flecha dentro de una constante
const repetirTexto = (texto2 = "", veces = undefined) => {

    //Aqui estamos validando el primer parametro fue completado
    if (!texto2) return console.warn('No ingresaste un texto');

    //Aqui estamos validando si el segundo parametro,
    //el cual lo estamos verificando mediante la validacion de igualdad,
    //entonces si el parametro 'veces', es igual a undefined, 
    //se ejecutara el siguiente codigo
    if (veces === undefined) return console.warn("No ingresaste el numero de veces a repetir el codigo");

    if (veces === 0) return console.error("El numero de veces no puede ser cero");
    //Aqui estamos usando la propiedad 'sign' del objeto "Math",
    //esta propiedad lo que haces es darnos tres numero, 
    //el -1, el 0, y el 1, si ingreso un numero menor a cero,
    //este me devolvera un -1, si ingreso un cero, me devolvera un cero,
    //si ingreso un numero mayor a cero, me devolvera un uno,
    //asi estoy validando que el numero sea mayor a cero
    if (Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo");

    //Aqui estoy creando un bucle for, con el bucle for lo que logro,
    //es repetir la cantidad de veces que le cargue en el parametro,
    for (let i = 1; i <= veces; i++) console.info(`${texto2}, ${i}`);


}

repetirTexto('Hola', 10)
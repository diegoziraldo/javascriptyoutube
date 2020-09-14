'use strict'

//try-catch:
//Con try catch, vamos a ver cuando el codigo tenga un error, 
//si este lo tiene el programa se puede seguir ejecutandose
//si el programa tiene un error entonces el catch, nos va a mostrar ese error
//cuando el try detecta el error automaticamente el error me lo va a pasar al catch,
//pero todo lo que este debajo de ese error no se va a ejecutar

/* try {
    console.log('En el try se agrega el codigo a evaluar')
    console.log('Segundo mensaje del try')
    noExiste;
} catch (error) {
    console.log('Captura cualquier error lanzado en el try (Hubo un error)')
} finally{
    console.log('El bloque finally se ejecutara siempre al final de un bloque try-catch')
} */

try {
    let numero = 'a';
    //Con esta propiedad vamos a saber si la variable tiene cargado un dato de tipo 'number',
    //si el dato es de tipo number, devolvera un true, sino un false
    if (isNaN(numero)) {
        //Con el elemento 'throw', podremos crear un error personalizado
        throw new Error('El caracter introducido no es un numeros');
        4
    }
    console.log(numero * numero)
    //El catch lo que va a hacer es capturar el error que le va a mandar el try,
    //en este caso le va a mandar el error que fue creado con throw, 
    //ya que este fue creado con el objeto 'new Error' 
} catch (error) {
    console.log(`Se produjo un error ${error}`)
}
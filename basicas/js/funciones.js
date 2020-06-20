'use strict'

//Funciones:
//Las funciones tambien son objetos
//Se pueden pasar como parametros
//Se pueden retornar como un valor, la funcion puede ser igual a un valor

//Declaracion de Funcion:
function EstoEsUnaFuncion(){
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
}

/* //Invocacion de funcion:
EstoEsUnaFuncion()
 */
//Esta funcion lo que va a hacer es devolvernos todos los console.log(),
//y una ves terminados nos retornara un string, 
//luego esta funcion se va a convertir en el valor que mando el return
//Cuando hay un return en una funcion esta se va a finalizar en el momento que se ejecute el return,
//todo lo que haya despues no lo va a ejecutar
function unaFuncionQueDevuelveValor(){
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
    return 'La funcion devuelve una cadena de Texto'
}
let valorFuncion = unaFuncionQueDevuelveValor();
//console.log(valorFuncion);

/* let nombre = 'Diego';
let edad = 35; */

//Aqui estamos creando una funcion que va a recibir dos parametros
//A los parametros le podemos cargar valores predeterminados, 
//por si no llegan a cargarse cuando llamemos a la funcion
function saludar(nombre = 'Desconocido', edad=3){
    //Aqui estamos mandando un mensaje por consola
    console.log(`Hola me llamo ${nombre}, tengo ${edad} años`)
}

//Aqui estamos llamando a la funcion 'saludar' y estamos pasandole valores a los parametros, 
//que nos pide la funcion
saludar();

//Funciones declaradas VS funciones expresadas

//Esto es una funcion declarada
funcionDeclarada();
function funcionDeclarada(){
    console.log('Esto es una funcion declarada, puede invocarse en cualquier parte del codigo, incluso antes de que la funcion sea declarada')
}

//Esto es una funcion expresada
let funcionExpresada = function(){
    console.log('Esto es una funcion expresada, es decir una funcion que fue asignada como valor a una variable, esta funcion no se la puede llamar antes de ser declarada')
}

funcionExpresada();





















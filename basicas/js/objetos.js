'use strict'

//Objetos:
//Es una coleccion de propiedades, estas propiedades definen las caracteristicas de un objeto
//Dentro de un objeto vamos a tener propiedades y metodos,
//las propiedades son las caracteristicas del objeto,
//los métodos es lo que puede hacer el objeto
const diego = {
    nombre: 'Diego',
    apellido: 'Ziraldo',
    edad: 35,
    pasatiempos: ['manejar', 'jugar ajedrez', 'programar'],
    soltero: true,
    contacto: {
        facebook: 'chiricapo@hotmail.com',
        email: 'ziraldodiego@gmail.com',
        cel: 1550973167
    },
    //Con la palabra 'this', voy a poder usar una propiedad que tengo dentro del objeto,
    //si no le pongo la palabra this, la variable va a estar esperando un valor,
    //desde el parametro de la funcion
    saludo: function () {
        console.log(`Hola que tal, mi nombre es: ${this.nombre}, tengo ${this.edad} años`)
    }
}
//Aqui estamos mostrando por consola todos las propiedades y metodos que tiene el objeto 'diego'
console.log(diego)

//Aqui estamos mostrando el metodo que tiene el objeto 'diego'
diego.saludo()

//Aqui estamos viendo todas las propiedades que tiene el objeto 'Object'
//Con la propiedad 'keys', vamos a ver el nombre de todas las propiedades y metodos del objeto
console.log(Object.keys(diego))

//Con la propiedad 'values', vamos a ver el valor de todas las propiedades y metodos del objeto
console.log(Object.values(diego))

//Con la propiedad 'hasOwnProperty', vamos a chequear si dentro del objeto 'diego', 
//existe la propiedad o el metodo que le pasaremos dentro de los parametros, y nos devolvera un booleano
console.log(diego.hasOwnProperty('nombre'))
console.log(diego.hasOwnProperty('caca'))
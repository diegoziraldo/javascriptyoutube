https: //www.youtube.com/watch?v=kfsH8OrIy-Q

'use strict'


//Sin destructuracion

const numeros = [1,2,3];
/*
    uno = numeros[0];
    dos = numeros[1];
    tres = numeros[2];

console.log(uno, dos,tres)
 */

//Con destructuracion
//Cuando usamos la expresion 'destructuracion' en un array, 
//lo que hacemos es asignarle un nombre a cada elemento del array,
//entonces en este caso vamos a crear un array con nombres de variables,
//y esos nombres se los daremos a los elementos del array 'numeros',
//la posicion que tendra el nombre de la variable, va a ser la misma que tiene el array que le asociaremos   
const [coco, dos, tres] = numeros;

console.log(tres, dos, coco)

//Aqui estamos crando un objeto
let persona = {
    nombre:'Diego',
    apellido:'Ziraldo',
    edad: 35
}

//En los objetos si se respetan los nombres de las variables,
//ya que estos nombres de variables van a buscar el valor que tenga su mismo nombre en el objeto,
const {nombre, apellido, edad} = persona;

console.log(nombre, apellido, edad)

















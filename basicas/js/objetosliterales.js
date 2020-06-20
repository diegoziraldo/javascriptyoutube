'use strict'

let nombre = 'Diego';
let edad = 10;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log('guauu guauu')
    }
}

console.log(perro.ladrar);


//Aqui estamos creando el objeto 'dog', en este objeto le vamos a poner las propiedades nombre y edad,
//si el nombre de la propiedad es igual que el nombre de la variable, no hace falta escribirlas,
//automaticamente reconoce que es el mismo valor
const dog = {
    nombre,
    edad,
    ladrar(){
        console.log('guauu guauu guauu')
    }
}

console.log(dog.ladrar)
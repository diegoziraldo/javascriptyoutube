'use strict'

const numeros = [1,2,3,4,5,6,7,8,9,0]

//Aqui estamos usando la sentencia break,
//con esta sentencia lo que logramos es dejar de ejecutar un a partir de una posicion,
//que le asignaremos en el condicional
for (let i=0;i<numeros.length;i++){
    if(numeros[i]===5){
        break; 
    }
    console.log(numeros[i]);
}

//Aqui estamos usando la sentencia continue,
//esta sentencia lo que hace es omitir la posicion que le asignamos en el condicional 
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 5) {
        continue;
    }
    console.log(numeros[i]);
}
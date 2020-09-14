'use strict'

//Aqui estamos declarando un array
//En los array pueden ir diferentes tipos de elementos
const a = ['Pedro', 35, true, ['a', 'b', 'c', ['caca']]];
console.log(a[3][3][0]);

//Aqui estamos declarando un array de una nueva forma
const b = Array.of('1', '2', '3', ['pepe', 'popa'])
console.log(b[3][1]);

//Aqui estamos creando un array,
//donde le pondremos la catidad de elementos, 
//y a cada elemento un mismo valor en este caso 'false' 
const c = Array(20).fill(true)
console.log(c)

//Aqui estamos creando un array con elementos de tipo string adentro
const colores = ['Rojo', 'Verde', 'Azul']

//Aqui estamos agregando un elemento al array, mediante el metodo "push()"
colores.push('Negro')

console.log(colores)

//Aqui estamos eliminando un elemento mediante el metodo "pop()"
colores.pop()
console.log(colores)

//Aqui estamos creando un bucle "forEach()", al cual le daremos un array,
//entonces dentro de los parametros del metodo "forEach()", le pondremos una funcion,
//que le dara una orden a cada elemento del array que dijimos que nos recorra.
//Dentro de los parametros del la funcion anonima que pondremos en el bucle "forEach()",
//podemos pasarle dos parametros, el primero nos mostrara el nombre de los elementos que tiene el array,
//y el segundo el indice de cada elemento
colores.forEach(function (elemento, indice) {
    console.log(`<li> El elemeto ${indice+1} es el: ${elemento}</li>`)
})
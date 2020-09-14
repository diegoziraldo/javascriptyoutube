'use strict'

//9) Programa una función que obtenga un numero aleatorio 
//entre 501 y 600.


//Aqui estamos creando la funcion numeroAleatorio()
function numeroAleatorio() {
    //Aqui vamos a guardar en una variable el numero random que vamos a crear
    let num = Math.random();
    //Aqui vamos a multiplicar por mil el numero creado y lo vamos a redondear,
    //para eliminar los decimales
    let numero = Math.round(num * 1000);

    //Aca estamos llamando a la funcion que va a verificar si el numero que,
    //fue creado por el metodo random(), esta dentro de los numeros pedidos
    numeroA()

    //Aca creamos la funcion
    function numeroA() {
        //Mediante un condicional, vamos a verificar que el numero que 
        //haya salido coincida con lo requerido en el condicional,
        //si es asi entonces nos mostrara el numero
        if (numero > 500 && numero <= 600) {
            return console.log(numero);
        }
        //Sino se vuelve a ejecutar la funcion, asi hasta que el numero que salga
        //coincida con lo requerido dentro del
        else {
            numeroAleatorio();

        }
    }
}
console.log('Ejercicio 1')
numeroAleatorio()

//Solucion Video
const aleatorio = () => console.info(Math.round(Math.random() * 100) + 500)

console.log('Solucion Video')
console.log('Ejercicio 1')
aleatorio();






/* --------------------------------------------------------------------------------------- */






//10) Programa una función que reciba un número y evalúe 
//si es capicúa o no(que se lee igual en un sentido que en otro), 
//pe.miFuncion(2002) devolverá true.

const capicua = (valor) => {
    if (Math.sign(valor) === -1) return console.warn('Ingresaste un número negativo');
    if (valor === 0) return console.warn('Ingresa un valor mayor a cero');
    if (!valor) return console.warn('No se ingreso ningun número');
    if (valor < 10) return console.warn('Ingresaste un número de una cifra');
    if (typeof valor !== "number") return console.warn('No ingresaste un número')

    //Aqui estamos convirtiendo un dato de tipo 'number' a 'string'
    let numero = valor.toString();
    //Aqui vamos a separar el string, 
    //lo vamos a dar vuelta y lo volveremos a juntar, 
    //para compararlo con el otro string
    let arrayNum = numero.split("").reverse().join("");
    /* return console.log(arrayNum) */

    if (numero === arrayNum) {
        console.log(`El número ${numero}, es capicua`)
    } else {
        console.log(`El número ${numero}, no es capicua`)
    }

}
console.log('')
console.log('Ejercicio 2')
capicua(89)




//Solucion Video

const capic = (numero) => {
    if (!numero) return console.log('No ingresaste un número')
    if (typeof numero !== "number") return console.log('No ingresaste un número')
    if (Math.sign(numero) === -1) return console.log('Debes ingresar un numero mayor a 10')

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves) ?
        console.log(`Es capicua, el numero ${numero}, es igual al numero ${alReves}`) :
        console.log(`No es capicua`)
}


console.log('Solucion Video')
console.log('Ejercicio 2')
capic(89);






/* ------------------------------------------------------------------- */





//11) Programa una función que calcule el factorial de un número
//(El factorial de un entero positivo n, 
//se define como el producto de todos los números enteros positivos 
//desde 1 hasta n), pe.miFuncion(5) devolverá 120.

const factorial = (valor) => {
    let total = 1;

    console.log(`El factorial de ${valor} es:`)

    for (let i = valor; i > 1; i--) {
        total = i * total;
        /* valorTotal = total + valor; */

    }
    console.log(`${total}`);
}

console.log('')
console.log('Ejercicio 3')
factorial(5);


//Solucion Video

const numeroFactorial = (numero = undefined) => {

    if (numero === undefined) return console.warn('No ingresaste ningun número')
    if (numero === 0) return console.warn('No se puede ingresar el número cero')
    if (typeof numero !== 'number') return console.warn('Debes ingresar un número')
    if (Math.sign(numero) === -1) return console.warn('No se pueden ingresar números negativos')

    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial = factorial * i;
    }
    return console.log(factorial)
}


console.log('')
console.log('Ejercicio 3')
numeroFactorial(7);
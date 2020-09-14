'use strict'

//12) Programa una función que determine si un número es primo
//(aquel que solo es divisible por sí mismo y 1) o no, 
//pe.miFuncion(7) devolverá true.

let multiplo = false;

//Aqui estamos creando la funcion que recibira un numero como parametro
const primo = (numero = 0) => {
    if (typeof numero === "string") return 'Solo ingresar numeros';
    if (Math.sign(numero) === -1 || Math.sign(numero) === 0 || numero ===1) return 'Solo ingresar numeros mayores a 1';

    //Aqui creamos el bucle for que ira desde el valor 2,
    //hasta el valor que le pasemos por parametros
    for (let i = 2; i < numero; i++) {
        //Aqui comprobaremos si el numero a comprobar es primo o no,
        //si el resto del numero a comprobar da cero entonces ese numero es multiplo,
        //asi que no sera un numero primo, porque aparte del 1 y de su mismo numero,
        //tiene otro numero que su resto dara cero
        if (numero % i === 0) {
            //Si el resto del numero da cero entonces va a entrar dentro del bucle,
            //y modificara la variable multiplo a 'true', 
            //y con break se cerrara el ciclo
            multiplo = true
            break
        }
    }
    //Aqui vamos a comprobar si la variable multiplo cambio de valor
    if (multiplo === true) {
        return `El numero ${numero} no es primo`
    } else {
        return `El numero ${numero} es primo`
    }
}
console.log(primo(11))
















//13) Programa una función que determine si un número es par o impar, 
//pe.miFuncion(29) devolverá Impar.

//Aqui estamos creando la funcion que nos dira si es Par o Impar un numero
const parImpar = (numero = undefined) => {
    //Aqui estamos haciendo validaciones para que solo entren numeros
    if (typeof numero === 'string' || typeof numero === 'boolean') return 'Se deben ingresar solamente numeros';

    //Aqui estamos usando el condicional 'if',
    //que lo que hara dividir en dos el numero ingresado,
    //y verificar si su resto es 0 o 1.
    if (numero % 2 === 0) return 'El numero es Par';
    if (numero % 2 === 1) return 'El numero es Impar';

}

console.log(parImpar(9))








//14) Programa una función para convertir grados Celsius a Fahrenheit 
//y viceversa, pe.miFuncion(0, "C") devolverá 32° F.

//Aqui estamos creando la funcion que nos convertira los grados en celcius o farenheit
const conversorGrados = (opcion, grados = 0) => {
    //Aqui estamos validando si el valor del primer parametro,
    //es igual al declarado en el condicional
    if (opcion === 'celcius') {
        //Aca le estamos cargando el resultado de la cuenta 
        let gradosCelcius = (grados - 32) * 5 / 9;
        return `${grados} grados farenheit equivales a: ${gradosCelcius} grados celcius`
    }

    if (opcion === 'fare') {
        
        let gradosFarenheit = (grados * 9 / 5) + 32;
        return `${grados} grados celcius equivales a: ${gradosFarenheit} grados farenheit`
    }
}
//console.log(conversorGrados('fare', 32))



//Solucion del video




























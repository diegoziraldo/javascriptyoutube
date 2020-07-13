/* https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions */

//Las expresiones regulares son una secuencia de caracteres,
//que forma un patron de busqueda.
//Se usa principalmente para la busqueda de patrones de cadenas caracteres

//sintaxis:
// /patron/

//Banderas:
//i: ignore case. No diferencia entre mayusculas y minusculas
//g: busca de forma global, es decir no se para en la primera coincidencia

let text = 'Hola';
//Aqui estamos creando la expresion regular,
//esta empresion dice que lo que esta adentro de las barras '/ /',
//es lo que tiene que buscar, lo este despues van a ser las condiciones.
const regular = /h/gi

//Aqui vamos a usar el metodo test(),
//con este metodo logramos verificar,
//si existe una coincidencia en el string que le pasamos por parametro  
console.log(regular.test(text));


//Comodines:
//Sustitucion: Define un comodin dentro del patron "."

//Listado de caracteres validos: Entre corchetes se pone una lista de caracteres validos. [aeiou], Con esto comparamos todas las vocales

//Rangos: Entre corchetes si ponemos un guion entre dos caracteres establecemos un rango.
//[a-z], todas las letras minusculas.

//Mezcla entre rangos y listas:
//Podemos unir los dos anteriores en una sola expresion. [0-5ou], Serian numeros del 0 al 5, la letra "o" y la letra "u"

//Cadenas completas:
//Para establecer una cadena completa debe ir entre parentesis, si queremos mas palabras iran separadas por un pipe "lorem|amet", es valida la palabra lorem y amet 
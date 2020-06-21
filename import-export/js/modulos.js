'use strict'

console.log('Archivo modulos.js')

//Aqui estamos importando la constante que creamos en el archivo,
//'constante.js', lo hacemos mediante la palabra 'import',
// y con 'from', le decimos donde queremos que la busque
import {pi, usuario, password} from './constantes.js'


console.log(pi, usuario, password);

//Aqui vamos a importar el objeto aritmetica,
//el cual tendra dos metodos adentro, (sumar y restar)

import {aritmetica} from './aritmeticas.js'
console.log(aritmetica.restar(20,2));

'use strict'


//Aqui estamos creando una Clase
class Animal {

    //El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
    //En el constructor vamos a darle las propiedades a la clase, los valores de estas propiedades,
    //van a ser recibidas mediante parametros
    constructor (nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    //Luego vamos a crear los metodos de la clase
    sonar(){
        console.log('Hago sonidos por que estoy vivo');
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

//Aqui estamos creando dos objetos de tipo animal, 
//estos objetos van a tener las mismas propiedades y metodos que la clase 'Animal',
//ya que estos dos objetos son una instancia (copia) de la clase Animal,
//estos objetos van a copiar el valor de la clase que le digamos, 
//si el contructor de la clase pide parametros, se los tendremos que pasar cuando creamos el objeto
const mimi = new Animal('Mimi', 'Hembra');
const rayo = new Animal('Rayo', 'Macho');

//Aqui estamos mostrando por consola el objeto mimi
console.log(mimi);
//Aqui vamos a ejecutar la funcion que tiene mimi
mimi.sonar();
mimi.saludar();

console.log(rayo);
rayo.sonar();
rayo.saludar()

//Aqui estamos creando una clase (Perro), usando como clase la clase padre (Animal),
//cuando creo una clase de la clase padre la clase hijo va a heredar todas sus propiedades y metodos,
//a la clase hija le puedo agregar mas propiedades y métodos
class Perro extends Animal{
    constructor(nombre, genero, raza){
    //La palabra clave super es usada para acceder y llamar funciones del padre de un objeto
    super(nombre, genero);
    this.raza = raza;
    }
    sonar() {
        console.log('Hago sonidos por que estoy vivo');
        }

    ladrar() {
        console.log('guauu guauu');
        }
}


const roger = new Perro('Roger', 'Macho', 'chiuaua');
console.log(roger);
roger.ladrar();

















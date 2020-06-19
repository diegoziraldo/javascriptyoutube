//https://www.youtube.com/watch?v=TEzu31q9MVA&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=25
'use strict'
//Todas las clases en javascript son publicas
//Los metodos setter y getter no se ejecutan como metodos en javascript,
//se ejecutan como propiedades

class Animal{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar(){
        console.log('Hago sonidos por que estoy vivo')
    }

    saludar(nombre){
        console.log(`Hola soy un animal me llamo ${nombre}`)
    }

    //Un metodo statico (static), 
    //se puede ejecutar sin nececidad de instanciar la clase,
    //o crear un objeto de la clase
    static queEres(){
        console.log('Soy Diego, intentando estudiar programacion')
    }
}

const perro = new Animal('pepe', 'Macho');
console.log(perro);
console.log(perro.saludar('pepe'));


class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null
    }

    get getRaza() {
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza
    }

    

}

const rayo = new Perro('rayo', 'Macho', 'Mediano')

console.log(rayo.raza)

rayo.setRaza = 'Horrible';
console.log(perro.getRaza);


console.log(perro.saludar('rayo'));
Animal.queEres();
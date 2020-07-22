'use strict'

//9) Programa una función que obtenga un numero aleatorio 
//entre 501 y 600.


//Aqui estamos creando la funcion numeroAleatorio()
function numeroAleatorio(){
        //Aqui vamos a guardar en una variable el numero random que vamos a crear
        let num = Math.random();
        //Aqui vamos a multiplicar por mil el numero creado y lo vamos a redondear,
        //para eliminar los decimales
        let numero = Math.round(num * 1000);

    //Aca estamos llamando a la funcion que va a verificar si el numero que,
    //fue creado por el metodo random(), esta dentro de los numeros pedidos
    numeroA()

    //Aca creamos la funcion
    function numeroA(){
        //Mediante un condicional, vamos a verificar que el numero que 
        //haya salido coincida con lo requerido en el condicional,
        //si es asi entonces nos mostrara el numero
        if(numero>500 && numero<=600){
            return console.log(numero);
        }
        //Sino se vuelve a ejecutar la funcion, asi hasta que el numero que salga
        //coincida con lo requerido dentro del
        else{
            numeroAleatorio(); 
              
        }
    }
}
    numeroAleatorio()
        


    


/* --------------------------------------------------------------------------------------- */






//10) Programa una función que reciba un número y evalúe 
//si es capicúa o no(que se lee igual en un sentido que en otro), 
//pe.miFuncion(2002) devolverá true.

const capicua = (valor)=>{

}




















//11) Programa una función que calcule el factorial de un número(El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.miFuncion(5) devolverá 120.
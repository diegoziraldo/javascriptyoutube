/* 		console.log(window);
		console.log(document);

		let texto = "Buenisimo";
		const habla = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

		habla(texto);


		console.log("***************Elementos del documento*****************");
		console.log(document.images);
		console.log(document.scripts); 
		*/

/* Aqui vamos a capturar cualquier etiqueta,
que pasemos por los parametros 
*/
console.log(document.getElementsByTagName('ul'));

/* Aqui vamos a capturar todos los elementos,
que en el atributo "class" tengan el nombre que 
le pasemos por parametros */
console.log(document.getElementsByClassName('card'));

/* Aqui vamos a capturar todos los elementos,
que en el atributo "name", 
tengan el nombre que pasemos por parametros*/
console.log(document.getElementsByName('nombre'));

/* Aqui vamos a capturar todos los elementos,
que en el atributo "Id", 
tengan el nombre que le pasemos por paramentros */
console.log(document.getElementById('menu'));

/* Aqui vamos a capturar cualquier elemento,
del dom que tengan el nombre que le pasemos por parametros,
este metodo solo nos traera el primer elemento que encuentre */
console.log(document.querySelector("figcaption"));

/* 	
	Aqui vamos a capturar cualquier elemento,
	del dom que tengan el nombre que le pasemos por parametros,
	este metodo nos traera todos los elementos que encuentre,
	para capturar clases debemos poner (. + nombre de la clase),
	para capturar Ids debemos poner(# + nombre del Id) 
*/

/* 
	Aqui vamos a capturar el elemento 'figure', 
	y mostraremos cuantos elementos 'figure' hay en el dom.
	con la propiedad 'length'
*/
console.log(document.querySelectorAll('figure').length);

/* 

*/
console.log(document.querySelectorAll("figure"));

/* 

*/
document.querySelectorAll("figure").forEach((el)=>console.log(el));






/* ------------------------------------------------------------------- */







//Obtencion de los datos del DOM

//Aqui estamos accediendo al valor de los elementos que tiene el DOM
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector('.link-dom').href);
console.log(document.querySelector('.link-dom').getAttribute('href'));

//Aqui estamos accediendo y cambiando el valor de los elementos,
//que tiene el DOM.
document.documentElement.lang = "en";
//Aqui estamos dandole un valor al elemento "lang",
//con el metodo 'setAttribute()', en el primer parametro recibira,
//el nombre del elemento a cambiar, y en el segundo parametro,
//el valor al que sera cambiado ese elemento.
document.documentElement.setAttribute("lang", "es")

//Aqui estamos guardando en una constante, que va a hacer
//referencia a un elemento del DOM.
//Generalmente a la constante le vamos a anteponer el signo dolar '$'.
const $linkDOM = document.querySelector('.link-dom');

//Aqui vamos a modificar el atributo "target" del elemento, 
//y le pondremos el valor "_blank". 
$linkDOM.setAttribute('target','_blank');

//Aqui vamos a ponerle un valor al atributo "href".
$linkDOM.setAttribute('href',"https://elpais.com");


//Data-attributes

console.log($linkDOM.getAttribute("data-description"));
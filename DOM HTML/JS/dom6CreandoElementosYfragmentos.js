/* CREANDO ELEMENTOS Y FRAGMENTOS */


//Aqui estamos creando elemento para luego ponerlos en el DOM
const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
//Aqui estamos creando un nodo de texto
const $figcaptionText = document.createTextNode('Animals');
//const $src = 
const $cards = document.querySelector('.cards');

//Aqui estamos seteando un atributo 'src' y 'alt',
//al elemento img.
$img.setAttribute('src', 'https://placeimg.com/200/200/animals')
$img.setAttribute('alt', 'Animals')

//Aqui estamos agregandole una clase 'card' al elemento figure.
$figure.classList.add('card')

//Con 'appendChild', podremos insertar nodos dentro de nuestro DOM.
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figcaption.appendChild($figcaptionText);
//Aqui estamos insertando a la clase 'cards',
//el nodo 'figure' creado dinamicamente.
$cards.appendChild($figure);


//Aqui vamos a crear una imagen con la propiedad 'innerHTML'
const $figure2 = document.createElement('figure') 
$figure2.innerHTML = `
	<img src="https://placeimg.com/200/200/people" alt="People">
	<figcaption>People</figcaption>
`
$cards.appendChild($figure2);
$figure2.classList.add('card');


//Aqui estamos creando dinamicamente,
//una lista de las estaciones del año.
const $estaciones = ['Primavera','Verano','Otoño','Invierno'];

//Aqui creamos el elemento '<ul>' al que lo guardaremos en una variable
$ul = document.createElement('ul')

document.write('<h3>Estaciones del año</h3>');

//Aqui insertaremos el elemento dentro del body.
document.body.appendChild($ul)

//Aqui estamos recorriendo el array 'estaciones',
//para mostrar cada elemento del array en el DOM.
$estaciones.forEach(el =>{
	//Entonces por cada elemento del array,
	//vamos a crear una etiqueta '<li>'.
	const $li = document.createElement('li')
	//A cada '<li>' le pondremos el texto que tiene cada elemento que tiene,
	//que t
	$li.textContent = el;
	$ul.appendChild($li)
});


const $continentes = ['Africa', 'America', 'Europa', 'Asia', 'Oceania'];
const $ul2 = document.createElement('ul');

document.write('<h3>Continentes del Mundo</h3>')
document.body.appendChild($ul2)
$ul2.innerHTML = "";
$continentes.forEach((el)=>($ul2.innerHTML += `<li>${el}</li>`))

const meses = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre'	
]

$ul3 = document.createElement('ul');
$fragment = document.createDocumentFragment();

meses.forEach((el)=>{
	const $li = document.createElement('li');
	$li.textContent = el;
	$fragment.appendChild($li);
});

document.write('<h3>Meses del año</h3>');
$ul3.appendChild($fragment);
document.body.appendChild($ul3)
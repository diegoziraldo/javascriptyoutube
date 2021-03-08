//Aqui estamos guardando dentro de una variable lo que estamos,
//capturando con el metodo 'get.ElementById()'
const $whatIsDom = document.getElementById('que-es');

let text = `
	<p>
    	El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
		API para documentos HTML y XML.
    </p>
    <p>
    	Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>


`
//Aqui estamos pasando la variable 'text', 
//al Id del elemento que capturamos anteriormente.

//Con la propiedad textContent, 
//vamos a poder pasar el texto de manera comun.
$whatIsDom.textContent = text;

//Con la propiedad innerHTML, 
//vamos a pasar el texto, 
//si el texto que pasamos tiene alguna etiqueta html,
//esta la va a poder decodificar y no mostrara las etiquetas html.
$whatIsDom.innerHTML=text;

//Con la propiedad outerHTML,
//vamos a pasar el texto, y si el texto contiene etiquetas HTML,
//esta la va a poder decodificar, tambien va a reemplazar,
//el contenedor donde pondremos el texto.
$whatIsDom.outerHTML = text;

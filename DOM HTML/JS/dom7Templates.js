/* TEMPLATES HTML */


const $cards = document.querySelector('.cards');
const $template = document.getElementById('template-card').content;
const $fragment = document.createDocumentFragment();

//Aqui estamos creando un array de objetos.
cardContent = [
    {
        title: "Tecnología",
        img:"https://placeimg.com/200/200/tech"
    },
    {
        title: "Animales",
        img:"https://placeimg.com/200/200/animals"
    },
    {
        title: "Arquitectura",
        img:"https://placeimg.com/200/200/arch"
    },
    {
        title: "Gente",
        img:"https://placeimg.com/200/200/people"
    },
    {
        title: "Naturaleza",
        img:"https://placeimg.com/200/200/nature"
    }
]

//Aqui vamos a recorrer el array 'cardContent',
//el cual tiene adentro objetos con propiedades.
cardContent.forEach(el => {
    //Aqui en cada vuelta de array lo que hacemos es
    //buscar dentro de la etiqueta 'template' algun elemento,
    //y le setearemos o le agregaremos lo que queramos.
    $template.querySelector('img').setAttribute('src',el.img);
    $template.querySelector('img').setAttribute('alt',el.title);
    $template.querySelector('figcaption').textContent = el.title;

    //Aqui vamos a guardar en una variable, 
    //el nodo que traigamos del DOM, el nombre de este nodo,
    //se lo pasaremos por parametros al metodo, 
    //el parametro true, significa que nos copiara el nodo mas,
    //todos lo que tenga adentro de ese nodo 
    let $clone = document.importNode($template, true);

    //Aqui vamos a insertarle todo lo que se vaya creando,
    //al fragmento creado 
    $fragment.appendChild($clone);

});

//Aqui lo que estamos haciendo es insertarle a la etiqueta '$cards',
//todo el fragment
$cards.appendChild($fragment);
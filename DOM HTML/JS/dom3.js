

const $card = document.querySelector('.card');
console.log($card.classList);

//Con el metodo 'contains()', 
//vamos a verificar si el elemento que estamos accediendo,
//tiene la clase indicada entre parentesis
console.log($card.classList.contains('rotate-45'));

//Aqui estamos agregando una clase al elemento.
$card.classList.add('rotate-45')

//Aqui estamos eliminando una clase. 
$card.classList.remove('rotate-45')

//Aqui estamos usando el metodo 'toogle',
//este metodo lo que hace es activarnos el metodo si no lo tiene,
//o sacarlo si lo tiene.
$card.classList.toggle('rotate-45')

//Aqui estamos reemplazando una clase por otra,
//en el primer parametro le pasaremos la clase a reemplazar,
//y el el segundo parametro, la clase por la que sera reemplazada.
$card.classList.replace('rotate-45', "rotate-135")

//Aqui estamos agregandole mas de una clase al elemento.
$card.classList.add('sepia', "opacity-80")

//Aqui estamos eliminando todas las clases puestas anteriormente
$card.classList.remove('rotate-135', 'sepia', 'opacity-80');






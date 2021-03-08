
//Aqui estamos creando una variable de tipo constante,
//anteponiendo el signo dolar '$'

const $linkDOM = document.querySelector('.link-dom');

//Aqui estamos agregando estilos de manera dinamica,
//al elemento '$linkDOM'
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "Block");
$linkDOM.style.width = '50%'
$linkDOM.style.textAlign = 'center'
$linkDOM.style.marginLeft = 'auto'
$linkDOM.style.marginRigth = 'auto'
$linkDOM.style.padding = '1rem'
$linkDOM.style.borderRadius = '0.5Rem'
$linkDOM.style.border = '3px solid black'

//Aqui vamos a ver todos los estilos css que tendra el elemento,
//'.linkDOM'
console.log($linkDOM.style);
//Aqui vamos a ver los estilos que tenga el elementos '$linkDOM'.
console.log($linkDOM.getAttribute('style'));

//Con el metodo 'getComputedStyle()', vamos a poder ver que valor,
//va a tener en ese momento el el elemento en la vista del la pagina
console.log(getComputedStyle($linkDOM).marginLeft);



//Variables CSS - 

//Aqui vamos a guardar dentro de la variable '$html',
//la etiqueta '<html>' mediante 'document.documentElement'
const $html = document.documentElement;
const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
let varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

console.log(varDarkColor);
console.log(varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty('--dark-color','pink')


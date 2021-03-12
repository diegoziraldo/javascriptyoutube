const $cards = document.querySelector('.cards');
const $newCard = document.createElement('figure');

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt='any'>
    <figcaption>Any</figcaption>

`;
$newCard.classList.add('card')


//$cards.replaceChild($newCard,$cards.children[2])

$cards.insertBefore($newCard)
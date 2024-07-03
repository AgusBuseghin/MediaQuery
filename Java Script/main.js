// console.log(pokemons);
let contenedorCards = document.getElementById('contenedor_cards');
let cardsHTML = "";
for(let pokemon in pokemons){
    // console.log(pokemons[pokemon]);
    cardsHTML += crearCards(pokemon)
}
contenedorCards.innerHTML = cardsHTML;
// console.log(cardsHTML)

function crearCards (pokemon){
let card = document.createElement('div');
card.classList.add('card');
let id = document.createElement('div');
let name = document.createElement('p');
let image = document.createElement('img');
let type = document.createElement('p');

id.innerText = pokemons[pokemon].id;
name.innerText = pokemons[pokemon].name;
image.src = pokemons[pokemon].image;
type.innerText = pokemons[pokemon].type;

card.append(id, name, image, type);

return card.outerHTML;
}

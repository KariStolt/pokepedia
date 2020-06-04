let pokemon = Math.floor(Math.random() * 151) + 1;

async function fetchPokemonData(pokemon) {
    let api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(api);
    const data = await response.json();
    //console.log(data)
    document.getElementById('id').innerHTML = 'numero: ' + data.id;
    document.getElementById('name').innerHTML = 'Pokemonin nimi: ' + data.name;
    document.getElementById('type').innerHTML = 'tyyppi: ' + data.types[0].type.name;
    document.getElementById('sprite').src = data.sprites.front_default;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
fetchPokemonData(pokemon);



document.getElementById('searchButton').addEventListener('click', (evt) => {
  pokemon = document.getElementById('pokemonName').value;
  if (pokemon == 0) {
    pokemon = Math.floor(Math.random() * 151) + 1;
  }
  fetchPokemonData(pokemon)
});


// mahdollistaa pokemonin etsimisen enteriä painamalla.
let keyboardInput = document.getElementById("pokemonName");
keyboardInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById('searchButton').click();
  }
});

const pokemonTypes = (n) => {
  let type = n;
  let pokemonListByType = '';
  fetch(`https://pokeapi.co/api/v2/type/${type}`).then(
  res=> {
    res.json().then(
      data=>{
        for (i=0; i<data.pokemon.length; i++) {
          pokemonListByType += `<li><a onclick="fetchPokemonData('` + data.pokemon[i].pokemon.name +`')">` + data.pokemon[i].pokemon.name +`</a></li>`;
      } document.getElementById('type-modal-text').innerHTML = pokemonListByType;
      })
  }
)
}


const fetchPokemonList = () => {
let pokemonList = '';
fetch('https://pokeapi.co/api/v2/pokemon/?limit=807').then(
  res=> {
    res.json().then(
      data=>{
        for (i=0; i<data.results.length; i++) {
          pokemonList += `<li><a onclick="fetchPokemonData('` + data.results[i].name +`')">` + data.results[i].name +`</a></li>`;
        } document.getElementById('pokemon-modal-text').innerHTML = pokemonList;
      }
    )
  }
)
}









// ei vielä valmis, pokemonin tyyppidataa haetaan
//document.getElementById('pokemonType').addEventListener('click', () => {
 // console.log('dkd')
//})
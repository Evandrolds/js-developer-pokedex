document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const resultContainer = document.getElementById("result-container");
  

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
      fetchPokemonDetails(searchTerm);
    } else {
      resultContainer.innerHTML =
        "Por favor, insira um nome ou número de Pokémon válido.";
    }
  });

 
});
var conteudoOriginal = document.getElementById("minhaDiv").innerHTML;
class Detalhes {
  hp;
  attack;
  defense;
  speed;
  special_attack;
  special_defense;
}

function fetchPokemonDetails(pokemonName) {
  const detalhes = new Detalhes();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const pokemonDetails = document.getElementById("result-container");
      const name = data.name;
      const id = data.id;
      const types = data.types.map((type) => type.type.name).join(", ");
      const abilities = data.abilities
        .map((ability) => ability.ability.name)
        .join(", ");

      // Pegando poder e defesa do pokemon pelo index
      detalhes.hp = data.stats[0].base_stat;
      detalhes.attack = data.stats[1].base_stat;
      detalhes.defense = data.stats[2].base_stat;
      detalhes.special_attack = data.stats[3].base_stat;
      detalhes.special_defense = data.stats[4].base_stat;
      detalhes.speed = data.stats[5].base_stat;
    // <a class="btn btn-worning" href="/index.html"></a>
      const html = `
      <div class="card">
      <button type="button" onclick="resetarDiv()"class="btn btn-dark" >Voltar</button></a>
          <div class="card-img-top" >
          <img src="${data.sprites.front_default}" alt="${name}">
          </div>
          <ol class="list-group list-group-flush">
            <div class="card-body ">
            <h5 class="card-title"><h3>${name}</h3></h5>
            <p class="card-text">Abilidade(s) ${abilities}</p>
            </div>
            
              <li class="list-group-item ">ID: ${id}</li>
              <li class="list-group-item">Tipo(s): ${types}</li>
              <li class="list-group-item">Força: ${detalhes.hp}</li>
              <li class="list-group-item">Ataque: ${detalhes.attack} </li>
              <li class="list-group-item">Defesa: ${detalhes.defense}</li>
              <li class="list-group-item">Ataque especial: ${detalhes.special_attack}</li>
              <li class="list-group-item">Defesa especial: ${detalhes.special_defense}</li>
              <li class="list-group-item">Velocidade de ataque: ${detalhes.speed} </li>
            </ol>
           
      </div>`;

      pokemonDetails.innerHTML = html;
    })
    .catch((error) => {
      console.error("Erro ao buscar os detalhes do Pokémon:", error);
    });
}
// Vltar a pagina anterior
// function voltar() {
//  alert("Passou aqui");
//  window.history.back();
// }

function resetarDiv() {
// Recupere a div
var div = document.getElementById("minhaDiv");
            
// Restaure o conteúdo original
div.innerHTML = conteudoOriginal;
}

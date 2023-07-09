const characterListElement = document.getElementById('characterList');
const fetchCharacterData = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character?status=alive");
    const data = await response.json();
    return data.results.slice(0, 50);
  } catch (error) {
    console.log('Error:', error);
    return;
  }
};

const displayErrorMessage = (message) => {
  characterListElement.innerHTML = `<li class="error">${message}</li>`;
};

const displayCharacterList = (characters) => {
  characterListElement.innerHTML = '';
  characters.forEach((character) => {
    const { name, image, location, species, gender ,status} = character;
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <div class="character">
    <img src="${image}" alt="${name}" class="character-image">
    <div class="character-info">
      <h3 class="character-name">${name}</h3>
      <p class="character-detail"><strong>Location:</strong> ${location.name}</p>
      <p class="character-detail"><strong>Species:</strong> ${species}</p>
      <p class="character-detail"><strong>Gender:</strong> ${gender}</p>
      <p class="character-detail"><strong>Status:</strong> ${status}</p>
    </div>
  </div>
  
    `;
    characterListElement.appendChild(listItem);
  });
};

(async () => {
  const characters = await fetchCharacterData();
  displayCharacterList(characters);
})();

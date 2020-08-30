// question 2

const url =
  'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating';

const resultsContainer = document.querySelector('.results');
const loader = document.querySelector('.loading');

async function getGames() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const allGames = results.results;

    loader.innerHTML = '';

    for (let i = 0; i < allGames.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="result">
      <h2 class="name">Title: ${allGames[i].name}</h2>
      <p class="rating">Rating: ${allGames[i].rating}</p>
      <p class="tags">Number of tags: ${allGames[i].tags.length}</p>
      </div>`;
    }
  } catch (error) {
    loader.innerHTML = '';
    resultsContainer.innerHTML = 'An error occured';
  }
}

getGames();

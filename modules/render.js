
import fetchAPI from './fetchAPI';

const showRender = async () => {
  const movies = await fetchAPI('https://api.tvmaze.com/shows');
  const container = document.querySelector('.shows');

  let placeholder = '';

  for (let i = 10; i < 25; i += 1) {
    const movie = movies[i];
    console.log(movie);
    placeholder += `
        <div class="grid-item"><img src="${movie.image.medium}" alt="${movie.name}"/>
        <p class="title">${movie.name}</p>
        </div>
    `;
  }

  container.innerHTML = placeholder;
};

export default showRender;
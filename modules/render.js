
import heart from '../images/heart-svgrepo-com.svg';
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
        <div class="title">
        <p>${movie.name}</p>
        <img class="heart-icon" src="${heart}" alt="heart">
        </div>
        </div>
    `;
  }

  container.innerHTML = placeholder;
};

export default showRender;
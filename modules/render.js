import fetchAPI from './fetchAPI';

const showRender = async () => {
  const movies = await fetchAPI('https://api.tvmaze.com/shows');
  const container = document.querySelector('.shows');

  let placeholder = '';

  for (let i = 10; i < 25; i++) {
    const movie = movies[i];
    console.log(movie.image.medium);
    placeholder += `
        <img src="${movie.image.medium}" alt="${movie.name}"/>
    `;
  }

  container.innerHTML = placeholder;
};

export default showRender;
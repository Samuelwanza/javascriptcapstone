import fetchAPI from './fetchAPI';

const showRender = async () => {
  const movies = await fetchAPI('https://api.tvmaze.com/shows');
  const container = document.querySelector('.shows');

  let placeholder = '';

  for (let i = 10; i < 25; i += 1) {
    const movie = movies[i];
    placeholder += `
        <div class="grid-item">
            <img src="${movie.image.medium}" alt="${movie.name}"/>
            <div class="title">
                <p>${movie.name}</p>
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="btns">
            <button>Comment</button>
            <button>Reservation</button>
            </div>
        </div>
        
    `;
  }

  container.innerHTML = placeholder;
};

export default showRender;
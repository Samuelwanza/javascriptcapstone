import fetchAPI from './fetchAPI';
import addLikes from './addLikes';

const showRender = async () => {
  const movies = await fetchAPI('https://api.tvmaze.com/shows');
  const container = document.querySelector('.shows');

  let placeholder = '';
  let id = '';
  for (let i = 0; i < 15; i += 1) {
    const movie = movies[i];
    id = movie.id;
    const [...genre] = movie.genres;
    placeholder += `
      <div class="grid-item">
        <img src="${movie.image.medium}" alt="${movie.name}"/>
        <div class="title">
          <p>${movie.name}</p>
          <div>
            <span class="count">33</span>
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
        <div class="btns">
          <button class="comment-btn btn">Comment</button>
          <button class="reserve-btn btn">Reservation</button>
        </div>
        <div class="popup hide">
          <div class="wrapper">
            <img src="${movie.image.medium}" alt="${movie.name}"/>
            <div class="cross-container">
              <div class="vertical-line"></div>
              <div class="horizontal-line"></div>
            </div>
            <h2>${movie.name}</h2>
            <div class="divider">
              <p>genres:  ${genre}<p>
              <p>language:  ${movie.language}<p>
            </div>
            <div class="divider">
              <p>rating:  ${movie.premiered}<p>
              <p>rating:  ${movie.rating.average}<p>
            </div>

            <p>${movie.summary}</p>
            
          </div>
        
        </div>
      </div>
    `;
  }

  container.innerHTML = placeholder;
  addLikes(id);

  const commentButtons = document.querySelectorAll('.comment-btn');
  commentButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const popup = event.target.parentNode.parentNode.querySelector('.popup');
      popup.classList.toggle('hide');
    });
  });
  const crossx = document.querySelectorAll('.cross-container');
  crossx.forEach((cross) => {
    cross.addEventListener('click', (event) => {
      const popup = event.currentTarget.closest('.popup');
      popup.classList.toggle('hide');
    });
  });
};

export default showRender;

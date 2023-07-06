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
    placeholder += `
        <div class="grid-item">
            <img src="${movie.image.medium}" alt="${movie.name}"/>
            <div class="title">
                <p>${movie.name}</p>
                <div>
                <span class="count">33</span>
                <i class="fa-regular fa-heart like"></i>
                </div>
            </div>
            <div class="btns">
            <button class="comment-btn btn">Comment</button>
            <button class="reserve-btn btn">Reservation</button>
            </div>
        </div> 
    `;
  }

  container.innerHTML = placeholder;
  addLikes(id);
};

export default showRender;
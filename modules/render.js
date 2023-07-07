import fetchAPI from './fetchAPI';
import addLikes from './addLikes';
import popUp from './popUp';
import loadcomments from './loadComments';
import addComments from './addComments';

const showRender = async () => {
  const movies = await fetchAPI('https://api.tvmaze.com/shows');
  const likes = await fetchAPI(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PVsyyzJcjAI3kwRWNz7v/likes',
  );

  const container = document.querySelector('.shows');

  // const comments = await getComments(2);

  // console.log(comments);

  let placeholder = '';
  for (let i = 0; i < 15; i += 1) {
    const movie = movies[i];
    const like = likes[i];
    const [...genre] = movie.genres;
    placeholder += `
      <div class="grid-item" >
        <img src="${movie.image.medium}" alt="${movie.name}"/>
        <div class="title">
          <p>${movie.name}</p>
          <div>
            <span>${parseInt(like.likes, 10)}</span>
            <i class="fa-regular fa-heart like" data-id="${movie.id}"></i>
          </div>
        </div>
        <div class="btns">
          <button class="comment-btn btn">Comment</button>
          <button class="reserve-btn btn">Reservation</button>
        </div>
        <div class="popup hide">
          <div class="wrapper">
            <img src="${movie.image.original}" alt="${movie.name}"/>
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
              <p>premiered:  ${movie.premiered}<p>
              <p>rating:  ${movie.rating.average}<p>
            </div>

            <p>${movie.summary}</p>

            <h3 class="comments-title"></h3>
            <ul class="comments">
              <p>03/11/2021 Alex:I would love to buy it</p>
              <p>03/11/2021 Mia:I love</p>
            </ul>
            
            <h3>Add a comment</h3>
            <div class="comment-input">
              <input type="text" placeholder="Your name" class="user" />
              <input type="text" placeholder="Your insights" class="usercomment" />
              <button class="submit-button">comment</button>
            
            </div>
            
            
          </div>
        
        </div>
      </div>
    `;
  }

  container.innerHTML = placeholder;
  addLikes();
  popUp();
  loadcomments();
  addComments();
};

export default showRender;

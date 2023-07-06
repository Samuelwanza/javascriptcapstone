import postApi from './postAPI';
import showLikes from './showLikes';

const addLikes = () => {
  document.querySelectorAll('.like').forEach((element) => {
    const id = element.getAttribute('data-id');
    element.addEventListener('click', () => {
      const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PVsyyzJcjAI3kwRWNz7v/likes';
      const html = element.previousSibling.previousSibling.innerHTML;
      element.previousSibling.previousSibling.innerHTML = parseInt(html, 10) + 1;
      postApi(url, parseInt(id, 10));
      showLikes();
    });
  });
};

export default addLikes;

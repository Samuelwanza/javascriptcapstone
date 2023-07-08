import postApi from './postAPI';
import { LIKES_API } from '../config';

const addLikes = () => {
  document.querySelectorAll('.like').forEach((element) => {
    const id = element.getAttribute('data-id');
    element.addEventListener('click', () => {
      const html = element.previousSibling.previousSibling.innerHTML;
      element.previousSibling.previousSibling.innerHTML = parseInt(html, 10) + 1;
      postApi(LIKES_API, parseInt(id, 10));
    });
  });
};

export default addLikes;

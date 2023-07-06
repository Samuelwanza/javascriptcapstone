import postApi from './postAPI';

const addLikes = (id) => {
  document.querySelectorAll('.like').forEach((element) => {
    element.addEventListener('click', () => {
      const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HW83hDZPwlonHx3No196/likes';
      postApi(url, id);
    });
  });
};

export default addLikes;

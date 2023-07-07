import createComment from './createComment';

const addComments = async () => {
  document.querySelectorAll('.like').forEach(async (element) => {
    const id = parseInt(element.getAttribute('data-id'), 10);
    element
      .closest('.grid-item')
      .querySelector('.submit-button')
      .addEventListener('click', async () => {
        const user = element.closest('.grid-item').querySelector('.user');
        const usercomment = element
          .closest('.grid-item')
          .querySelector('.usercomment');
        if (user.value !== '' && usercomment.value !== '') {
          await createComment(id, user.value, usercomment.value);
          window.location.reload();
        }
      });
  });
};
export default addComments;

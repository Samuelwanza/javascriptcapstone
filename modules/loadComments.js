import getComments from './getComments';
import formatDate from './formatDate';

const loadcomments = async () => {
  document.querySelectorAll('.like').forEach(async (element) => {
    const id = parseInt(element.getAttribute('data-id'), 10);
    const comments = await getComments(id);

    const commentsTitle = element
      .closest('.grid-item')
      .querySelector('.comments-title');
    commentsTitle.textContent = `Comments(${comments.length})`;

    if (comments.length > 0) {
      const commentsContainer = element
        .closest('.grid-item')
        .querySelector('.comments');

      commentsContainer.innerHTML = '';

      comments.forEach((thiscomment) => {
        const { comment, creation_date: creationdate, username } = thiscomment;

        const formattedDate = formatDate(creationdate);
        const commentHTML = `
          <p>${formattedDate} ${username}: ${comment}</p>
        `;

        commentsContainer.insertAdjacentHTML('beforeend', commentHTML);
      });
    } else {
      const commentsContainer = element.parentElement.nextElementSibling.querySelector('.comments');
      commentsContainer.innerHTML = '';
      const commentHTML = `
          <p>${comments}</p>
        `;

      commentsContainer.insertAdjacentHTML('beforeend', commentHTML);
    }
  });
};

export default loadcomments;

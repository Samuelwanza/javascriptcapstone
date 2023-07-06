const popUp = () => {
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

export default popUp;
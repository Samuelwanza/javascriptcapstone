import fetchAPI from './fetchAPI';

const showLikes = async () => {
  const likes = await fetchAPI('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PVsyyzJcjAI3kwRWNz7v/likes');
  console.log(likes);
  return likes;
};

export default showLikes;
import fetchAPI from './fetchAPI';
import { LIKES_API } from '../config';

const showLikes = async () => {
  const likes = await fetchAPI(LIKES_API);
  return likes;
};

export default showLikes;
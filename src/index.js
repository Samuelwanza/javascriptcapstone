import './styles.css';

import fetchApi from '../modules/fetchAPI';

const movies = await fetchApi('https://api.tvmaze.com/shows');

console.log(movies);

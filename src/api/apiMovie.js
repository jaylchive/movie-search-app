import { KEY, BASE_URL } from '../helper/constants';

export async function getMovie(movie) {
  const res = await fetch(`${BASE_URL}/?apikey=${KEY}&t=${movie}`);
  const data = await res.json();

  return data;
}

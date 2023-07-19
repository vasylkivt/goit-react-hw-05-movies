import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '267e0ef2e56c2254d403c0d4ffe19052';

const getTrendMovieByParam = async param => {
  const response = await axios.get(
    `trending/movie/${param}?api_key=${API_KEY}`
  );
  return response.data.results;
};

const getMovieByMovieId = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

const getMovieCastByMovieId = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
  //  return response.data.cast.sort((prevActor, nextActor) => nextActor.popularity - prevActor.popularity);
};

const getMovieReviewsByMovieId = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};

const searchMovieByQuery = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
};

export const TMDB_API = {
  getTrendMovieByParam,
  getMovieByMovieId,
  getMovieReviewsByMovieId,
  getMovieCastByMovieId,
  searchMovieByQuery,
};

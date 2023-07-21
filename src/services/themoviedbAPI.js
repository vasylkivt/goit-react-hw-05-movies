import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '267e0ef2e56c2254d403c0d4ffe19052';

const getTrendMovieByParam = async (param, controller) => {
  const response = await axios.get(
    `trending/movie/${param}?api_key=${API_KEY}`,
    {
      signal: controller.signal,
    }
  );

  return response.data.results;
};

const getMovieByMovieId = async (movieId, controller) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`, {
    signal: controller.signal,
  });
  return response.data;
};

const getMovieCastByMovieId = async (movieId, controller) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`,
    {
      signal: controller.signal,
    }
  );
  return response.data.cast;
};

const getMovieReviewsByMovieId = async (movieId, controller) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`,
    {
      signal: controller.signal,
    }
  );
  return response.data.results;
};

const searchMovieByQuery = async (query, page, controller) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
    {
      signal: controller.signal,
    }
  );

  return response.data;
};

export const TMDB_API = {
  getTrendMovieByParam,
  getMovieByMovieId,
  getMovieReviewsByMovieId,
  getMovieCastByMovieId,
  searchMovieByQuery,
};

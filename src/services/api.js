import axios from 'axios';
import toast from 'react-hot-toast';

export const BASIC_URL = 'https://api.themoviedb.org/';
export const PERSONAL_KEY = '59483ef1407ef779ba79a4ef6c1e5236'; //Ключ API (v3 auth)
export const PERSONAL_KEY_V4 =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTczMjI4OWZhYWEwMjFiMzAwYzY3YzgwYzM1Y2FkMSIsInN1YiI6IjYyNmU1NzcyMjQ1ZGJlMzM3ZjQzNzgwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nGXh-5GwT2pl8pJ7su6oK_01uD4EgHcGzKoNAn_Ubao';

const getData = async url => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    toast.error('Sorry, We don`t have this film`s information');
  }
};

export const getReviews = movieId => {
  const url = `${BASIC_URL}3/movie/${movieId}/reviews?api_key=${PERSONAL_KEY}&language=en-US&page=1`;
  return getData(url);
};

export const getMovieDetails = movieId => {
  const url = `${BASIC_URL}3/movie/${movieId}?api_key=${PERSONAL_KEY}&language=en-US&page=1`;
  return getData(url);
};

export const getTranding = () => {
  const url = `${BASIC_URL}3/trending/all/day?api_key=${PERSONAL_KEY}`;
  return getData(url);
};

export const getMovies = query => {
  const url = `${BASIC_URL}3/search/movie?api_key=${PERSONAL_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;
  return getData(url);
};

export const getCast = movieId => {
  const url = `${BASIC_URL}3/movie/${movieId}/credits?api_key=${PERSONAL_KEY}&language=en-US`;
  return getData(url);
};

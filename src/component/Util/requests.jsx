const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?language=en-US&api_key=${API_KEY}`,
  fetchNetflixOrginals: `/discover/tv?with_network=213&api_key=${API_KEY}`,
  fetchTopRateMovies: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?with_genres=28&api_key=${API_KEY}`,
  fetchComedyMovies: `/discover/movie?with_genres=35&api_key=${API_KEY}`,
  fetchHorrorMovies: `/discover/movie?with_genres=27&api_key=${API_KEY}`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749&api_key=${API_KEY}`,
  fetchDocumentaryMovies: `/discover/movie?with_genres=99&api_key=${API_KEY}`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}`,
};
export default requests;
import API_KEY from "./apikey";

export const fetchPopularMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?certification_country=US&api_key=${API_KEY}`
  );
  const movies = await response.json();
  return movies.results;
};

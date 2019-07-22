export const loginUser = user => ({
  type: "LOGIN_USER",
  user
});

export const logoutUser = () => ({
  type: "LOGOUT_USER"
});

export const addNewUser = (name, email, password) => ({
  type: "ADD_NEW_USER",
  name,
  email,
  password
});

export const addPopularMovies = movies => ({
  type: "ADD_POPULAR_MOVIES",
  movies
});

export const addRomanceMovies = movies => ({
  type: "ADD_ROMANCE_MOVIES",
  movies
});

export const updatePopularFavorites = popularFavorites => ({
  type: "UPDATE_POPULAR_FAVORITES",
  popularFavorites
});

export const updateRomanceFavorites = romanceFavorites => ({
  type: "UPDATE_ROMANCE_FAVORITES",
  romanceFavorites
});

export const updateMoviePage = movie => ({
  type: "UPDATE_MOVIE_PAGE",
  payload: movie
});

export const updateFavorites = favorites => ({
  type: "UPDATE_FAVORITES",
  favorites
});



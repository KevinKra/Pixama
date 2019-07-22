import { combineReducers } from "redux";
import userReducer from "./userReducer/userReducer";
import favoritesReducer from "./favoritesReducer/favoritesReducer";
import popularMoviesReducer from "./popularMoviesReducer/popularMoviesReducer";
import romanceMoviesReducer from "./romanceMoviesReducer/romanceMoviesReducer";
import { moviePageReducer } from "./moviePageReducer";

const rootReducer = combineReducers({
  currentUser: userReducer,
  favorites: favoritesReducer,
  popularMovies: popularMoviesReducer,
  romanceMovies: romanceMoviesReducer,
  moviePage: moviePageReducer
});

export default rootReducer;

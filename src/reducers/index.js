import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import favoritesReducer from "./favoritesReducer/favoritesReducer";
// import other reducers

const rootReducer = combineReducers({
  currentUser: userReducer,
  favorites: favoritesReducer
});

export default rootReducer;
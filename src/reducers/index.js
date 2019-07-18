import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
// import other reducers

const rootReducer = combineReducers({
  currentUser: userReducer,
});

export default rootReducer;
const romanceMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ROMANCE_MOVIES":
      return action.movies;
    case "UPDATE_ROMANCE_FAVORITES":
      return action.romanceFavorites
    default:
      return state;
  }
};

export default romanceMoviesReducer;

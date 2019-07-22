const popularMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POPULAR_MOVIES":
      return action.movies;
    case "UPDATE_POPULAR_FAVORITES":
      return action.popularFavorites
    default:
      return state;
  }
};

export default popularMoviesReducer;

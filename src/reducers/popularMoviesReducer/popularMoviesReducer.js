const popularMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POPULAR_MOVIES":
      return action.movies;
    case "UPDATE_POPULAR_FAVORITES":
      console.log('popFavs', action.popularFavorites)
      return action.popularFavorites
    default:
      return state;
  }
};

export default popularMoviesReducer;

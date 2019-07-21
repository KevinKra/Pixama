const popularMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POPULAR_MOVIES":
      return action.movies;
    default:
      return state;
  }
};

export default popularMoviesReducer;

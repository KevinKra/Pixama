const romanceMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ROMANCE_MOVIES":
      return action.movies;
    default:
      return state;
  }
};

export default romanceMoviesReducer;

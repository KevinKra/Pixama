export const moviePageReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_MOVIE_PAGE":
      return action.payload;
    default:
      return state;
  }
};

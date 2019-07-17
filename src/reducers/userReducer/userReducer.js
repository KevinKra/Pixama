const userReducer = (state = {}, action) => {
  switch(action.type) {
    case "LOGIN_USER":
      return { ...action.user, loggedIn: true };
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
};

export default userReducer;
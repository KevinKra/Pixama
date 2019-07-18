export const loginUser = (user) => ({
  type: "LOGIN_USER",
  user
});

export const logoutUser = () => ({
  type: "LOGOUT_USER"
});

export const addNewUser = (name, email, password) => ({
  type: "ADD_NEW_USER",
  name,
  email,
  password
});

// export const addFavorite = (movie) => ({
//   type: "ADD_FAVORITE",
//   movie
// });




import API_KEY from "./apikey";

export const fetchPopularMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?certification_country=US&api_key=${API_KEY}`
  );
  const movies = await response.json();
  return movies.results;
};

//This method is not hooked up anywhere at this point
//data must be an object with keys of name, email and password
export const fetchNewUser = (url, data)  => {
  return fetch(url, 
    {
      method: 'POST',
      body: JSON.stringify( data ),
      headers: {
        'Content-Type': 'application/json'
    }
  })
  .then(response=> {
    if(!response.ok) {
      throw new Error ("Email already exists", response.message)
    } else {
      return response.json()
    }
  })
}

//this method is being imported and called in LoginCard component
export const fetchUser = (url, data)  => {

  return fetch(url, 
    {
      method: 'POST',
      body: JSON.stringify( data ),
      headers: {
        'Content-Type': 'application/json'
    }
  })
  .then(response=> {
    if(!response.ok) {
      throw new Error ("Not a valid login",response.message)
    } else {
      return response.json()
    }
  })
}

//Method to add a movie to a user's favorites, this method not hooked up to a component yet
// url in component method needs to be 'http://localhost:3000/api/users/favorites/new'
//data needs to be object like this: {movie_id: 550, user_id: 1, title: "Fight Club", poster_path: "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg" , release_date: "1999-10-15", vote_average:8.4, overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion."}
//response will be the new favorite ID
export const postFavorite = (url, data)  => {
console.log(data)
return fetch(url, 
    {
      method: 'POST',
      body: JSON.stringify( data ),
      headers: {
        'Content-Type': 'application/json'
    }
  })
  .then(response=> {
    if(!response.ok) {
      throw new Error ("Add error",response.message)
    } else {
      return response.json()
    }
  })
};


export const fetchFavorites = (url)  => {

return fetch(url)
  .then(response=> {
    if(!response.ok) {
      throw Error ("Couldn't get favorites",response.message)
    } else {
      return response.json()
    }
  })
};
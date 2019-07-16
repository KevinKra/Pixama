import API_KEY from "./apikey";

export const fetchPopularMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?certification_country=US&api_key=${API_KEY}`
  );
  const movies = await response.json();
  console.log(movies);
};

//This method is not hooked up anywhere at this point
export const addNewUser = (url, data)  => {
//data must be an object with keys of name, email and password
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
      throw Error ("Add error",response.message)
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
      throw Error ("Add error",response.message)
    } else {
      return response.json()
    }
  })
}
import {fetchMovies, fetchNewUser, fetchUser, postFavorite, deleteFavorite, fetchFavorites} from './apiCalls.js';
import API_KEY from "./apikey";

describe('fetchMovies', () => {
  let mockQuery
  let mockMoviesResponse

  beforeEach(() => {
    mockQuery = 'ABC'
    mockMoviesResponse=[{title: 'Fight Club'}, {title: 'Toy Story'}]
  
  window.fetch = jest.fn().mockImplementation(()=> {
    return Promise.resolve({
      ok:true,
      json: () => Promise.resolve(mockMoviesResponse)
    })
  })
  
  })

  it('should be called with correct params and dynamic query', ()=>{
    const expected = `https://api.themoviedb.org/3/discover/movie?certification_country=US&api_key=${API_KEY}${mockQuery}`
    fetchMovies(mockQuery)
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  //failing
  it('should return a parsed response if status is ok', async ()=> {
    const result = await fetchMovies()
    console.log(result)
    expect(result).toEqual(mockMoviesResponse)
  })

  //failing
  it('should return an error if status is not ok', async ()=> {
    window.fetch = jest.fn().mockImplementation(()=> {
      return Promise.resolve({
        ok: false
      })
    })
    await expect(fetchMovies()).rejects.toEqual(Error())
  })

})

describe('fetchNewUser', () => {
  let mockURL
  let mockUserData
  let mockUserResponse

  beforeEach(() => {
    mockURL = "http://localhost:3000/api/users";
    mockUserData = {name: "Taylor", email: "tay@tay.com", password: "1234"}
    mockUserResponse = {id: 1}
  
  window.fetch = jest.fn().mockImplementation(()=> {
    return Promise.resolve({
      ok:true,
      json: () => Promise.resolve(mockUserResponse)
    })
  })
  
  })

  it('should be called with correct params', ()=>{
    const expected = [mockURL, 
      {
        method: 'POST',
        body: JSON.stringify(mockUserData),
        headers: {
          'Content-Type': 'application/json'
        }
      }]
    fetchNewUser(mockURL, mockUserData)
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })

  it('should return a parsed response if status is ok', async ()=> {
    const result = await fetchNewUser(mockURL, mockUserData)
    await expect(result).toEqual(mockUserResponse)
  })

  it('should return an error if status is not ok', async ()=> {
    window.fetch = jest.fn().mockImplementation(()=> {
      return Promise.resolve({
        ok: false
      })
    })
    await expect(fetchNewUser(mockURL, mockUserData)).rejects.toEqual(Error('Email already exists'))
  })

})

describe('fetchUser', () => {
  let mockURL
  let mockUserData
  let mockUserResponse

  beforeEach(() => {
    mockURL = "http://localhost:3000/api/users";
    mockUserData = {email: "tay@tay.com", password: "1234"}
    mockUserResponse = {id: 1, name: "Taylor", email: "tay@tay.com", password: "1234"}
  
  window.fetch = jest.fn().mockImplementation(()=> {
    return Promise.resolve({
      ok:true,
      json: () => Promise.resolve(mockUserResponse)
    })
  })
  
  })

  it('should be called with correct params', ()=>{
    const expected = [mockURL, 
      {
        method: 'POST',
        body: JSON.stringify(mockUserData),
        headers: {
          'Content-Type': 'application/json'
        }
      }]
    fetchUser(mockURL, mockUserData)
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })

  it('should return a parsed response if status is ok', async ()=> {
    const result = await fetchUser(mockURL, mockUserData)
    await expect(result).toEqual(mockUserResponse)
  })

  it('should return an error if status is not ok', async ()=> {
    window.fetch = jest.fn().mockImplementation(()=> {
      return Promise.resolve({
        ok: false
      })
    })
    await expect(fetchUser(mockURL, mockUserData)).rejects.toEqual(Error('Email and password do not match'))
  })

})

describe('postFavorite', () => {
  let mockURL
  let mockMovieData
  let mockFavoriteResponse

  beforeEach(() => {
    mockURL = "http://localhost:3000/api/users";
    mockMovieData = {movie_id: 550, user_id: 1, title: "Fight Club", poster_path: "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg" , release_date: "1999-10-15", vote_average:8.4, overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion."}
    mockFavoriteResponse = {id: 1}
  
  window.fetch = jest.fn().mockImplementation(()=> {
    return Promise.resolve({
      ok:true,
      json: () => Promise.resolve(mockFavoriteResponse)
    })
  })
  
  })

  it('should be called with correct params', ()=>{
    const expected = [mockURL, 
      {
        method: 'POST',
        body: JSON.stringify(mockMovieData),
        headers: {
          'Content-Type': 'application/json'
        }
      }]
    postFavorite(mockURL, mockMovieData)
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })

  it('should return a parsed response if status is ok', async ()=> {
    const result = await postFavorite(mockURL, mockMovieData)
    await expect(result).toEqual(mockFavoriteResponse)
  })

  it('should return an error if status is not ok', async ()=> {
    window.fetch = jest.fn().mockImplementation(()=> {
      return Promise.resolve({
        ok: false
      })
    })
    await expect(postFavorite(mockURL, mockMovieData)).rejects.toEqual(Error('Add error'))
  })

})

describe('deleteFavorite', () => {
  let mockURL
  let mockMovieData
  let mockFavoriteResponse
  let mockID;
  let mockMovieID

  beforeEach(() => {
    mockURL = "http://localhost:3000/api/users";
    mockMovieData = {id:1, movie_id:550}
    mockFavoriteResponse = {id: 1}
  
  window.fetch = jest.fn().mockImplementation(()=> {
    return Promise.resolve({
      ok:true,
      json: () => Promise.resolve(mockFavoriteResponse)
    })
  })
  
  })

  it('should be called with correct params', ()=>{
    const expected = [mockURL, 
      {
        method: 'DELETE',
        body: JSON.stringify(mockMovieData),
        headers: {
          'Content-Type': 'application/json'
        }
      }]
    deleteFavorite(mockURL, mockMovieData)
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })

  it('should return a parsed response if status is ok', async ()=> {
    const result = await deleteFavorite(mockURL, mockMovieData)
    await expect(result).toEqual(mockFavoriteResponse)
  })

  it('should return an error if status is not ok', async ()=> {
    window.fetch = jest.fn().mockImplementation(()=> {
      return Promise.resolve({
        ok: false
      })
    })
    await expect(deleteFavorite(mockURL, mockMovieData)).rejects.toEqual(Error('Delete error'))
  })

})
//fetchFavorites
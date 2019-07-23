import * as actions from './index.js';

describe('actions', ()=>{

  it ('loginUser should have a type of LOGIN_USER', ()=> {
      const user = {email: "test@tests.com", password:"superstrongpassword"};
   
      const expected = {
        type: 'LOGIN_USER',
        user: user
      }

      const result = actions.loginUser(user)

      expect(result).toEqual(expected)
  })

  it ('logoutUser should have a type of LOGOUT_USER', ()=> {
    
    const expected = {
      type: 'LOGOUT_USER',
    }

    const result = actions.logoutUser()

    expect(result).toEqual(expected)

  })

  it ('addNewUser should have a type of ADD_NEW_USER', ()=> {
    const testName = "Fake McTestertown"
    const testEmail= "test@tests.com";
    const testPW = "superstrongpassword";
   
    const expected = {
      type: 'ADD_NEW_USER',
      name: testName,
      email: testEmail,
      password:testPW
    }

    const result = actions.addNewUser(testName, testEmail, testPW)

    expect(result).toEqual(expected)

  })

  it ('addPopularMovies should have a type of ADD_POPULAR_MOVIES', ()=> {
    const testMovies = [{title: "Fight Club"}, {title: "Avengers"}]

    const expected = {
      type: 'ADD_POPULAR_MOVIES',
      movies: testMovies
    }

    const result = actions.addPopularMovies(testMovies)

    expect(result).toEqual(expected)
  })

  
  it('addRomanceMovies should have a type of ADD_ROMANCE_MOVIES', ()=>{
    const testMovies = [{title: "Fight Club"}, {title: "Avengers"}]
    
    const expected = {
      type: 'ADD_ROMANCE_MOVIES',
      movies: testMovies
    }

    const result = actions.addRomanceMovies(testMovies)
  
    expect(result).toEqual(expected)
  })

  it('updatePopularFavorites should have a type of UPDATE_POPULAR_FAVORITES', ()=>{
    const testMovies = [{title: "Fight Club"}, {title: "Avengers"}]
    
    const expected = {
      type: 'UPDATE_POPULAR_FAVORITES',
      popularFavorites: testMovies
    }

    const result = actions.updatePopularFavorites(testMovies)
  
    expect(result).toEqual(expected)
  })


  it('updateRomanceFavorites should have a type of UPDATE_ROMANCE_FAVORITES', ()=>{
    const testMovies = [{title: "Fight Club"}, {title: "Avengers"}]
    
    const expected = {
      type: 'UPDATE_ROMANCE_FAVORITES',
      romanceFavorites: testMovies
    }

    const result = actions.updateRomanceFavorites(testMovies)
  
    expect(result).toEqual(expected)
  })

  it('updatFavorites should have a type of UPDATE_FAVORITES', ()=>{
    const testMovies = [{title: "Fight Club"}, {title: "Avengers"}]
    
    const expected = {
      type: 'UPDATE_FAVORITES',
      favorites: testMovies
    }

    const result = actions.updateFavorites(testMovies)
  
    expect(result).toEqual(expected)
  })

})
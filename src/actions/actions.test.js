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

  it ('getFavorites should have a type of GET_FAVORITES', ()=> {
    const testFaves = [{title: "Fight Club"}, {title: "Avengers"}]

    const expected = {
      type: 'GET_FAVORITES',
      favorites: testFaves
    }

    const result = actions.getFavorites(testFaves)

    expect(result).toEqual(expected)

  })

  it('cleanPopularMovies should have a type of CLEAN-POPULAR-MOVIES', ()=>{
    const testMovies = [{title: "Fight Club"}, {title: "Avengers"}]
    
    const expected = {
      type: 'CLEAN_POPULAR_MOVIES',
      popMovies: testMovies
    }

    const result = actions.cleanPopularMovies(testMovies)
  
    expect(result).toEqual(expected)
  })

  





})
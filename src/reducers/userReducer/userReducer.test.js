import userReducer from './userReducer.js'

describe('userReducer', ()=> {
  it('should return the initial state', ()=> {
      const expected = {};
      const result = userReducer(undefined, {})
      expect(result).toEqual(expected)
    })

  

  it('should return a current user and add loggedIn property', ()=> {
    const testAction = {
      type: 'LOGIN_USER',
      user: {name: "Taylor", email: "tay@tay.com", pasword: "password"}
    }
    const expected = {name: "Taylor", email: "tay@tay.com", pasword: "password", loggedIn: true};
    const result = userReducer({}, testAction)
    expect(result).toEqual(expected)

  })


  it('should remove user upon logout', ()=> {
    const testAction = {
      type: 'LOGOUT_USER', 
    }
    const expected = {};
    const result = userReducer({}, testAction)
    expect(result).toEqual(expected)

  })
})
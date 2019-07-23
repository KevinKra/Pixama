import { LoginCard, mapDispatchToProps, mapStateToProps } from './LoginCard';
import { loginUser, updatePopularFavorites, updateRomanceFavorites, updateFavorites} from '../../actions';
import React from 'react';
import { shallow } from 'enzyme';
import * as apiCalls from '../../api/apiCalls';

jest.mock("../../api/apiCalls", () => ({
  fetchUser: jest.fn().mockImplementation(()=> {
    return Promise.resolve({id: 1, name: "fake", emai: "fake", password: "fake"})
  }),
  fetchFavorites: jest.fn().mockImplementation(() => {
    return Promise.resolve({title:'Toy Story'},{title: 'Fight Club'})
  })
}))

const mockLoginUser = jest.fn()

describe ('LoginCard', ()=> {
  describe('LoginCard component', () => {
  let wrapper;
  let instance;

  beforeEach(()=> {
    wrapper = shallow(<LoginCard loginUser={mockLoginUser} />)
    instance = wrapper.instance()
  })

   //UI Test
  it('should match the snapshot', () => {
    wrapper = shallow(<LoginCard />)
    expect(wrapper).toMatchSnapshot()
  })
    
   //component tests

  it('should have a default state', ()=> {
    const expected = {
      email:"",
      password:"",
      error: "",
      redirect: false
    }
    expect(wrapper.state()).toEqual(expected)
  })

  it ('should update state when handleChange is called', ()=> {
    const mockEvent = {target: {name: "email", value: "email@address.com"}}
    const expected = 'email@address.com'
    instance.handleChange(mockEvent)
    expect(wrapper.state('email')).toEqual(expected)
  })

  describe("onSubmit function", () => {

    it.skip('should call the onSubmit method when the login button is clicked', ()=>{
      //async?
  })

    it("should invoke fetchUser with the correct params", async () => {
      const url = "http://localhost:3000/api/users"
      const arg = {"email": "", "password": ""}
      await instance.onSubmit()
      expect(apiCalls.fetchUser).toHaveBeenCalledWith(url, arg)
    })

    it.skip("should invoke loginUser with the result of the fetch", async () => {
      const mockFn = jest.spyOn( instance, 'populateFavorites')
      await instance.onSubmit();
      expect(mockFn).toHaveBeenCalled(); 
    })

    it('should invoke populateFavorites with an id', ()=> {


    })

  it.skip('sets an error when the fetch fails', async () => {

    //   jest.mock("../../api/apiCalls", () => ({

    //   fetchUser: jest.fn().mockImplementation(()=> {
    //     return Promise.reject(new Error("Error fetching"))
    //   })
    // })

    const mockData = {name: "blahhhh"} 
    await  wrapper.instance().fetchUser(mockData)
    expect(wrapper.state('error')).toEqual("Email and password do not match")
    })
    
  })

  describe('clearForm', ()=> {

    it('should reset email and password in state when clearForm is called', ()=>{
      const expected = {email: "", password: "", error: "", redirect: false}
      instance.setState({email: 'pug@pugs.com', password: 'pugs'})
      instance.clearForm()
      expect(wrapper.state()).toEqual(expected)
      })
  });



describe('populateFavorites', ()=> { 
//fetch Favorite is called
//set an error
it ('should call ClearForm when onSubmit is called', async ()=> {
  instance.clearForm = jest.fn()
  await instance.populateFavorites()
  expect(instance.clearForm).toHaveBeenCalled()
})

})

  //renderRedirect

  it.skip('renderRedirect should return a Redirect is state.redirect ===true', ()=>{

  })

})

  //MDTP
  describe('mapStateToProps', ()=> { 
    
    it('should return objects with the popular, romance and favorite movies array', () => {
      const mockState = {
          currentUser: {name: "Anneke"},
          popularMovies: [{tite: "Fight Club"}],
          romanceMovies: [{tite: "Casablanca"}],
          favorites: [{tite: "Fight Club"}]
        }
        const expected = {
          popularMovies: [{tite: "Fight Club"}],
          romanceMovies: [{tite: "Casablanca"}],
          favorites: [{tite: "Fight Club"}]
        }
        const mappedProps = mapStateToProps(mockState)
  
        expect(mappedProps).toEqual(expected)
      })
      });
    
 
  

  describe('mapDispatchToProps', ()=> {
    it('calls dispatch with a loginUser action when onSubmit is called',()=>{

      const mockDispatch = jest.fn()
      const actionToDispatch = loginUser({name:"Taylor", email: "fake@test.com", password: "blahhhh"})
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.loginUser({name:"Taylor", email: "fake@test.com", password: "blahhhh"})
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('calls dispatch with a updatePopularFavorites action when onSubmit is called',()=>{
      const mockDispatch = jest.fn()
      const actionToDispatch = updatePopularFavorites([{title: "Fight Club"}])
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.updatePopularFavorites([{title: "Fight Club"}])
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('calls dispatch with a updateRomanceFavorites action when onSubmit is called',()=>{
      const mockDispatch = jest.fn()
      const actionToDispatch = updateRomanceFavorites([{title: "Fight Club"}])
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.updateRomanceFavorites([{title: "Fight Club"}])
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('calls dispatch with a updateFavorites action when onSubmit is called',()=>{
      const mockDispatch = jest.fn()
      const actionToDispatch = updateFavorites([{title: "Fight Club"}])
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.updateFavorites([{title: "Fight Club"}])
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  
  });

});



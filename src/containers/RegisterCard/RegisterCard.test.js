//Things to test in containers:
// component, mapstatetoprops, mapdispatchtoprops
import { RegisterCard, mapDispatchToProps } from './RegisterCard';
import { loginUser } from '../../actions';
import React from 'react';
import { shallow } from 'enzyme';
import "../../api/apiCalls";

jest.mock("../../api/apiCalls", () => ({
  fetchUser: jest.fn().mockImplementation(()=> {
    return Promise.resolve({id: 1, name: "fake", emai: "fake", password: "fake"})
  })
}))

describe('RegisterCard', ()=> {
  describe('RegisterCard component', () => {
  let wrapper;
  let instance;

  beforeEach(()=> {
    wrapper = shallow(<RegisterCard />)
    instance = wrapper.instance()
  })

   //UI Test
  it('should match the snapshot', () => {
    wrapper = shallow(<RegisterCard />)
    expect(wrapper).toMatchSnapshot()
  })
    
   //component method tests
    it ('should update state when handleChange is called', ()=> {
    const mockEvent = {target: {name: "email", value: "email@address.com"}}
    const expected = 'email@address.com'
    instance.handleChange(mockEvent)
    expect(wrapper.state('email')).toEqual(expected)
  })

  it ('should update state when ClearForm is called', ()=> {
    instance.clearForm()
    expect(wrapper.state('email')).toEqual('')
    expect(wrapper.state('name')).toEqual('')
    expect(wrapper.state('password')).toEqual('')
  })

    //button event => calls onSubmit
  it.skip('should call the onSubmit method when the submit button is clicked', ()=>{
      //async?
    })

    it.skip('should return a Redirect component if redirect in state is true', ()=> {
    
    })

  });

  describe('mapDispatchToProps', ()=>{
    it('calls dispatch with a loginUser action when onSubmit is called',()=>{

      const mockDispatch = jest.fn()
      const actionToDispatch = loginUser({name:"Taylor", email: "fake@test.com", password: "blahhhh"})
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.loginUser({name:"Taylor", email: "fake@test.com", password: "blahhhh"})
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    // it('calls dispatch with a updatePopularFavorites action when onSubmit is called',()=>{
    //   const mockDispatch = jest.fn()
    //   const actionToDispatch = updatePopularFavorites([{title: "Fight Club"}])
    //   const mappedProps = mapDispatchToProps(mockDispatch)
    //   mappedProps.updatePopularFavorites([{title: "Fight Club"}])
    //   expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    // });

    // it('calls dispatch with a updateRomanceFavorites action when onSubmit is called',()=>{
    //   const mockDispatch = jest.fn()
    //   const actionToDispatch = updateRomanceFavorites([{title: "Fight Club"}])
    //   const mappedProps = mapDispatchToProps(mockDispatch)
    //   mappedProps.updateRomanceFavorites([{title: "Fight Club"}])
    //   expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    // });

  });


})
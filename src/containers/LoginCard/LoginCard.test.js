//Things to test in containers:
// component, mapstatetoprops, mapdispatchtoprops

import { LoginCard, mapDispatchToProps }from './LoginCard';
import { loginUser, updatePopularFavorites, updateRomanceFavorites} from '../../actions';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('LoginCard', ()=> {
  describe('LoginCard component', ()=> {
    //regular component tests go here
  let wrapper;

   //UI Test
  it('should match the snapshot', ()=> {
    wrapper = shallow(<LoginCard />)
    expect(wrapper).toMatchSnapshot()
  })
    
   //component method tests
  it.skip('should update state when handleChange is called', ()=> {

  })

  it.skip('should update state when ClearForm is called', ()=> {

  })

    //button event => calls onSubmit
  it.skip('should call the onSubmit method when the submit button is clicked', ()=>{
      //async?
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

  });


})
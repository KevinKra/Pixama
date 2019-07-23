import React from "react";
import { NavBar } from "./NavBar";
import { shallow } from "enzyme";

describe('NavBar', () => {
  let wrapper;
  let instance;
  

  it("should match a snapshot", () => {
    wrapper = shallow(
      <NavBar loggedIn={false} location={{ pathname: "/mainpage" }} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state of opacity false', () => {
    wrapper = shallow(
      <NavBar loggedIn={false} location={{ pathname: "/mainpage" }} />
    );
    expect(wrapper.state('opacity')).toEqual(false);
  });

  it ('should have a property of loggedIn as false', () => {
    wrapper = shallow(
      <NavBar loggedIn={false} location={{ pathname: "/mainpage" }} />
    );
    instance = wrapper.instance();

    expect(instance.props.loggedIn).toEqual(false);
  });

  it.skip('should call addEventListener with scroll on mount', () => {
    const mockListener = { addEventListener: jest.fn() };
    jest
      .spyOn(document, "addEventListener")
      .mockImplementation(() => mockListener);
    wrapper = shallow(
      <NavBar loggedIn={false} location={{ pathname: "/mainpage" }} />
    );
    instance = wrapper.instance();

    expect(
      window.addEventListener("scroll", mockListener)
    ).toHaveBeenCalled();
  });

  it.skip('should call handleClick on click', async () => {
    wrapper = shallow(
      <NavBar loggedIn={true} location={{ pathname: "/mainpage" }} />
    );
    instance = wrapper.instance();

    instance.handleClick = jest.fn();

    wrapper.find('.logout').simulate('click');
    expect(instance.handleClick).toHaveBeenCalled();
  });

  it("should call logoutUser on click", () => {
    wrapper = shallow(
      <NavBar loggedIn={true} location={{ pathname: "/mainpage" }} logoutUser={jest.fn()} />
    );
    instance = wrapper.instance();

    wrapper.find(".logout").simulate("click");
    expect(instance.props.logoutUser).toHaveBeenCalled();
  });
  
});

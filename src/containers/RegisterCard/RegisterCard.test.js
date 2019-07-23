import React from "react";
import { RegisterCard } from "./RegisterCard";
import { shallow } from "enzyme";
import * as apiCalls from '../../api/apiCalls';
import { Redirect } from "react-router-dom";

describe('RegisterCard', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<RegisterCard loginUser={jest.fn()} />);
    instance = wrapper.instance();
  });

  it("should match a snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    const mockState = {
      email: "",
      password: "",
      name: "",
      error: "",
      redirect: false
    }
    expect(instance.state).toEqual(mockState);
  });

  it ('should call handleChange and update state', () => {
    const mockEvent = {
      target: {
        name: "name",
        value: "Steve"
      }
    };
    wrapper.find(".register-name-input").simulate('change', mockEvent);
    expect(instance.state.name).toEqual("Steve");
  });

  it.skip('should call fetchNewUser with the correct url', async () => {
    // jest.spyOn(apiCalls, 'fetchNewUser')
    apiCalls.fetchNewUser = jest.fn()
    const newUserData = {
      name: "Taylor",
      email: "tman2272@aol.com",
      password: "password",
    };
    const url = "http://localhost:3000/api/users/new";

    wrapper.find(".register-submit-btn").simulate("click");
    await expect(apiCalls.fetchUser).toHaveBeenCalledWith(url, newUserData);
  });

  it ('should clear form', () => {
    instance.setState({
      email: "tman2272@aol.com",
      password: "password",
      name: "Taylor",
    });

    const expected = {
      email: "",
      error: "",
      password: "",
      name: "",
      redirect: false
    };

    instance.clearForm();
    expect(instance.state).toEqual(expected);
  });

  it ('should return a redirect', () => {
    instance.setState({ redirect: true });
    const expected = <Redirect to="/" />;
    const result = instance.renderRedirect();
    expect(result).toEqual(expected);
  });

  it ('should render error if there is one', () => {
    instance.setState({ error: "test is not passing"});

    expect(wrapper).toMatchSnapshot();
  });
  
});

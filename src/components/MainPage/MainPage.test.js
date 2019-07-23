import { MainPage } from "./MainPage";
import React from "react";
import { shallow } from "enzyme";
import * as apiCalls from "../../api/apiCalls";

describe('MainPage', () => {
  let wrapper;
  let instance;
  let props = {
    popularMovies: [],
    romanceMovies: [],
    favorites: [{ title: "movie1" }, { title: "movie2" }],
    addPopularMovies: jest.fn(),
    addRomanceMovies: jest.fn(),
    updateFavorites: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<MainPage {...props} />);
    instance = wrapper.instance();
  });

  it ('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call fetchMovies twice on mount', async () => {
    // instance.componentDidMount();
    const popMovies = await apiCalls.fetchMovies('');
    const romMovies = await apiCalls.fetchMovies('');
    expect(apiCalls.fetchMovies).toHavevBeenCalledTimes(2);
  });
})

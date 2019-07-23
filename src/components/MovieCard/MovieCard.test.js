import { MovieCard } from "./MovieCard";
import React from "react";
import { shallow } from "enzyme";
import * as apiCalls from "../../api/apiCalls";

describe("MovieCard", () => {
  let wrapper;
  let instance;
  let props = {
    updatePopularFavorites: jest.fn(),
    updateRomanceFavorites: jest.fn(),
    updateMoviePage: jest.fn(),
    updateFavorites: jest.fn(),
    popularMovies: [{ id: 1 }, { id: 2 }],
    romanceMovies: [{ id: 3 }, { id: 4 }],
    favorites: [{ id: 5 }, { id: 6 }],
    isFavorite: false,
    id: 3,
    history: [],
    currentUser: { id: 5, loggedIn: true },
    title: "movie title",
    poster: "path",
    releaseDate: "11/25/1989",
    popularity: 7.2,
    overview: "its good",
    backdrop: "string",
    language: "english"
  };

  beforeEach(() => {
    wrapper = shallow(<MovieCard {...props} />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip("should call fetchMovies twice on mount", async () => {
    // instance.componentDidMount();
    const popMovies = await apiCalls.fetchMovies("");
    const romMovies = await apiCalls.fetchMovies("");
    expect(apiCalls.fetchMovies).toHavevBeenCalledTimes(2);
  });
});

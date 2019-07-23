import { Carousel } from "./Carousel";
import React from "react";
import { shallow } from "enzyme";

describe("Carousel", () => {
  let wrapper;
  let instance;
  const mockPopMovies = [{ title: "movie 1" }, { title: "movie 2" }];
  const mockRomMovies = [{ title: "movie 1" }, { title: "movie 2" }];
  const mockFavs = [{ title: "movie 1" }, { title: "movie 2" }];

  beforeEach(() => {
    wrapper = shallow(<Carousel title={"Favorites"} genre={"favorites"} popularMovies={mockPopMovies} romanceMovies={mockRomMovies} favorites={mockFavs} />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it ('should have default state', () => {
    expect (wrapper.state('movies')).toEqual(mockFavs);
  });

  it ('should not render movie cards if data hasnt yet been fetched', () => {
    wrapper = shallow(
      <Carousel
        title={"Favorites"}
        genre={"favorites"}
        popularMovies={mockPopMovies}
        romanceMovies={mockRomMovies}
        favorites={[]}
      />);

    expect(wrapper).toMatchSnapshot();
  });

  
});

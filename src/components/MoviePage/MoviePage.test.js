import { MoviePage } from "./MoviePage";
import React from "react";
import { shallow } from "enzyme";
import * as apiCalls from "../../api/apiCalls";


describe("MoviePage", () => {
  let wrapper;
  let instance;
  let mockMoviePage = {
    poster_path: "awregawg",
    backdrop_path: "argas",
    overview: "asrg",
    original_title: "gkudjy",
    original_language: "dfyjdf",
    release_date: "gf,sbd",
    runtime: "dfbs",
    status: "dsbsdb",
    revenue: 1343,
    tagline: "sdfbsd",
    vote_average: 314,
    production_companies: [
      { logo_path: "woiurhgwr" },
      { logo_path: "WDwd" }
    ],
    id: 123
  };

  beforeEach(() => {
    wrapper = shallow(<MoviePage moviePage={mockMoviePage} />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it ('should toggle displayPoster in state with togglePoster', () => {
    const before = wrapper.state("displayPoster");
    instance.togglePoster();
    const after = wrapper.state("displayPoster");
    expect (before).not.toEqual(after);
  });
  
});
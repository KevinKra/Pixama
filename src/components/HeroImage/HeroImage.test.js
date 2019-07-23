import HeroImage from "./HeroImage";
import React from "react";
import { shallow } from "enzyme";

describe('HeroImage', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<HeroImage />);
    instance = wrapper.instance();
  });

  it ('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import React, { useState } from "react";
import { shallow, mount } from "enzyme";
import { Link } from "react-router-dom";
import Inputs from "../Inputs";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        title: "Frontend Frontend Developer",
        id: "0443c998-b07a-43f7-8b4d-2679116ab3c0",
      }),
  })
);

const jobsData = {
  id: "0443c998-b07a-43f7-8b4d-2679116ab3c0",
  title: "Frontend Frontend Developer",
};

describe("test input components if it render correctly ", () => {
  it("change event ", () => {
    const wrapper = shallow(<Inputs />);
    wrapper
      .find(".nameInput")
      .simulate("change", { target: { value: "Amin" } });
    expect(wrapper.find(".nameInput").props().value).toEqual("Amin");
  });

  it("change event ", () => {
    const wrapper = shallow(<Inputs />);
    wrapper
      .find(".nameInput")
      .simulate("change", { target: { value: "Amin" } });
    expect(wrapper.find(".nameInput").props().value).not.toEqual("Marwa");
  });

  it("fetch ", () => {
    const wrapper = shallow(<Inputs />);
    wrapper
      .find(".nameInput")
      .simulate("change", { target: { value: "redux" } });
    wrapper.find(".button").simulate("click");
    expect(wrapper.find("li ")).toContain("Frontend Frontend Developer");

    console.log(wrapper.debug());
  });
});

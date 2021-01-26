import React, { useState } from "react";
import { shallow, mount } from "enzyme";

import Inputs from "../Inputs";
import Button from "../Button";
import RenderData from "../RenderData";
import DetailPage from "../DetailPage";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { UserContext } from "../../contexts/UserContextProvider";
import { useHistory } from "react-router-dom";
const data = {
  company: "Alexander Thamm GmbH",
  company_logo:
    "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbW1XIiwiZXhwIjpud",
  company_url: "https://www.alexanderthamm.com/de/",
  created_at:
    "Fri Jan 22 12:00:35 UTC 2021thamm.join.com/jobs/1776286-expert-data-engineer-m-w-d?pid=71fbd6149a",
  id: "056eb12e-6c6d-44a7-ad91-e69133743c98",
  location: "Munich, Berlin, Leipzig, Stuttgart, Frankfurt",
  title: "Expert Data Engineer (m/w/d)",
  type: "Full Time",
  url: "https://jobs.github.com/positions/056eb12e-6c6d-44a7-ad91-e69133743c98",
};

describe("Test input components if it renders correctly ", () => {
  it(" it uppdate the value onChange", () => {
    const wrapper = shallow(<Inputs />);
    wrapper.find(".nameInput").simulate("change", { target: { value: "me" } });
    expect(wrapper.find(".nameInput").props().value).toEqual("me");
  });

  it(" it should fail if the value is wrong ", () => {
    const wrapper = shallow(<Inputs />);
    wrapper.find(".nameInput").simulate("change", { target: { value: "me" } });
    expect(wrapper.find(".nameInput").props().value).not.toEqual("Not me");
  });

  describe("Button Component", () => {
    it(" check if it retrun the correct value ", () => {
      const wrapper = shallow(<Inputs />);
      wrapper
        .find(".nameInput")
        .simulate("change", { target: { value: "redux" } });

      expect(wrapper.find("Button").props().inputValue).toContain("redux");
    });
  });
  describe("inputs", () => {
    const test = { className: "searchBtn", inputValue: "" };
    it("if it has the correct props", () => {
      const wrapper = shallow(<Inputs />);
      expect(wrapper.find("Button").props()).toStrictEqual(test);
    });
  });

  describe("Button components", () => {
    const LinkData = {
      pathname: "/detailpage",
      state: { id: "056eb12e-6c6d-44a7-ad91-e69133743c98" },
    };

    it("if it has the corret props ", () => {
      const wrapper = shallow(<Button />);
      expect(wrapper.find("renderData").props()).toStrictEqual({
        DataObj: undefined,
        className: "tester",
      });
    });

    it("if it returns the correct data through props ", () => {
      const wrapper = shallow(<RenderData DataObj={[data]} />);
      expect(wrapper.find("Link").text()).toContain(data.title);
    });
    it("if the props value is eqaul to empty array", () => {
      const wrapper = shallow(<RenderData DataObj={[]} />);
      expect(wrapper.find(".warning").text()).toContain("No jobs found");
    });

    it("if the link contain the correct path and state", () => {
      const wrapper = shallow(<RenderData DataObj={[data]} />);
      expect(wrapper.find("Link").props().to).toEqual(LinkData);
    });
  });

  it("expect link to contain", () => {
    const wrapper = shallow(<RenderData DataObj={[data]} />);
    expect(wrapper.find("Link").text()).toContain(
      "Expert Data Engineer (m/w/d)"
    );
  });
  it("expect link to contain", () => {
    const wrapper = shallow(<RenderData DataObj={[data]} />);
    expect(wrapper.find("Link").text()).not.toEqual("sista Testen");
  });
});

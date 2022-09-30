import React from "react";
import renderer from "react-test-renderer";

import Home from "../../../src/screens/home/Home";

const mockedNavigation = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
  };
});

describe("<Home />", () => {
  beforeEach(() => {
    mockedNavigation.mockClear();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

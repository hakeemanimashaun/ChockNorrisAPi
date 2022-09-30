import React from "react";
import renderer, { act } from "react-test-renderer";

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

  it("button press navigates", () => {
    const tree = renderer.create(<Home />);
    const button = tree.root.findByProps({ testID: "cartegory" });
    act(() => button.props.onPress());
    expect(mockedNavigation).toHaveBeenCalledWith("Details");
  });
});

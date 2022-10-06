import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./Tabs";

const RootNavigator = () => (
  <NavigationContainer>
    <BottomTabs />
  </NavigationContainer>
);

export default RootNavigator;

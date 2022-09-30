import { StatusBar } from "expo-status-bar";
import * as React from "react";

import RootNavigator from "./src/navigation/index";

const App = () => {
  return (
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
  );
};

export default App;

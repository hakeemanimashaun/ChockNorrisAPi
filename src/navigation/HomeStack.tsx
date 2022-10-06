import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home/Home";
import Details from "../screens/details/Details";
import { HomeStackNavigatorParamList } from "./Types";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{ headerTitle: "Cartegories" }}
    />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={{ headerTitle: "Jokes" }}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;

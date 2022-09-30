import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BottomTabNavigatorParamList } from "./Types";
import HomeStackNavigator from "./HomeStack";
import Results from "../screens/results/Results";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity } from "react-native";
import { Title } from "./components/styled";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <Ionicons
              style={[
                {
                  transform: props.focused
                    ? [{ rotate: "45deg" }, { scale: 1.5 }]
                    : [{ rotate: "0deg" }],
                },
              ]}
              name="home"
              size={25}
              color={"black"}
            />
          ),
          tabBarLabel: (props) => (
            <Title style={{ marginTop: props.focused ? 5 : 0 }}>home</Title>
          ),
        }}
      />
      <Tab.Screen
        name="Results"
        component={Results}
        options={{
          headerTitle: "Results",
          tabBarIcon: (props) => (
            <Ionicons
              style={[
                {
                  transform: props.focused
                    ? [{ rotate: "45deg" }, { scale: 1.5 }]
                    : [{ rotate: "0deg" }],
                },
              ]}
              name="albums"
              size={23}
              color="black"
            />
          ),
          tabBarLabel: (props) => <Title>results</Title>,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

import { createStackNavigator } from "@react-navigation/stack";

const Stacks = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="Home" component={BottomTabNavigation} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}

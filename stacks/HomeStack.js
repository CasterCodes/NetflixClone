import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, MovieDetailsScreen } from "../screens";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

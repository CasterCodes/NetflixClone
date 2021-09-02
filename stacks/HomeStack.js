import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, MovieDetailsScreen } from "../screens";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailsScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerLeft: () => {
            return (
              <AntDesign
                name="left"
                size={24}
                color="white"
                onPress={() => navigation.push("HomeScreen")}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

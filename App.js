import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

import { createStackNavigator } from "@react-navigation/stack";
import {
  LoaderScreen,
  IntroductionScreen,
  SignupScreen,
  SigninScreen,
} from "./screens";

import { AntDesign } from "@expo/vector-icons";

import { Text, View, Image } from "react-native";

const Stacks = createStackNavigator();

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  if (loading) return <LoaderScreen />;

  if (!user)
    return (
      <NavigationContainer>
        <StatusBar type="light" />
        <Stacks.Navigator initialRouteName="Intro">
          <Stacks.Screen
            name="Intro"
            component={IntroductionScreen}
            options={{ headerShown: false }}
          />
          <Stacks.Screen
            name="Signup"
            component={SignupScreen}
            setUser={setUser}
            options={{
              headerShown: false,
            }}
          />
          <Stacks.Screen
            name="Signin"
            component={SigninScreen}
            options={{
              title: "",
              headerStyle: { backgroundColor: "black" },
              headerLeft: () => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 8,
                    }}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                    <Image
                      source={require("./assets/images/logo.png")}
                      style={{
                        aspectRatio: 2 / 1,
                        width: 150,
                        height: 70,
                      }}
                    />
                  </View>
                );
              },
            }}
          />
        </Stacks.Navigator>
      </NavigationContainer>
    );

  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="Home" component={BottomTabNavigation} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}

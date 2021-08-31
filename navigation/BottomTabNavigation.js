import React from "react";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  HomeScreen,
  DownloadsScreen,
  SearchScreen,
  CommingSoonScreen,
} from "../screens";

import { HomeStack } from "../stacks";
const BottomTabs = createMaterialBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <BottomTabs.Navigator initialRouteName="TabOne">
      <BottomTabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarColor: "black",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign color={color} size={24} name="home" />
          ),
        }}
      />
      <BottomTabs.Screen
        name="CommingSoon"
        component={CommingSoonScreen}
        options={{
          tabBarColor: "black",
          tabBarLabel: "Comming Soon",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="video-library" color={color} size={24} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarColor: "black",
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Downloads"
        component={DownloadsScreen}
        options={{
          tabBarColor: "black",
          tabBarLabel: "Downloads",
          tabBarIcon: ({ color }) => (
            <AntDesign name="download" size={24} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabNavigation;

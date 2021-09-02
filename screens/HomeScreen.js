import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, FlatList } from "react-native";
import category from "../assets/data/categories";
import { MoviesCategory } from "../components";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: "black" }}>
      <FlatList
        data={category.items}
        renderItem={({ item }) => (
          <MoviesCategory category={item} navigation={navigation} />
        )}
      />
      <StatusBar style="light" />
    </View>
  );
};

export default HomeScreen;

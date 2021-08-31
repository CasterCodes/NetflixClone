import React from "react";
import { View, FlatList } from "react-native";
import category from "../assets/data/categories";
import { MoviesCategory } from "../components";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: "black" }}>
      <FlatList
        data={category.items}
        renderItem={({ item }) => <MoviesCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;

import React from "react";
import { FlatList, Image, Text, StyleSheet, View } from "react-native";

const MoviesCategory = ({ category }) => {
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <Image style={styles.image} source={{ uri: item.poster }} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 250,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default MoviesCategory;

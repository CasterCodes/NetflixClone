import React from "react";
import {
  FlatList,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";

const MoviesCategory = ({ category, navigation }) => {
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <Pressable
              onPress={() => navigation.push("MovieDetail", { id: item.id })}>
              <Image style={styles.image} source={{ uri: item.poster }} />
            </Pressable>
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

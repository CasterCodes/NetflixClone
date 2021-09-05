import React from "react";

import { View, Text, StyleSheet, TextInput } from "react-native";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search For Movies</Text>
      <TextInput
        placeholder="Search for movie"
        style={styles.textIput}
        placeholderTextColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 65,
    paddingHorizontal: 10,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  textIput: {
    borderColor: "gray",
    borderWidth: 1 / 2,
    marginTop: 24,
    padding: 12,
    borderRadius: 3,
  },
});
export default SearchScreen;

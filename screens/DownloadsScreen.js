import React from "react";

import { View, Text, Button, Pressable, StyleSheet } from "react-native";

const DownloadsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Introducing Downloads for you</Text>
      <Text style={styles.subtitle}>
        We'll download a personalized selection of movies and shows you, so
        there's always something to watch on your phone
      </Text>
      <View>
        <Pressable
          style={{ backgroundColor: "#146fde", padding: 16, marginTop: 24 }}>
          <Text style={{ color: "white", textAlign: "center" }}>SET UP</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#33363b",
            padding: 16,
            marginTop: 24,
            width: 335,
            marginHorizontal: 4,
          }}>
          <Text style={{ color: "white", textAlign: "center" }}>
            Find More to Download
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
    marginVertical: 12,
    fontSize: 17,
  },
});

export default DownloadsScreen;

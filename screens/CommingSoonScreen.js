import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import movies from "../assets/data/movies";

const CommingSoonScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Comming Soon</Text>
      </View>
      <View>
        <FlatList
          data={movies.items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View key={item.id}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.iconContainer}>
                <View></View>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      marginRight: 16,
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <AntDesign name="infocirlceo" size={20} color="white" />
                    <Text style={{ color: "white", fontSize: 12 }}>
                      Remind Me
                    </Text>
                  </View>
                  <View
                    style={{
                      marginRight: 16,
                      alignItems: "center",
                      justifyContent: "center",
                      width: 20,
                    }}>
                    <Feather name="bell" size={20} color="white" />
                    <Text style={{ color: "white", fontSize: 12 }}>Info</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.plot}>{item.plot}</Text>
              <Text style={{ color: "white", fontSize: 18 }}>
                {item.genre.split(",").join("  .")}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
  },
  header: {
    position: "absolute",
    paddingTop: 45,
    zIndex: 200,
    justifyContent: "center",
    backgroundColor: "black",
    width: "100%",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 8,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  plot: {
    color: "gray",
    fontSize: 16,
    lineHeight: 24,
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    height: 350,
    marginTop: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
});
export default CommingSoonScreen;

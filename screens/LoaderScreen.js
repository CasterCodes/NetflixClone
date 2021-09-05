import React from "react";
import { ActivityIndicator, View, Text, Image } from "react-native";

const LoaderScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Image
        style={{
          height: 300,
          resizeMode: "contain",
          aspectRatio: 1 / 1,
        }}
        source={require("../assets/images/logo.png")}
      />
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default LoaderScreen;

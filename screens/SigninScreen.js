import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ flex: 0.8, justifyContent: "center" }}>
        <TextInput
          style={styles.inputText}
          placeholder="Email or phone number"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="gray"
        />
        <TouchableOpacity style={[styles.startButton, { width: "95%" }]}>
          <Text style={styles.buttonText}> Sign In</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 0.4,
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
          <Text style={{ color: "white", marginVertical: 20 }}>
            Need help ?
          </Text>
          <Text
            style={{
              color: "white",
              alignItems: "center",
              fontWeight: "bold",
            }}>
            New to Netflix?{" "}
            <Text
              style={{ color: "white", marginRight: 6 }}
              onPress={() => navigation.navigate("Signup")}>
              Sign up now
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    marginHorizontal: 9,
    width: "95%",
    borderWidth: 0.3,
    borderColor: "gray",
    backgroundColor: "#403d3d",
    padding: 14,
    marginVertical: 12,
    borderRadius: 2,
  },
  startButton: {
    padding: 16,
    alignItems: "center",
    marginHorizontal: 9,
    borderRadius: 2,
    borderWidth: 0.3,
    borderColor: "gray",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});

export default SigninScreen;

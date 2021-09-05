import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignupScreen = ({ navigation, setUser }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 45,
      }}>
      <View style={styles.header}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../assets/images/logo2.png")}
            style={styles.image}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "space-between" }}>
          <Text style={{ fontSize: 17, fontWeight: "900", marginRight: 7 }}>
            Help
          </Text>
          <Pressable onPress={() => navigation.navigate("Signin")}>
            <Text style={{ fontSize: 17, fontWeight: "900" }}>Signin</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyTitle}>
          Ready to experience unlimited TV shows & movies ?
        </Text>
        <Text style={styles.bodySubtitle}>
          Create an account and we'll send you an email with everything you need
          to know about Netflix.
        </Text>
        <TextInput
          placeholder="Email"
          autoFocus={true}
          style={styles.inputText}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          autoFocus={true}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => console.log("HELLO")}>
          <Text style={styles.buttonText}> Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    height: 55,
    aspectRatio: 1 / 1,
  },
  body: {
    paddingHorizontal: 16,
  },
  bodyTitle: {
    fontSize: 24,
    fontWeight: "900",
  },
  bodySubtitle: {
    fontSize: 16,
    marginVertical: 16,
  },
  startButton: {
    backgroundColor: "red",
    padding: 16,
    alignItems: "center",
    borderRadius: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    textTransform: "uppercase",
  },
  inputText: {
    borderWidth: 0.5,
    borderColor: "green",
    padding: 14,
    marginVertical: 12,
    borderRadius: 2,
  },
});

export default SignupScreen;

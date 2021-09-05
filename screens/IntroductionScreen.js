import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import ViewSlider from "react-native-view-slider";

const { width, height } = Dimensions.get("window");

const IntroductionScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <ViewSlider
        renderSlides={
          <>
            <View style={styles.viewBox}>
              <Text style={styles.title}>
                Unlimited movies, TV shows & more
              </Text>
              <Text style={styles.subtitle}>
                Watch anywhere. Cancel anytime
              </Text>
            </View>
            <View style={styles.viewBox}>
              <Text style={styles.title}>Download and watch offline</Text>
              <Text style={styles.subtitle}>
                Always have something to offline
              </Text>
            </View>
            <View style={styles.viewBox}>
              <Text style={styles.title}>No pesky contracts</Text>
              <Text style={styles.subtitle}>Join today, cancel anytime</Text>
            </View>
            <View style={styles.viewBox}>
              <Text style={styles.title}>Watch everywhere</Text>
              <Text style={styles.subtitle}>
                Stream on your phone, tablet, laptop, TV and more
              </Text>
            </View>
          </>
        }
        height={"90%"}
        slideCount={4}
        dots={true}
        dotActiveColor="white"
        dotInactiveColor="gray"
        dotsContainerStyle={styles.dotContainer}
        autoSlide={false}
        slideInterval={1000}
      />
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => setVisible((state) => !state)}>
        <Text style={styles.buttonText}> Get Started</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            marginTop: 20,
          }}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Pressable onPress={() => setVisible((state) => !state)}>
                <Entypo name="cross" size={28} color="#2b2b29" />
              </Pressable>
            </View>
            <View style={styles.modalBody}>
              <Text style={styles.modalTitle}>Ready to watch ?</Text>
              <Text style={styles.modalSubtitle}>
                Enter your email to create or sign in to your account
              </Text>
              <TextInput
                placeholder="Email"
                style={styles.inputText}
                autoFocus={true}
              />
              <TouchableOpacity
                style={[styles.startButton, { width: "90%" }]}
                onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.buttonText}> Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 44,
    textAlign: "center",
  },

  subtitle: {
    color: "gray",
    fontSize: 18,
    textAlign: "center",
  },
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    width: width,
    padding: 10,
    alignItems: "center",
    height: "100%",
    paddingBottom: 150,
    color: "white",
  },
  slider: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  dotContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  startButton: {
    backgroundColor: "red",
    padding: 16,
    alignItems: "center",
    marginHorizontal: 9,
    borderRadius: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  modalHeader: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: "flex-end",
  },

  modalBody: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 24,
  },

  modalTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 24,
  },
  modalSubtitle: {
    fontSize: 16,
    textAlign: "center",
    width: "80%",
    lineHeight: 18,
    color: "gray",
  },
  inputText: {
    marginHorizontal: 9,
    width: "90%",
    borderWidth: 0.5,
    borderColor: "green",
    padding: 14,
    marginVertical: 12,
    borderRadius: 2,
  },
});

export default IntroductionScreen;

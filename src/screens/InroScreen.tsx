import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodLogo from "../assets/Logo";
import SunImage from "../assets/SunImage";

const InroScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo />
      <SunImage style={styles.sun} />
    </View>
  );
};

export default InroScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sun: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

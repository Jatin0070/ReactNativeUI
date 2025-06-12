import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const SendButton = () => {
  return (
    <TouchableOpacity
      style={{
        height: s(46),
        width: s(46),
        borderRadius: s(23),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1077AF",
      }}
    >
      <FontAwesome name="send" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({});

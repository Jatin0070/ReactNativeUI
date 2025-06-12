import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

const SocialButton = ({ icon }: any) => {
  return (
    <View
      style={{
        height: s(46),
        width: s(46),
        borderRadius: s(23),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: s(1),
        borderColor: "#E4E6E8",
      }}
    >
      {icon}
    </View>
  );
};

export default SocialButton;

const styles = StyleSheet.create({});

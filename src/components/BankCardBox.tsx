import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import ATMCARD from "../assets/ATMCard";

const BankCardBox = () => {
  return (
    <View
      style={{
        backgroundColor: "#F7F8F9",
        // height: vs(275),
        paddingVertical: vs(35),
        borderRadius: s(10),
        marginTop: vs(25),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ATMCARD />
      <Text
        style={{
          fontSize: s(16),
          fontWeight: "bold",
          marginTop: vs(17),
        }}
      >
        No Master Card Added
      </Text>
      <Text
        style={{
          fontSize: s(15),
          marginTop: vs(6),
          textAlign: "center",
        }}
      >
        You can add ards later
      </Text>
    </View>
  );
};

export default BankCardBox;

const styles = StyleSheet.create({});

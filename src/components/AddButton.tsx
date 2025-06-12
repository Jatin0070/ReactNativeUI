import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";
const AddButton = () => {
  return (
    <TouchableOpacity
      style={{
        borderColor: "#F0F5FA",
        borderWidth: s(2),
        backgroundColor: "#fff",
        borderRadius: s(10),
        paddingVertical: vs(15),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: vs(15),
      }}
    >
      <AntDesign name="plus" size={24} color="#FF7622" />
      <Text
        style={{
          color: "#FF7622",
        }}
      >
        Add New
      </Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({});

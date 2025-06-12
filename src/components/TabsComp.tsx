import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";

const TabsComp = () => {
  const tabArr = ["Live", "Recorded"];
  const [selecedTab, setSelectedtab] = useState("Live");

  const handleClick = (name: any) => {
    setSelectedtab(name);
  };
  return (
    <View
      style={{
        backgroundColor: "#F5F5F4",
        borderRadius: s(12),
        height: vs(48),
        flexDirection: "row",
        alignItems: "center",
        padding: s(4),
      }}
    >
      {tabArr.map((item: any) => (
        <TouchableOpacity
          key={item}
          style={{
            height: vs(32),
            flex: 1,

            borderRadius: s(8),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: selecedTab === item ? "black" : "white",
          }}
          onPress={() => handleClick(item)}
        >
          <Text style={{ color: selecedTab === item ? "white" : "black" }}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabsComp;

const styles = StyleSheet.create({});

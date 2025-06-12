import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CashIcon from "../assets/CashIcon";
import { s, vs } from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";

const PayMethod = ({ iseSlected = false, title, icon, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* Checkmark icon overlay (only if selected) */}
      {iseSlected && (
        <View style={styles.checkMark}>
          <Ionicons name="checkmark-circle" size={20} color="white" />
        </View>
      )}

      {/* Card with icon */}
      <View style={[styles.card, iseSlected && styles.selectedCardStyle]}>
        {icon}
      </View>

      {/* Label below card */}
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PayMethod;

const styles = StyleSheet.create({
  container: {
    width: s(85),
    alignItems: "center",
    position: "relative", // Important for absolute children to position correctly
  },
  card: {
    backgroundColor: "#F0F5FA",
    borderRadius: s(10),
    width: s(85),
    height: vs(72),
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCardStyle: {
    backgroundColor: "white",
    borderWidth: s(2),
    borderColor: "#FF7622",
  },
  checkMark: {
    position: "absolute", // Positioning on top-right of the card
    top: s(4),
    right: s(4),
    backgroundColor: "#FF7622",
    borderRadius: s(12),
    padding: s(2), // Padding instead of width/height for flexibility
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2, // Make sure it's above the card
  },
  label: {
    fontSize: s(14),
    textAlign: "center",
    marginTop: vs(4),
  },
});

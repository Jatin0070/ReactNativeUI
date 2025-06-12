import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PayMethod from "../components/PayMethod";
import PaymentList from "../components/PaymentList";
import BankCardBox from "../components/BankCardBox";
import AddButton from "../components/AddButton";

const Payments = () => {
  return (
    <View style={{ flex: 1, paddingTop: vs(50), paddingHorizontal: s(24) }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: vs(37),
        }}
      >
        <BackButton />
        <Text
          style={{
            fontSize: s(17),
            marginStart: s(18),
          }}
        >
          Payment
        </Text>
      </View>
      <PaymentList />
      <BankCardBox />
      <AddButton/>
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({});

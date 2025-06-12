import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CashIcon from "../assets/CashIcon";
import { MasterIcon, Paypal, VisaIcon } from "../assets/Icons";
import PayMethod from "./PayMethod";
import { s } from "react-native-size-matters";
const PaymentMethods = [
  {
    label: "Cash",
    icon: <CashIcon />,
  },
  {
    label: "Visa",
    icon: <VisaIcon />,
  },
  {
    label: "Master Card",
    icon: <MasterIcon />,
  },
  {
    label: "Paypal",
    icon: <Paypal />,
  },
];
const PaymentList = () => {
  const [selected, setSelected] = useState<any>("");
  return (
    <View>
      <FlatList
        data={PaymentMethods}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <PayMethod
            title={item.label}
            icon={item.icon}
            onPress={() => setSelected(item.label)}
            iseSlected={item.label === selected}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: s(16) }}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});

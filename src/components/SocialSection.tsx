import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SendButton from "./SendButton";
import SocialButton from "./SocialButton";
import { s, vs } from "react-native-size-matters";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SocialSection = ({ text,icon }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBlockColor: "#E4E6E8",
        paddingVertical: vs(15),
      }}
    >
      <SocialButton icon={icon}/>
      <Text
        style={{
          marginStart: s(14),
          flex: 1,
          fontSize: s(12),
        }}
      >
        {text}
      </Text>

      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({});

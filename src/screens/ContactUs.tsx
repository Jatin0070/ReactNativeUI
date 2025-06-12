import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import SendButton from "../components/SendButton";
import SocialButton from "../components/SocialButton";
import SocialSection from "../components/SocialSection";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
const ContactUs = () => {
  // vs stands for verticalScale
  return (
    <View style={{ marginTop: vs(50) }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: s(17),
        }}
      >
        <BackButton />
        <UserAvatar />
      </View>
      <Text
        style={{
          fontWeight: "semibold",
          fontSize: s(30),
          marginTop: vs(20),
          marginStart: s(19),
        }}
      >
        Contact Us
      </Text>
      <View
        style={{
          backgroundColor: "#F5F5FA",
          borderRadius: s(14),
          paddingHorizontal: s(18),
          paddingVertical: vs(15),
          marginTop: vs(22),
        }}
      >
        <Text
          style={{
            fontSize: s(16),
            fontWeight: "semibold",
          }}
        >
          Social Media Platform
        </Text>
        <SocialSection
          icon={<FontAwesome name="whatsapp" size={24} color="black" />}
          text="WhatsApp"
        />
        <SocialSection
          icon={<AntDesign name="twitter" size={24} color="black" />}
          text="Twitter"
        />
        <SocialSection
          icon={<FontAwesome name="instagram" size={24} color="black" />}
          text="Instagram"
        />
        <SocialSection
          icon={<FontAwesome name="snapchat-ghost" size={24} color="black" />}
          text="Snap Chat"
        />
        <SocialSection
          icon={<FontAwesome5 name="tiktok" size={24} color="black" />}
          text="Tik Tok"
        />
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});

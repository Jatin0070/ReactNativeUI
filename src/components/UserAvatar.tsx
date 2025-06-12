import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

const UserAvatar = () => {
  return (
    <Image
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOy5z90iLbiRND-3MHN7sCb7pV45Db0wY9g&s",
      }}
      style={styles.avatar}
    />
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
    //use scale(s) for responsive design 
  avatar: {
    height: s(32),
    width: s(32),
    borderRadius: s (16),
  },
});

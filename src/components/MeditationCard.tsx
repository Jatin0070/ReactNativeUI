import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import VideIcon from "../assets/VideoIcon";

// Get screen width to calculate responsive card width
const PhoneWidth = Dimensions.get("window").width;
const cardWidth = (PhoneWidth - s(16) * 3) / 2;

const MeditationCard = ({ image, title, date }: any) => {
  return (
    <ImageBackground
      source={{ uri: image }}
      style={styles.cardContainer}
      imageStyle={styles.cardImage}
    >
      {/* Dark overlay to improve text visibility */}
      <View style={styles.overlay} />

      {/* "Live" red badge at top-right */}
      <View style={styles.liveBadge}>
        <Text style={styles.liveText}>Live</Text>
      </View>

      {/* Bottom-left content: title and date with icon */}
      <View style={styles.cardContent}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.dateContainer}>
          <VideIcon />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  // Card background container
  cardContainer: {
    height: vs(161),
    width: cardWidth,
    borderRadius: s(12),
    overflow: "hidden",
  },

  // Background image style
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.7, // Faded background for overlay effect
  },

  // Semi-transparent dark overlay
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)", // Black overlay with transparency
  },

  // "Live" pill-style badge
  liveBadge: {
    height: vs(22),
    width: s(39),
    borderRadius: s(90),
    backgroundColor: "#E41111", // Attention-grabbing red
    position: "absolute",
    right: s(10),
    top: vs(7),
    justifyContent: "center",
    alignItems: "center",
  },

  // Text inside the live badge
  liveText: {
    color: "white",
    fontSize: s(11),
    fontWeight: "600", // Replaced 'semibold' with valid value
  },

  // Container for title and date at bottom-left
  cardContent: {
    position: "absolute",
    left: s(10),
    bottom: s(10),
  },

  // Title text styling
  titleText: {
    color: "white",
    fontSize: s(12),
    fontWeight: "600", // Replaced 'semibold' with valid value
  },

  // Row container for video icon and date
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: vs(2),
  },

  // Date text styling
  dateText: {
    color: "white",
    fontSize: s(12),
    fontWeight: "600", // Replaced 'semibold' with valid value
    marginStart: s(7),
  },
});

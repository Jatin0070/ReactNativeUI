import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InroScreen from "./src/screens/InroScreen";
import ContactUs from "./src/screens/ContactUs";
import HomeScreen from "./src/screens/HomeScreen";
import Payments from "./src/screens/Payments";

export default function App() {
  return (
    // <InroScreen/>
    <Payments />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Chip, withTheme, lightColors } from "@rneui/themed";
import LinearGradient from "react-native-linear-gradient";

import Header from "./components/Header";
import Card from "./components/Card";
import MiddleCard from "./components/MiddleCard";

export default function App() {
  return (
    <View style={styles.container + styles.footer}>
      <Header title="Paper Calculator" />
      <Card />
      <MiddleCard/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

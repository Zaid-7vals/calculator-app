import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Keyboard, StyleSheet, Text, View, Button, TouchableWithoutFeedback } from "react-native";
import { Chip, withTheme, lightColors } from "@rneui/themed";
import LinearGradient from "react-native-linear-gradient";

import Header from "./components/Header";
import Card from "./components/Card";
import MiddleCard from "./components/MiddleCard";
import BottomCard from "./components/BottomCard";

export default function App() {
  const [totalWeight, setTotalWeight] = useState(1);
  const [formatWeight, setFormatWeight] = useState(1);
  const [typeWeight, setTypeWeight] = useState(1);
  const [sheets, setSheets] = useState(0);
  const [length, setLength] = useState(50);
  const [width, setWidth] = useState(50);
  const [gram, setGram] = useState(50);

  const updateWeight = () => {
    if (formatWeight === 0 || typeWeight == 0) {
      console.log("select all values");
      return;
    }
    setTotalWeight(formatWeight * typeWeight * sheets);
    console.log(sheets, formatWeight, typeWeight);
  };

  const handleOnFormatPress = (props) => {
    setFormatWeight(props["weight"]);
  };
  const handleOnTypePress = (props) => {
    setTypeWeight(props["weight"]);
  };
  const handleOnQuantityChange = (props) => {
    setSheets(props);
  };
  const handleOnLengthChange = (props) => {

  }
  useEffect(updateWeight);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Paper Calculator" />
        <Card weight={totalWeight} onChangeQuantity={handleOnQuantityChange} />
        <MiddleCard
          updateType={handleOnTypePress}
          updateFormat={handleOnFormatPress}
        />
        <BottomCard/>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

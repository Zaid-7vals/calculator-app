import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { Chip, withTheme, lightColors } from "@rneui/themed";
import LinearGradient from "react-native-linear-gradient";

import Header from "./components/Header";
import Card from "./components/Card";
import MiddleCard from "./components/MiddleCard";
import BottomCard from "./components/BottomCard";

export default function App() {
  const [totalWeight, setTotalWeight] = useState(1);
  const [formatWeight, setFormatWeight] = useState({ length: 1, width: 1 }); //stores length and width based on paper size i.e. A4
  const [typeWeight, setTypeWeight] = useState(1);
  const [sheets, setSheets] = useState(0);
  const [length, setLength] = useState(50);
  const [width, setWidth] = useState(50);
  const [gram, setGram] = useState(50);

  const updateWeight = () => {
    setTotalWeight(formatWeight["length"] * formatWeight["width"] * typeWeight * sheets);
    //console.log(sheets, formatWeight, typeWeight);
    console.log(length, width, gram);
  };

  const handleOnFormatPress = (props) => {
    setFormatWeight(props["dimension"]);
  };
  const handleOnTypePress = (props) => {
    setTypeWeight(props["weight"]);
  };
  const handleOnQuantityChange = (props) => {
    setSheets(props);
  };
  const handleOnLengthChange = (props) => {
    setLength(props);
  };
  const handleOnWidthChange = (props) => {
    setWidth(props);
  };
  const handleOnGramChange = (props) => {
    setGram(props);
  };
  useEffect(updateWeight);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Paper Calculator" />
        <Card weight={totalWeight} onChangeQuantity={handleOnQuantityChange} />
        <MiddleCard
          onChangeType={handleOnTypePress}
          onChangeFormat={handleOnFormatPress}
        />
        <BottomCard
          onChangeLength={handleOnLengthChange}
          onChangeWidth={handleOnWidthChange}
          onChangeGrammage={handleOnGramChange}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

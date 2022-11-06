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

import Header from "./components/Header";
import Card from "./components/Card";
import MiddleCard from "./components/MiddleCard";
import BottomCard from "./components/BottomCard";

export default function App() {
  const [totalWeight, setTotalWeight] = useState(1);
  const [sheets, setSheets] = useState(0);
  const [length, setLength] = useState(50);
  const [width, setWidth] = useState(50);
  const [gram, setGram] = useState(50);

  const updateWeight = () => {
    setTotalWeight(length * width * gram * sheets);
  };

  const handleOnSizePress = (props) => {
    setLength(props["dimension"]["length"]);
    setWidth(props["dimension"]["width"]);
  };
  const handleOnQuantityChange = (props) => {
    setSheets(props);
  };

  useEffect(updateWeight);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Paper Calculator" />
        <Card weight={totalWeight} onChangeQuantity={handleOnQuantityChange} />
        <MiddleCard onChangeFormat={setGram} onChangeSize={handleOnSizePress} />
        <BottomCard
          onChangeLength={setLength}
          onChangeWidth={setWidth}
          onChangeGrammage={setGram}
          length={length}
          width={width}
          gram={gram}
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

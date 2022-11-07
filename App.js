import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  ScrollView,
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
  const [selectedFormatId, setSelectedFormatId] = useState(1);
  const [selectedSizeId, setSelectedSizeId] = useState(1);

  const updateWeight = () => {
    setTotalWeight(((length/1000) * (width/1000) * gram * sheets).toFixed(3));
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
      <ScrollView>
        <View style={styles.container}>
          <Header title="Paper Calculator" />
          <Card
            weight={totalWeight}
            onChangeQuantity={handleOnQuantityChange}
          />
          <MiddleCard
            onChangeFormat={setGram}
            onChangeSize={handleOnSizePress}
            selectedFormat={selectedFormatId}
            onFormatPress={setSelectedFormatId}
            selectedSize={selectedSizeId}
            onSizePress={setSelectedSizeId}
          />
          <BottomCard
            onChangeLength={setLength}
            onChangeWidth={setWidth}
            onChangeGrammage={setGram}
            length={length}
            width={width}
            gram={gram}
            onFormatPress={setSelectedFormatId}
            onSizePress={setSelectedSizeId}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

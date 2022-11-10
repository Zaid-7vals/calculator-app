import React, { useState, useEffect } from "react";
import {
  Keyboard,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";

import Header from "./header";
import TopCard from "./topCard";
import MiddleCard from "./middleCard";
import BottomCard from "./bottomCard";

const HomeScreen: React.FC = () => {
  const [totalWeight, setTotalWeight] = useState<string>("1");
  const [sheets, setSheets] = useState<number>(0);
  const [length, setLength] = useState<number>(650);
  const [width, setWidth] = useState<number>(430);
  const [gram, setGram] = useState<number>(300);
  const [selectedFormatId, setSelectedFormatId] = useState<number>(1);
  const [selectedSizeId, setSelectedSizeId] = useState<number>(1);

  const updateWeight = () => {
    setTotalWeight(
      ((length / 1000) * (width / 1000) * gram * sheets).toFixed(3)
    );
  };

  const handleOnSizePress = (props) => {
    setLength(props["dimension"]["length"]);
    setWidth(props["dimension"]["width"]);
  };
  const handleOnQuantityChange = (sheets: number) => {
    setSheets(sheets);
  };
  useEffect(updateWeight);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.container}>
          <Header title="Paper Calculator" />
          <TopCard
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
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

export default HomeScreen;

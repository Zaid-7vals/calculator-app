import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Slider from "@react-native-community/slider";

import files from "../constants/files";
import style from "../constants/style";
import PaperSlider from "./PaperSlider";

const BottomCard = (props) => {
  const [length, setLength] = useState(50);
  const [width, setWidth] = useState(50);
  const [gram, setGram] = useState(50);
  console.log(props.length, props.width, props.gram);
  return (
    <View style={styles.container}>
      <PaperSlider
        value={props.gram}
        label="Gram:"
        changeValue={setGram}
        onChangeValue={props.onChangeGrammage}
        unit="grams"
      />
      <PaperSlider
        value={props.length}
        label="Length:"
        changeValue={setLength}
        onChangeValue={props.onChangeLength}
        unit="mm"
      />
      <PaperSlider
        value={props.width}
        label="Width:"
        changeValue={setWidth}
        onChangeValue={props.onChangeWidth}
        unit="mm"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: style.borderRadius,
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#3A4163",
  },
  innerContainer: {
    marginVertical: 10,
  },
});

export default BottomCard;

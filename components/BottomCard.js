import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Slider from "@react-native-community/slider";

import files from "../constants/files";
import style from "../constants/style";

const BottomCard = (props) => {
  const [length, setLength] = useState(50);
  const [width, setWidth] = useState(50);
  const [gram, setGram] = useState(50);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Length:</Text>
        <Text style={styles.text}>{length} mm</Text>
      </View>
      <Slider
        style={{ width: "90%" }}
        minimumValue={1}
        maximumValue={500}
        minimumTrackTintColor={style.sliderColor}
        thumbTintColor={style.sliderColor}
        value={length}
        onValueChange={(value) => {
          setLength(parseInt(value));
          props.onChangeLength(parseInt(value));
        }}
      />
      <View style={styles.topContainer}>
        <Text style={styles.text}>Width:</Text>
        <Text style={styles.text}>{width} mm</Text>
      </View>
      <Slider
        style={{ width: "90%" }}
        minimumValue={1}
        maximumValue={500}
        minimumTrackTintColor={style.sliderColor}
        thumbTintColor={style.sliderColor}
        value={width}
        onValueChange={(value) => {
          setWidth(parseInt(value));
          props.onChangeWidth(parseInt(value));
        }}
      />
      <View style={styles.topContainer}>
        <Text style={styles.text}>Gram:</Text>
        <Text style={styles.text}>{gram} grams</Text>
      </View>
      <Slider
        style={{ width: "90%" , marginBottom: 10}}
        minimumValue={10}
        maximumValue={1000}
        minimumTrackTintColor={style.sliderColor}
        thumbTintColor={style.sliderColor}
        value={gram}
        onValueChange={(value) => {
          setGram(parseInt(value));
          props.onChangeGrammage(parseInt(value));
        }}
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

    backgroundColor: "#3A4163",
  },
  topContainer: {
    width: "90%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerContainer: {
    marginVertical: 10
  },
  text: {
    fontSize: 17,
    color: "white"
  }
});

export default BottomCard;

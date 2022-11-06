import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { Chip, withTheme, lightColors } from "@rneui/themed";

import files from "../constants/files";
import style from "../constants/style";

const PaperSlider = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.text}>{props.label}</Text>
        <Chip title={`${props.value} ${props.unit}`} color="grey" />
      </View>
      <Slider
        style={styles.slider}
        minimumValue={10}
        maximumValue={1000}
        minimumTrackTintColor={style.sliderColor}
        thumbTintColor={style.sliderColor}
        thumbImage={files.images.thumbImage}
        value={props.value}
        onValueChange={(value) => {
          props.changeValue(parseInt(value));
          props.onChangeValue(parseInt(value));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 5,
  },
  labelContainer: {
    width: style.bottomSection.sliderWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    color: "white",
  },
  slider: {
    width: style.bottomSection.sliderWidth,
    marginBottom: 10,
  },
});

export default PaperSlider;

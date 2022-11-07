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
        <Chip
          buttonStyle={styles.chip}
          title={`${props.valueForChip} ${props.unit}`}
          color="white"
          titleStyle={styles.chipText}
        />
      </View>

      <Slider
        style={styles.slider}
        minimumValue={10}
        maximumValue={1000}
        minimumTrackTintColor={style.systemBlueAccent}
        thumbTintColor={style.systemBlueAccent}
        thumbImage={files.images.thumbImage} //ThumbImage not being reflected on AppReload
        value={props.value}
        onValueChange={(value) => {
          props.changeValue(parseInt(value));
        }}
        onSlidingComplete={(value) => {
          props.onChangeValue(parseInt(value));
        }}
        onSlidingStart={(value) => {
            props.onButtonChange((props.unit === "grams" ? files.customFormatButtonID : files.customSizeButtonID));
          }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: style.bottomSection.sliderWidth,
    margin: 10,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "white",
    fontWeight: "700",
  },
  chip: {
    borderRadius: 10,
    backgroundColor: "#4A5171",
  },
  chipText: {
    color: "white",
    fontSize: 12,
    fontWeight: "400",
  },
});

export default PaperSlider;

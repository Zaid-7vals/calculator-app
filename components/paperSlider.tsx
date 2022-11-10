import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";
import { useSelector, useDispatch } from "react-redux";
import files from "../constants/files";
import style from "../constants/style";

type Props = {
  label: string;
  unit: string;
  value: number;
  valueForChip: number;
  onButtonChange: (id: number) => void;
  onChangeValue: (value: number) => void;
  changeValue: (value: number) => void;
};

const PaperSlider: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.text}>{props.label}</Text>
        <View style={styles.chip}>
          <TextInput
            style={styles.chipText}
            keyboardType="number-pad"
            onChangeText={(value) => {
              props.onChangeValue(parseInt(value));
              props.changeValue(parseInt(value));
            }}
            value={props.valueForChip.toString()}
          />
          <Text style={styles.unitLabel}>{props.unit}</Text>
        </View>
      </View>

      <Slider
        
        minimumValue={10}
        maximumValue={1000}
        minimumTrackTintColor={style.systemBlueAccent}
        thumbTintColor={style.systemBlueAccent}
        thumbImage={files.images.thumbImage} //ThumbImage not being reflected on AppReload
        value={props.value}
        onValueChange={(value) => {
          dispatch({ type: 'formatButtonPress', weight: parseInt(value)});
        }}
        // onSlidingComplete={(value) => {
        //   props.onChangeValue(parseInt(value));
        // }}
        onSlidingStart={(value) => {
          props.onButtonChange(
            props.unit === "grams"
              ? files.customFormatButtonID
              : files.customSizeButtonID
          );
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
    height: 30,
    borderRadius: 10,
    backgroundColor: "#4A5171",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  chipText: {
    marginLeft: 5,
    marginRight: 1,
    color: "white",
    fontSize: 12,
    fontWeight: "400",
  },
  unitLabel: {
    marginRight: 5,
    marginLeft: 1,
    color: "white",
    fontSize: 12,
    fontWeight: "400",
  },
});

export default PaperSlider;

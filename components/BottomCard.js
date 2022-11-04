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
        <Text>Length:</Text>
        <Text>{length}</Text>
      </View>
      <Slider
        style={{ width: "80%" }}
        minimumValue={0}
        maximumValue={250}
        minimumTrackTintColor={style.sliderColor}
        thumbTintColor={style.sliderColor}
        value={length}
        onValueChange={(value) => setLength(parseInt(value))}
      />
      <View style={styles.topContainer}>
        <Text>Width:</Text>
        <Text>{width}</Text>
      </View>
      <Slider
        style={{ width: "80%" }}
        minimumValue={0}
        maximumValue={250}
        minimumTrackTintColor={style.sliderColor}
        thumbTintColor={style.sliderColor}
        value={width}
        onValueChange={(value) => setWidth(parseInt(value))}
      />
      <View style={styles.topContainer}>
        <Text>Gram:</Text>
        <Text>{gram}</Text>
      </View>
      <Slider
        style={{ width: "80%" }}
        minimumValue={0}
        maximumValue={250}
        minimumTrackTintColor={style.sliderColor}
        thumbTintColor={style.sliderColor}
        value={gram}
        onValueChange={(value) => setGram(parseInt(value))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 20,

    backgroundColor: "grey",
  },
  topContainer: {
    width: "80%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default BottomCard;

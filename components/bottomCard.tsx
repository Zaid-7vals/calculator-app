import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CORE_COLORS from "../constants/coreColors";
import CORE_THEME from "../constants/coreTheme";

import style from "../constants/style";
import PaperSlider from "./paperSlider";

type Props = {
  onChangeGrammage: (value: number)=>any,
  onChangeLength: (value: number)=>any,
  onChangeWidth: (value: number)=>any,
  onFormatPress: (value: number)=>any,
  onSizePress: (value: number)=>any,
  gram: number,
  length: number,
  width: number,

}
const BottomCard: React.FC<Props> = (props: Props) => {
  const [length, setLength] = useState(50);
  const [width, setWidth] = useState(50);
  const [gram, setGram] = useState(50);
  //These 3 states are used to update value inside chip on each value change.
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <PaperSlider
          value={props.gram}
          valueForChip={gram}
          label="Gram"
          changeValue={setGram}
          onChangeValue={props.onChangeGrammage}
          unit="grams"
          onButtonChange={props.onFormatPress}
        />
        <PaperSlider
          value={props.length}
          valueForChip={length}
          label="Length"
          changeValue={setLength}
          onChangeValue={props.onChangeLength}
          unit="mm"
          onButtonChange={props.onSizePress}
        />
        <PaperSlider
          value={props.width}
          valueForChip={width}
          label="Width"
          changeValue={setWidth}
          onChangeValue={props.onChangeWidth}
          unit="mm"
          onButtonChange={props.onSizePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: style.borderRadius,
    marginTop: CORE_THEME.margin,
    marginHorizontal: CORE_THEME.margin,
    marginBottom: 20,
    backgroundColor: CORE_COLORS["bottomSection"]["color"],
  },
  innerContainer: {
    marginVertical: 10,
    //This margin makes the bottomCard's bottom touch the iPhone bar
    width: "90%",
  },
});

export default BottomCard;

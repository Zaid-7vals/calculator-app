import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";

import files from "../constants/files";
import style from "../constants/style";
import CORE_THEME from "../constants/coreTheme";
import CORE_COLORS from "../constants/coreColors";

const TopCard = (props) => {
  const [sheets, setSheets] = useState(0);
  const [sheetIcon, setSheetIcon] = useState(files.images.sheet1);

  const updateSheetIconHandler = () => {
    if (sheets >= 50) {
      setSheetIcon(files.images.sheet4);
    } else if (sheets >= 25) {
      setSheetIcon(files.images.sheet3);
    } else if (sheets >= 10) {
      setSheetIcon(files.images.sheet2);
    } else {
      setSheetIcon(files.images.sheet1);
    }
    props.onChangeQuantity(sheets);
  };
  useEffect(updateSheetIconHandler);
  const incrementSheetHandler = () => {
    setSheets(sheets + 1);
    Keyboard.dismiss();
  };
  const decrementSheetHandler = () => {
    if (sheets <= 0) {
      return;
    }
    setSheets(sheets - 1);
    Keyboard.dismiss();
  };
  const changeSheetCountHandler = (sheetString) => {
    if (sheetString !== "") {
      setSheets(parseInt(sheetString, 10));
    } else {
      setSheets(0);
    }
  };

  return (
    <>
      <View style={styles.topContainer}>
        <Image source={sheetIcon} />
        <View style={{ alignItems: "center" }}>
          <View style={styles.counter}>
            <View style={{ justifyContent: "space-between" }}>
              <View style={{ alignItems: "center" }}>
                <TextInput
                  style={styles.sheetsCounter}
                  keyboardType="number-pad"
                  onChangeText={changeSheetCountHandler}
                  value={sheets.toString()}
                />
              </View>
              <Text style={{ color: "white" }}>sheets</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={incrementSheetHandler}
          >
            <Image source={files.icons.plus} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            activeOpacity={0.5}
            onPress={decrementSheetHandler}
          >
            <Image source={files.icons.minus} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.label}>
          <Text style={styles.labelText}>{props.weight} g</Text>
        </View>
        <View style={styles.label}>
          <Text>Per Copy</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 200,
    borderTopLeftRadius: CORE_THEME.borderRadius,
    borderTopRightRadius: CORE_THEME.borderRadius,
    marginTop: 5,
    marginHorizontal: CORE_THEME.margin,
    backgroundColor: CORE_COLORS["topSection"]["topContainerColor"],
  },
  counter: {
    backgroundColor: style.topSection.counterBackgroundColor,
    height: 100,
    width: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: CORE_COLORS["topSection"]["bottomContainerColor"],
    height: 80,
    marginHorizontal: CORE_THEME.margin,
    borderBottomLeftRadius: CORE_THEME.borderRadius,
    borderBottomRightRadius: CORE_THEME.borderRadius,
  },
  label: {
    marginHorizontal: 20,
  },
  labelText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    marginTop: -10,
    position: "absolute",
  },
  button2: {
    marginTop: 90,
    position: "absolute",
  },
  sheetsCounter: {
    fontSize: 25,
    color: "white",
  },
});

export default TopCard;

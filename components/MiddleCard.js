import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { Chip, withTheme, lightColors } from "@rneui/themed";
import files from "../constants/files";
import style from "../constants/style";
import PAPERFORMATS from "../constants/paperFormats";
import PAPERTYPES from "../constants/paperTypes";

const Card = (props) => {
  const paperTypes = PAPERTYPES.slice(0, 4);
  const paperTypes2 = PAPERTYPES.slice(4);
  const paperFormats = PAPERFORMATS;

  const changeSheetCountHandler = (props) => {
    if (props !== "") {
      setSheets(parseInt(props, 10));
      updateSheetIconHandler();
    } else {
      setSheets(0);
      updateSheetIconHandler();
    }
  };

  const dismissKeyboardHandler = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboardHandler}>
      <>
        <View style={styles.topContainer}>
          <View style={styles.chipRow}>
            {paperTypes.map((props) => (
              <Chip
                title={props["label"]}
                containerStyle={{ marginVertical: 15, marginHorizontal: 10 }}
              />
            ))}
          </View>
          <View style={styles.chipRow}>
            {paperTypes2.map((props) => (
              <Chip
                title={props["label"]}
                containerStyle={{ marginVertical: 15, marginHorizontal: 10 }}
                color="blue"
                onPress={dismissKeyboardHandler}
              />
            ))}
          </View>
        </View>

        <View style={styles.bottomContainer}>
        {paperFormats.map((props) => (
        <Button title={props["label"]} style={styles.button} color="grey" />
      ))}
        </View>
      </>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#F8F9FB",
  },
  chipRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#EFF0F5",
    height: 80,
    marginHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  label: {
    marginHorizontal: 20,
  },
  labelText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "white",
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

export default Card;

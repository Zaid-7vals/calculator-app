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

const Card = (props) => {
  const [sheets, setSheets] = useState(0);
  const [sheetIcon, setSheetIcon] = useState(files.images.sheet1);

  const paperTypes = ["DIN A", "DIN B", "DIN C", "DIN D"];
  const paperTypes2 = ["US Formate", "JIS B"];


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
  };
  const incrementSheetHandler = (props) => {
    setSheets(sheets + 1);
    updateSheetIconHandler();
    Keyboard.dismiss();
  };
  const decrementSheetHandler = (props) => {
    if (sheets <= 0) {
      return;
    }
    setSheets(sheets - 1);
    updateSheetIconHandler();
    Keyboard.dismiss();
  };
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
          <View style={styles.chipRow} >
          {paperTypes.map(() => <Chip
              title="DIN A"
              containerStyle={{ marginVertical: 15, marginHorizontal: 10 }}
            />)}
            
          </View>
          <View style={styles.chipRow}>
            <Chip
              title="US Formate"
              containerStyle={{ marginVertical: 15, marginHorizontal: 10 }}
            />
            <Chip
              title="JIS B"
              containerStyle={{ marginVertical: 15, marginHorizontal: 10 }}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          
          <Button title="A2" style={styles.button} />
          <Button title="A3" />
          <Button title="A4" />
          <Button title="A5" />
          <Button title="A6" />
          <Button title="Din Lang" />
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
    backgroundColor: "#979797",
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
    backgroundColor: "white"
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

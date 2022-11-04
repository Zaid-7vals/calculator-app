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

  const [selected, setSelected] = useState(-1);

  const handleOnButtonSelect = (props) => {
    if (selected == -1) {
     
    }
  };
  const removeSelectedButton = (props) => {};

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (

      <>
        <View style={styles.topContainer}>
          <View style={styles.chipRow}>
            {paperTypes.map((value) => (
              <Chip
                title={value["label"]}
                containerStyle={{ marginVertical: 15, marginHorizontal: 10 }}
                onPress={props.onChangeType.bind(this, value)}
              />
            ))}
          </View>
          <View style={styles.chipRow}>
            {paperTypes2.map((value) => (
              <Chip
                title={value["label"]}
                containerStyle={{ marginVertical: 15, marginHorizontal: 10 }}
                onPress={props.onChangeType.bind(this, value)}
              />
            ))}
          </View>
        </View>

        <View style={styles.bottomContainer}>
          {paperFormats.map((value) => (
            <Button
              title={value["label"]}
              style={styles.button}
              color="grey"
              onPress={props.onChangeFormat.bind(this, value)}
            />
          ))}
        </View>
      </>

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

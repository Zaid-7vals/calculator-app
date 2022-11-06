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
import PAPERSIZES from "../constants/paperSizes";
import PAPERFORMATS from "../constants/paperFormats";

const Card = (props) => {
  const paperFormats = PAPERFORMATS//.slice(0, 4);
//   const paperFormats2 = PAPERFORMATS.slice(4);
  const paperSizes = PAPERSIZES;

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
          {paperFormats.map((value) => (
            <Chip
              title={value["label"]}
              containerStyle={{ marginVertical: 15, marginHorizontal: 10 }}
              onPress={props.onChangeFormat.bind(this, value["weight"])}
              color="grey"
            />
          ))}
        </View>
        
      </View>

      <View style={styles.bottomContainer}>
        {paperSizes.map((value) => (
          <Button
            title={value["label"]}
            style={styles.button}
            color="grey"
            onPress={props.onChangeSize.bind(this, value)}
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
    flexWrap: "wrap",
    //need to define a flex property to puh new row to start
    alignContent: "space-between",
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
    fontFamily: "Montserrat_400Regular",
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

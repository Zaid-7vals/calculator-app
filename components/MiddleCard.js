import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";

import { Chip, Button, withTheme, lightColors } from "@rneui/themed";

import files from "../constants/files";
import style from "../constants/style";
import PAPERSIZES from "../constants/paperSizes";
import PAPERFORMATS from "../constants/paperFormats";
import { TouchableHighlight } from "react-native-web";

const Card = (props) => {
  const paperFormats = PAPERFORMATS;
  const paperSizes = PAPERSIZES;

  const handleOnButtonSelect = (props) => {
    if (selected == false) {
    }
  };
  const removeSelectedButton = (props) => {};

  const renderPaperSize = ({ item }) => (
    <Button
      title={item["label"]}
      onPress={() => {
        props.onChangeSize(item);
        props.onSizePress(item["key"]);
      }}
      buttonStyle={styles.sizeButton}
      titleStyle={
        item["key"] === props.selectedSize
          ? styles.selectedButtonText
          : styles.buttonText
      }
    />
  );

  return (
    <>
      <View style={styles.topContainer}>
        {paperFormats.map((value) => (
          <Chip
            title={value["label"]}
            containerStyle={styles.chip}
            onPress={() => {
              props.onChangeFormat(value["weight"]);
              props.onFormatPress(value["key"]);
            }}
            buttonStyle={
              value["key"] === props.selectedFormat
                ? styles.selectedChip
                : styles.chip
            }
            titleStyle={
              value["key"] === props.selectedFormat
                ? styles.selectedChipText
                : styles.chipText
            }
          />
        ))}
      </View>

      <View style={styles.bottomContainer}>
        <FlatList
          style={styles.sizeList}
          horizontal={true}
          data={paperSizes}
          renderItem={renderPaperSize}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#F8F9FB",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#EFF0F5",
    height: 45,
    marginHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: {
    fontFamily: "Montserrat_400Regular",
    height: 15,
  },

  sheetsCounter: {
    fontSize: 25,
    color: "white",
  },
  chip: {
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  chipText: {
    color: "#B0B5CB",
    fontSize: 14,
    fontWeight: "400",
  },
  selectedChip: {
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#B0B5CB",
  },
  selectedChipText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "400",
  },
  buttonText: {
    color: "grey",
    fontSize: 14,
    fontWeight: "400",
  },
  selectedButtonText: {
    color: style.systemBlueAccent,
    fontSize: 14,
    fontWeight: "400",
  },
  sizeList: {
    marginHorizontal: 10,
  },
  sizeButton: { backgroundColor: "#EFF0F5" },
});

export default Card;

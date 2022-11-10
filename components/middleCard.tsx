import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { Chip, Button } from "@rneui/themed";

import style from "../constants/style";
import PAPER_SIZES from "../constants/paperSizes";
import PAPER_FORMATS from "../constants/paperFormats";
import CORE_THEME from "../constants/coreTheme";
import CORE_COLORS from "../constants/coreColors";

type Props = {
  onChangeSize: (item)=>any;
  onSizePress: (item)=>any; //this item has to have a type of PAPER_SIZE array object
  selectedSize: number;
  onChangeFormat: (weight: number)=>any;
  onFormatPress: (key: number)=>any;
  selectedFormat: number;
}

const Card: React.FC<Props> = (props: Props) => {
  const paperFormats = PAPER_FORMATS;
  const paperSizes = PAPER_SIZES;

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

    borderTopLeftRadius: CORE_THEME.borderRadius,
    borderTopRightRadius: CORE_THEME.borderRadius,
    marginTop: 20,
    marginHorizontal: CORE_THEME.margin,
    backgroundColor: CORE_COLORS["middleSection"]["topContainerColor"],
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: CORE_COLORS["middleSection"]["bottomContainerColor"],
    height: 45,
    marginHorizontal: CORE_THEME.margin,
    borderBottomLeftRadius: CORE_THEME.borderRadius,
    borderBottomRightRadius: CORE_THEME.borderRadius,
  },
  button: {
    height: 15,
  },

  sheetsCounter: {
    fontSize: 25,
    color: "white",
  },
  chip: {
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: CORE_THEME.borderRadius,
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

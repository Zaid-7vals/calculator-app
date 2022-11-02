import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import files from "../constants/files";
const Card = (props) => {
  const [sheets, setSheets] = useState(0);
  const incrementSheetHandler = (props) => {
    setSheets(sheets + 1);
  };
  const decrementSheetHandler = (props) => {
    if (sheets <= 0) {
      return;
    }
    setSheets(sheets - 1);
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={require("../assets/sheets/sheet4.png")} />
        <View style={{ alignItems: "center" }}>
          <View style={styles.counter}>
            <View style={{ justifyContent: "space-between" }}>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 25, color: "white" }}>{sheets}</Text>
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
      <View style={styles.footer}>
        <View style={styles.label}>
          <Text style={styles.labelText}>4.99 g</Text>
        </View>
        <View style={styles.label}>
          <Text>Per Copy</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 5,
    marginHorizontal: 20,
    backgroundColor: "#37CEFF",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  counter: {
    backgroundColor: "rgba(74, 81, 113, 0.2)",
    height: 100,
    width: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#6FDBFF",
    height: 80,
    marginHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
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
});

export default Card;

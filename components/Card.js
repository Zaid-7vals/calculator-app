import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const Card = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../assets/sheets/sheet4.png")} />
        <View style={styles.counter}></View>
      </View>
      <View style={styles.container}>
        <Image source={require("../assets/sheets/sheet4.png")} />
        <View style={styles.counter}></View>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  counter: {
    backgroundColor: "#4A5171",
    height: 100,
    width: 100,
    borderRadius: 20,
  },
});

export default Card;

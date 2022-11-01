import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CardFooter = (props) => {
  return (
    <View style={styles.footer}>
      <View style={styles.label} >
        <Text style={styles.labelText} >4.99 g</Text>
      </View>
      <View style={styles.label} >
        <Text>Per Copy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: "bold"
  }
});

export default CardFooter;

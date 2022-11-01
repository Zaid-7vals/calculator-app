import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Header = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Button title="N" />
    </View>
  );
};

const styles = StyleSheet.create({
    titleView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 70
    }
});

export default Header;

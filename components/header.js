import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import files from "../constants/files";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <Image source={files.icons.menuIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
  },
  titleView: {
    paddingLeft: 10,
  },
  navButton: {
    width: 10,
  },
});

export default Header;

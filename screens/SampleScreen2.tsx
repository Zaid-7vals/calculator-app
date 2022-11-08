import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SampleScreen2 = (props) => {
  return (
    <View style={styles.container}>
      <Text>Mujhay Ghar jana hay!!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SampleScreen2;

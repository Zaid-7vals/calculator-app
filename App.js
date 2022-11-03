import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Chip, withTheme, lightColors } from "@rneui/themed";
import LinearGradient from "react-native-linear-gradient";

import Header from "./components/Header";
import Card from "./components/Card";
import MiddleCard from "./components/MiddleCard";

export default function App() {
const [totalWeight, setTotalWeight] = useState(1);
const [formatWeight, setFormatWeight] = useState(1);
const [typeWeight, setTypeWeight] = useState(1);
const [sheets, setSheets] = useState(0);

const updateWeight = () => {
  if (formatWeight === 0 || typeWeight == 0){
    console.log("select all values");
    return;
  }
  setTotalWeight((formatWeight*typeWeight));
  console.log(sheets, formatWeight, typeWeight);
  
}

const handleOnFormatPress = (props) => {
  setFormatWeight(props["weight"]);
 
}
const handleOnTypePress = (props) => {
  setTypeWeight(props["weight"]);
  
}
const handleOnQuantityChange = (props) => {
   setSheets(props);
   console.log(props);
}
useEffect(updateWeight);
  return (
    <View style={styles.container}>
      <Header title="Paper Calculator" />
      <Card weight = {totalWeight} onChangeQuantity={handleOnQuantityChange} />
      <MiddleCard updateType={handleOnTypePress} updateFormat={handleOnFormatPress} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

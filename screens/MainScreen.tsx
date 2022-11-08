import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Button
          color="#FF9F9F"
          title="Go to Calculator"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
        color="#FF9F9F"
          title="Go to Tab Navigation"
          onPress={() => navigation.navigate("TabNavigation")}
        />
        <Button
        color="#FF9F9F"
          title="Go to Sample Screen 2"
          onPress={() => navigation.navigate("SampleScreen2")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:200,
    flexDirection: "column",
    backgroundColor: "#474E68",
    justifyContent: "space-around",
    alignItems: "center",
    },
});

export default MainScreen;

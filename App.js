import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Card from './components/Card';
import CardFooter from './components/CardFooter';

export default function App() {
  return (
    <View style={styles.container + styles.footer}>
      <Header title="Paper Calculator"/>
      <Card/>
      <CardFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    justifyContent: "center"
  },
  
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Card from './components/Card';


export default function App() {
  return (
    <View style={styles.container + styles.footer}>
      <Header title="Paper Calculator"/>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    justifyContent: "center"
  },
  
});

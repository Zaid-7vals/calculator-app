//import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import MainScreen from './screens/MainScreen';
import TabNavigation from './screens/TabNavigation';
import SampleScreen2 from './screens/SampleScreen2';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ title: 'Tab Navigation' }} />
        <Stack.Screen name="SampleScreen2" component={SampleScreen2} options={{ title: 'Sample' }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

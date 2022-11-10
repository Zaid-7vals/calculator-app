import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/homeScreen';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })} >
        <Tab.Screen name="Tab1" component={HomeScreen} options={{ title: 'Calculator Tab 1' }} />
        <Tab.Screen name="Tab2" component={HomeScreen} options={{ title: 'Calculator Tab 2' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabNavigation;

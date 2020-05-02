import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/pages/HomeScreen';
import Profile from './src/pages/Profile';
import QRCode from './src/pages/QRCode';

const Menu = createBottomTabNavigator();

function MainMenu() {
  return (
    <Menu.Navigator>
      <Menu.Screen name="Home" component={HomeScreen} />
      <Menu.Screen name="QRCode" component={QRCode} />
      <Menu.Screen name="Profile" component={Profile} />
    </Menu.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainMenu />
    </NavigationContainer>
  );
}


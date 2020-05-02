import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './src/pages/HomeScreen';
import Profile from './src/pages/Profile';
import QRCode from './src/pages/QRCode';

const Menu = createMaterialBottomTabNavigator();

function MainMenu() {
  return (
    <Menu.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;

        if (route.name === 'HomeScreen') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        }
        if (route.name === 'QRCode'){
          iconName = focused
            ? 'qrcode-scan'
            : 'qrcode-scan';
        }
        if (route.name === 'Profile'){
          iconName = focused
            ? 'account-circle'
            : 'account-circle-outline';
        }
        return <Icon name={iconName} size={24} color={color} />
      }
    })}

    initialRouteName="HomeScreen"
    activeColor="#0B396D"
    labeled={false}
    shifting={false}
    inactiveColor="#63B446"
    barStyle={{ backgroundColor: '#FFF', paddingTop: 10}}
    >
      <Menu.Screen name="HomeScreen" component={HomeScreen} />
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


import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
const Menu = createBottomTabNavigator();


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem vindo!</Text>
    </View>
  );
}
 function QRCode({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Escaneado tipo ${type} e data ${data} realizado!`);
    <HomeScreen />;    
  }

  if (hasPermission === null) {
    return <Text>Pedindo permissão a câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Acesso não permitido a câmera.</Text>;
  }
  return (
    <View style={{flex: 1}}>
    <Camera
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      ratio='16:9'
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
      barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
    >
      <View
        style={{
          width: 250,
          height: 250,
          backgroundColor: 'transparent',
          borderColor: '#63B446',
          borderWidth: 5,
          borderRadius: 20
        }}
      />

    </Camera>
    {scanned && navigation.goBack()}
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text style={{color: '#0B396D', fontSize: 22}}>Nome Completo: </Text>
        <Text style={{color: '#63B446', fontSize: 22}}>Vinicius Oliveira de Freitas</Text>
        <Text style={{color: '#0B396D', fontSize: 22}}>RA: </Text>
        <Text style={{color: '#63B446', fontSize: 22}}>502218</Text>
      </View>
      <View style={{ marginTop: 30, width: "90%", backgroundColor: "#FFF", borderRadius: 6, padding: 20, elevation: 16}}>
        <TextInput placeholder="Digite sua senha" style={{ height: 50, padding: 5, borderStyle: "solid", borderBottomWidth: 1, borderBottomColor: "#0B396D", margin: 5}} placeholderTextColor="#0B396D"/>
        <TextInput placeholder="Confirme sua senha" style={{ height: 50, padding: 5, borderStyle: "solid", borderBottomWidth: 1, borderBottomColor: "#0B396D", margin: 5}} placeholderTextColor="#0B396D" />
        <View style={{margin: 5, marginTop: 15, fontSize: 30}}>
          <Button onPress={HomeScreen} title="Editar" color="#63B446" fontSize="30"/>
        </View>
        
      </View>
    </View>
  );
}

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


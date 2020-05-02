import React from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';

import logoIMG from './../../../assets/logo.png';

// import { Container } from './styles';

export default function Login( ) {
  return (
    <View style={login.container}>
        <View style={login.logo}>
        <Image source={logoIMG} style={login.logoIMG}/>
        </View>
        <View style={login.box}>
        <TextInput placeholder="Digite seu RA" style={login.textInput} placeholderTextColor="#0B396D" />
        <TextInput placeholder="Digite sua Senha" style={login.textInput} placeholderTextColor="#0B396D" />
        
        <View style={login.button}>
                    <Button title="Editar" color="#63B446" fontSize="30" />
        </View>
        </View>
    </View>
  );
}

const login = StyleSheet.create({
    container: {
      backgroundColor: "#E8E8E8",
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    logo: {
        width: "90%",
    },
    logoIMG:{
        width: "100%",
        resizeMode: 'contain'
    },
    box: {
            width: "90%", 
            backgroundColor: "#FFF", 
            borderRadius: 6, 
            padding: 20, 
            elevation: 16
    },
    textInput: {
        height: 50, 
        padding: 5, 
        borderStyle: "solid", 
        borderBottomWidth: 1, 
        borderBottomColor: "#0B396D", 
        margin: 5 
    },
    button: {
        margin: 5,
        marginTop: 15,
        fontSize: 30
    }
  });
  
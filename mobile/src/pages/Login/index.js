import React, {useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import 'localstorage-polyfill';
import logoIMG from './../../../assets/logo.png';
import api from '../../services/api';


export default function Login({ navigation }) {
  const [ra, setRa] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e){
    try{
      const res = await api.post('/login/alunos', { ra, password });
      console.log(res.data.id);
      await localStorage.setItem('studentId', res.data.id);
      await localStorage.setItem('studentName', res.data.fullname);
      navigation.navigate('HomeScreen');
    }catch(err){
      alert(`Falha no login, tente novamente!`);
    }
  }

  return (
    <View style={login.container}>
        <View style={login.logo}>
        <Image source={logoIMG} style={login.logoIMG}/>
        </View>
        <View style={login.box}>
        <TextInput placeholder="Digite seu RA" style={login.textInput} placeholderTextColor="#0B396D" defaultValue={ra} onChangeText={setRa} />
        <TextInput placeholder="Digite sua Senha" style={login.textInput} placeholderTextColor="#0B396D" defaultValue={password} onChangeText={setPassword} secureTextEntry/>
        
        <View style={login.button}>
                    <Button title="Entrar" color="#63B446" fontSize="30" onPress={handleLogin}  />
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
  
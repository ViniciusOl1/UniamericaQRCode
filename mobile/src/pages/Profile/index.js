import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Profile({ navigation }) {
    return (
        <View style={profile.container}>
            <View>
                <Text style={profile.label}>Nome Completo: </Text>
                <Text style={profile.text}>Vinicius Oliveira de Freitas</Text>
                <Text style={profile.label}>RA: </Text>
                <Text style={profile.text}>502218</Text>
            </View>
            <View style={profile.box}>
                <TextInput placeholder="Digite sua senha" style={profile.textInput} placeholderTextColor="#0B396D" />
                <TextInput placeholder="Confirme sua senha" style={profile.textInput} placeholderTextColor="#0B396D" />
                <View style={profile.button}>
                    <Button onPress={navigation.goBack()} title="Editar" color="#63B446" fontSize="30" />
                </View>

            </View>
        </View>
    );
}

const profile = StyleSheet.create({
    container: {
        backgroundColor: "#E8E8E8",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: '#0B396D',
        fontSize: 22
    },
    text: {
        color: '#63B446',
        fontSize: 22
    },
    box: {
        marginTop: 30,
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
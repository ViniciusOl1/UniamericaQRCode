import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import 'localstorage-polyfill';
// import { Container } from './styles';
import api from '../../services/api';

export default function Profile({ navigation }) {
    const studentName = localStorage.getItem('studentName');
    const studentId = localStorage.getItem('studentId');
    const [ra, setRa] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        async function loadStudents() {
            const response = await api.get(`/alunos/${studentId}`);
            setFullname(response.data.fullname);
            setRa(response.data.ra);
            setEmail(response.data.email);
            setPassword(response.data.password);
        }
        loadStudents();
    }, [])

    async function handleEditStudent(e) {
        e.preventDefault();
        const data = {
            fullname,
            email,
            ra,
            password
        };
        if (password === confirmPassword) {
            try {
                await api.put(`alunos/${studentId}`, data);
                navigation.navigate('HomeScreen');
            } catch (err) {
                alert(`Erro ao atualizar, tente novamente ${err}`);
            }
        }else{
            alert("As senhas não estão iguais");
        }

    }

    return (
        <View style={profile.container}>
            <View>
                <Text style={profile.label}>Nome Completo: </Text>
                <Text style={profile.text}>{studentName}</Text>
                <Text style={profile.label}>RA: </Text>
                <Text style={profile.text}>{ra}</Text>
            </View>
            <View style={profile.box}>
                <TextInput placeholder="Digite sua senha" style={profile.textInput} placeholderTextColor="#0B396D" value={password} onChangeText={setPassword} secureTextEntry />
                <TextInput placeholder="Confirme sua senha" style={profile.textInput} placeholderTextColor="#0B396D" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
                <View style={profile.button}>
                    <Button onPress={handleEditStudent} title="Editar" color="#63B446" fontSize="30" />
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
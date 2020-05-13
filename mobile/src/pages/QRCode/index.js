import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
// import { Container } from './styles';
import api from '../../services/api';


export default function QRCode({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        try{
            const res = api.post('/frequencia', { studentId, data });
            navigation.navigate('HomeScreen');
          }catch(err){
            alert(`Falha ao gerar presença, tente novamente ${err}`);
          }
        alert(`Presença realizada na data de ${data} no id ${studentId}!`);
    }

    if (hasPermission === null) {
        return <Text>Pedindo permissão a câmera</Text>;
    }
    if (hasPermission === false) {
        return <Text>Acesso não permitido a câmera.</Text>;
    }
    return (
        <View style={qrcode.container}>
            <Camera
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                ratio='16:9'
                style={qrcode.camera}
            >
                <View
                    style={qrcode.qrcode}
                />

            </Camera>
            {scanned && navigation.navigate('HomeScreen')}
        </View>
    );
}

const qrcode = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    qrcode: {
        width: 250,
        height: 250,
        backgroundColor: 'transparent',
        borderColor: '#63B446',
        borderWidth: 5,
        borderRadius: 20
    }
});
import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const Formulario = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Ingrese su email"
                style={styles.input}
                multiline={false}
            />
            <TextInput
                value={contraseña}
                onChangeText={setContraseña}
                placeholder="Ingrese contraseña"
                secureTextEntry={true}
                style={styles.input}
            />
        </View>
    );
};

export default Formulario;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        textAlign: 'left', 
        borderWidth: 1,
        borderBottomWidth: 2,
        borderColor: 'black',
        padding: 10,
        paddingHorizontal: 65, 
        marginBottom: 30,
        overflow: 'hidden'
    },
});

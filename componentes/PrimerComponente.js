import { StyleSheet, Text, View, ImageBackground,} from 'react-native'
import Formulario from './formulario'
import React from 'react'

const PrimerComponente = () => {
  return (
    <>
    <ImageBackground source={require('../assets/Fondo.jpg')}>
        <View style={styles.bg}>
            <Text style={styles.texto}>Crear Cuenta</Text>
            <Text style={styles.caja}>
                <Formulario></Formulario>
            </Text>
        </View>
    </ImageBackground>
    </>
  )
}

export default PrimerComponente

const styles = StyleSheet.create({
    bg:{
        height: 850
    },
    texto:{
        fontSize: 40,
        color:'white',
        marginTop : 170,
        textAlign: 'center'
    },
    caja:{
        backgroundColor: 'white',
        marginTop : 60,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
        paddingTop: 30,
        paddingVertical: 120,
        borderRadius: 20,
        borderWidth: 1
    }
})

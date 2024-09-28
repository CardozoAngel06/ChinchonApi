import { StyleSheet, Text, View , Div} from 'react-native'
import React from 'react'
import Btn from '../botones/boton';

const PrimerComponente = () => {
  return (
    <>
        <View style={styles.bg}>
            <Text style={styles.texto}>Crear Cuenta</Text>
            <Text style={styles.caja}>
            <Btn texto = "Esto es un boton nuevo" presionado={() => navigation.navigate("SegundoComponente")}></Btn>
            </Text>
        </View>
    </>
  )
}

export default PrimerComponente

const styles = StyleSheet.create({
    bg:{
        backgroundColor: 'black',
        alignItems:'Center'
    },
    texto:{
        fontSize: 40,
        color:'white',
        marginTop : 90
    },
    caja:{
        backgroundColor: 'white',
        marginTop : 30,
        marginBottom: 30,
        paddingTop: 30,
        paddingHorizontal: 120,
        paddingVertical: 200,
        borderRadius: 10,
    },
    caja2:{

    }
})

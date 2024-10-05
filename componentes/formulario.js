import { StyleSheet, TextInput, View } from 'react-native'
import React , {useState}from 'react'

const formulario = () => {
    const [email, setNombre, contraseña, setContraseña] = useState('')
  return (
    <View style={styles.container}>
      <TextInput value={email} onChangeText={setNombre} placeholder="Ingrese su email" style={styles.input}/>
      <TextInput value={contraseña} onChangeText={setContraseña} placeholder="Ingrese contraseña" style={styles.input}/>
    </View>
  )
}

export default formulario

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        borderWidth: 1,
        borderBottomWidth: 2,
        borderColor: 'black',
        padding: 10,
        paddingHorizontal: 77,
        marginBottom: 10
    }
})
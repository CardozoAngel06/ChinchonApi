import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimerComponente from '../componentes/PrimerComponente'

const SegundoComponente = () => {
  return (
    <View>
      <Text>SegundoComponente</Text>
      <PrimerComponente></PrimerComponente>
    </View>
  )
}

export default SegundoComponente

const styles = StyleSheet.create({})
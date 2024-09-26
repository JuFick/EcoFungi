import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Colors from '../../constants/Colors'

export default function Home() {
  return (
    <View style={{
      padding:20, marginTop:20, backgroundColor: Colors.CINZA_BEGE
    }}>
      {/* Header */}
      <Header/>

      {/* Slider */}
      <Slider/>
      
      {/* Categorias */}

      {/* Lista dos pets */}

      {/* Adicionar novo Pet */}
    </View>
  )
}
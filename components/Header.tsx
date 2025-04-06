import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
      <Ionicons name="arrow-back" size={24} color="#000" />
    </View>
  )
}

export default Header
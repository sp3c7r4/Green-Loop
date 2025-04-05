import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
      <Ionicons name="checkmark-circle" size={32} color="green" />
      <Text>Header</Text>
    </View>
  )
}

export default Header
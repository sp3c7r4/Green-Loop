import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/color'

const AddCatalogueItem = () => {
  return (
    <View style={{flex: 1, marginVertical: 20}}>
      <View style={{backgroundColor: Colors.light.overlay, height: 50, width: 100}}>
        <TextInput style={{ height: 30, width: 10 }}/>
      </View>
    </View>
  )
}

export default AddCatalogueItem
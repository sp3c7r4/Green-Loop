import { View, Text, TextInput } from 'react-native'
import React from 'react'

const AddCatalogueItem = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: "#F9F9F9"}}>
        <TextInput style={{ height: 30, width: 10 }}/>
      </View>
    </View>
  )
}

export default AddCatalogueItem
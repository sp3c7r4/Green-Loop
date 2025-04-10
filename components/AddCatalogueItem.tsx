import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/color'

function TextInputBox({placeholder}:{placeholder: string}) {
  return (
    <View style={{flexDirection: "row",backgroundColor: Colors.light.overlay, height: 50, width: "100%", borderRadius: 8, alignItems: "center", flex: 1, paddingLeft: 10}}>
      <TextInput placeholder={placeholder} style={{ height: 40, width: "100%", flex: 0.8 }}/>
      {/* <TextInput placeholder={placeholder} style={{ height: 40, width: "100%", flex: 0.2 }}/> */}
    </View>
  )
}

const AddCatalogueItem = () => {
  return (
    <View style={{flex: 1, marginVertical: 10}}>
      <View style={{flexDirection: "row", justifyContent: "space-between", height: 150}}>
        <View style={{width: "48%", justifyContent: "space-between", gap: 4}}>
          <TextInputBox placeholder='Name'/>
          <TextInputBox placeholder='location'/>
        </View>
        <View style={{width: "48%"}}>
          <View style={{width: "100%", height: "100%", backgroundColor: "#3CC687", borderRadius: 8}}>
            
          </View>
        </View>
      </View>
      <View style={{ padding: 10, backgroundColor: Colors.light.overlay, marginVertical: 10, borderRadius: 8, flex: 1, height: 110 }}>
        <TextInput
          placeholder='{placeholder}'
          style={{ width: "100%", flex: 1 }}
          multiline={true}
          textAlignVertical="top"
        />
      </View>
    </View>
  )
}

export default AddCatalogueItem
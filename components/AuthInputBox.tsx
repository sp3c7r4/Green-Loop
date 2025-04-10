import { View, Text, TextInput } from 'react-native'
import React from 'react'
import FontSize from '@/constants/FontSize'
import { Colors } from '@/constants/color'

const AuthInputBox = ({ label, onChangeText, placeholder, value }:{value: string, label: string, onChangeText: (value: string) => void, placeholder: string}) => {
  return (
    <View style={{flexGrow: 1}}>
      <View>
          <Text style={{fontSize: FontSize.textbox_label_fbold, fontFamily: "Satoshi-Bold", marginVertical: 3}}>{label}</Text>
        <View style={{ height: 55, backgroundColor: Colors.light.overlay, borderRadius: 10, justifyContent: "center", paddingLeft: 10 }}>
          <TextInput onChangeText={onChangeText} value={value} placeholder={placeholder} style={{height: 40, fontFamily: "Satoshi-Medium", borderBottomWidth: 0,}}/>
        </View>
      </View>
    </View>
  )
}

export default AuthInputBox
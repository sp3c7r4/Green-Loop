import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/color'
import FontSize from '@/constants/FontSize'

const Button = ({title,buttonTextColor, color=Colors.light.primary, onPress, type}: {buttonTextColor?: string, title: string, color?: string, onPress?: () => void, type: 'outline' | 'normal'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginVertical: 3, width: "100%", height: 47, backgroundColor: type === 'normal' ? color || Colors.dark.primary : 'transparent', alignItems: "center", justifyContent: "center", borderRadius: 10, borderColor: type === 'outline' ? color || Colors.dark.primary : 'transparent', borderWidth: type === 'outline' ? 1 : 0}}>
      <Text style={{fontFamily: "Satoshi-Medium", fontSize: FontSize.button_fmedium_small, color: type === 'normal' ? "#000" : buttonTextColor || "#fff"}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
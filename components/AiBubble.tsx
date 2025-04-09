import { View, Text, Image } from 'react-native'
import React from 'react'
import GreenLoopLogo from '@/svgs/Logo'

const AiBubble = () => {
  return (
    <View style={{ position: "absolute", alignItems: "center", justifyContent: "center", bottom: 0, right: 0, marginRight: 20, marginBottom: 20, borderRadius: 50}}>
      <Image source={require("@/assets/images/bin.png")} style={{width: 50, height: 70 }} resizeMode='contain'/>
    </View>
  )
}

export default AiBubble
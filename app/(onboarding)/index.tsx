import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/color'
import Button from '@/components/Button'
import garbage from '@/assets/images/garbage.png'
import {StatusBar} from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontSize from '@/constants/FontSize'

const index = () => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.dark.background, flex: 1, paddingHorizontal: 16, alignItems: "center"}}>
      {/* <Text>index</Text> */}
      <View style={{ justifyContent: "space-between", gap: 20}}>
        <View style={{marginVertical: 30}}>
          <Text style={{fontFamily: "Satoshi-Black", fontSize: FontSize.heading_two_fblack, color: "#fff", textAlign: "center"}}>Reviving <Text style={{color: Colors.dark.primary}}>E-Waste</Text> for a 
          Sustainable Future</Text>
        </View>
        <View style={{}}>
          <Image source={garbage} style={{width: 300, height: 300, marginRight: 17}} resizeMode='contain'/>
        </View>
      </View>
      <View style={{ bottom: 0, position: "absolute", flex: 1, marginVertical: 20, zIndex: 1, gap:10 }}>
        <Text style={{flex:1, fontSize: FontSize.paragraph_fmedium, color: "#fff", fontFamily: "Satoshi-Light"}}>Let's Embark on your journey towards a cleaner, greener future by taking the first step today. <Text style={{color: Colors.dark.primary, fontFamily: "Satoshi-Medium"}}>Greenloopers</Text>!</Text>
        <View style={{width: "100%"}}>
          <Button title='Register' type="normal"/>
          <Button title='Login' type="outline"/>
        </View>
      </View>
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}

export default index
import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/color'
import Button from '@/components/Button'
import garbage from '@/assets/images/garbage.png'
import {StatusBar} from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontSize from '@/constants/FontSize'
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.light.background, flex: 1, paddingHorizontal: 16, alignItems: "center"}}>
      {/* <Text>index</Text> */}
      <View style={{ justifyContent: "space-between", gap: 20}}>
        <View style={{marginVertical: 30}}>
          <Text style={{fontFamily: "Satoshi-Black", fontSize: FontSize.heading_two_fblack, color: "#000", textAlign: "center"}}>Reviving <Text style={{color: Colors.dark.primary}}>E-Waste</Text> for a 
          Sustainable Future</Text>
        </View>
        <View style={{}}>
          <Image source={garbage} style={{width: 300, height: 300, marginRight: 17}} resizeMode='contain'/>
        </View>
      </View>
      <View style={{ bottom: 0, position: "absolute", flex: 1, marginVertical: 20, zIndex: 1, gap:10 }}>
        <Text style={{flex:1, fontSize: FontSize.paragraph_fmedium, color: "#000", fontFamily: "Satoshi-Light"}}>Let's Embark on your journey towards a cleaner, greener future by taking the first step today. <Text style={{color: Colors.dark.primary, fontFamily: "Satoshi-Medium"}}>Greenloopers</Text>!</Text>
        <View style={{width: "100%"}}>
          <Button title='Register' type="normal" onPress={() => router.navigate("/(auth)/signup")}/>
          <Button title='Login' type="outline" buttonTextColor='#000' onPress={() => router.navigate("/(auth)/signin")}/>
        </View>
      </View>
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}

export default index
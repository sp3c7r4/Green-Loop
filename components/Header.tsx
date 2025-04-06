import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/color';

const Header = ({onPress}:{onPress: () => void}) => {
  return (
    <SafeAreaView style={{flexDirection: "row", marginTop: 10, justifyContent: "space-between"}}>
      <Pressable onPress={onPress}>
        <View style={{alignItems: "center", justifyContent: "center", backgroundColor: Colors.light.overlay, borderRadius: 50, height: 40, width: 40}}>
          <Ionicons name="arrow-back" size={24} color={Colors.light.primary} />
        </View>
      </Pressable>
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}

export default Header
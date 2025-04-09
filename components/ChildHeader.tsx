import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/color';

const ChildHeader = ({onPress}:{onPress: () => void}) => {
  return (
    <SafeAreaView style={{flexDirection: "row", marginTop: 10, justifyContent: "space-between"}}>
      
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}

export default ChildHeader
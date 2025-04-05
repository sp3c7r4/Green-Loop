import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
   <Stack>
    <Stack.Screen name="signup"/>
    <Stack.Screen name="signin"/>
   </Stack>
  )
}

export default _layout
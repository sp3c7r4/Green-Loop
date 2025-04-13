import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { color } from '@/constants/color';

const auction = () => {
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: color.greensync.background, paddingHorizontal: 16 }} >
        <StatusBar />
      </SafeAreaView>
  );
}

export default auction
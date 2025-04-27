import { View, Text } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { color } from '@/constants/color';
import Header from '@/components/Header';
// import { useSearchParams } from 'expo-router';

const AuctionPage = () => {
  const { productId } = useLocalSearchParams();
  return (
    <SafeAreaView style={{ paddingLeft: 16, flex: 1, borderWidth: 1, backgroundColor: color.greensync.background }}>
      <Header
        onPress={() => {
          router.back();
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Auction Page</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Product ID: {productId}</Text>
    </SafeAreaView>
  );
};

export default AuctionPage;
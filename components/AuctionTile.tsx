import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const AuctionTile = ({ data }:{data: any}) => {
  return (
    <Pressable onPress={() => router.push({ pathname: '/(root)/AuctionPage', params: { productId: data.productId } })}>
    <View style={{backgroundColor: "#fff", borderRadius: 8, height: 100, marginVertical: 3}}>
      {/* {console.log(productId)} */}
      <Text>{data.id}</Text>
    </View>

      </Pressable>
  )
}

export default AuctionTile
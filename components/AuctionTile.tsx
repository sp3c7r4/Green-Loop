import { View, Text } from 'react-native'
import React from 'react'

const AuctionTile = ({data}) => {
  return (
    <View style={{backgroundColor: "#fff", borderRadius: 8, height: 100, marginVertical: 3}}>
      <Text>{data.id}</Text>
    </View>
  )
}

export default AuctionTile
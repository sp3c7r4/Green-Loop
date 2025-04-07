import { View, Text } from 'react-native'
import React from 'react'

const ProductTile = ({data}:{data: {name: string, date: string, time: string, location: string, image_url: string}}) => {
  return (
    <View style={{height: 100, backgroundColor: "#fff", borderRadius: 7, padding: 10, marginVertical: 5, flexDirection: "row", gap: 10}}>
      <View style={{backgroundColor: "#333", height: "100%", width: 130, borderRadius: 7}}>
      </View>
      <Text style={{flex:1, width: "100%"}}>Name: {data.name}</Text>
      <Text>Date: {data.date}</Text>
      <Text>Name: Spectra Gee</Text>
      <Text>Name: Spectra Gee</Text>
    </View>
  )
}

export default ProductTile
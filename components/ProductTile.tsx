import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { color } from '@/constants/color'

interface DataProps {
  id: number
  name: string
  date: string
  time: string
  location: string
  image_url: string
  content: string
}

const ProductTile = ({data}:{data: DataProps}) => {
  return (
    <View style={{width: "48%", padding: 10, height: 220, backgroundColor: "#fff", borderRadius: 5, marginTop: 10, alignItems: "center"}}>
      <View style={{ width: "98%", height: 80, alignSelf: "center" }}>
        <Image source={{uri: data.image_url}} resizeMode='cover' style={{width: "100%", height: "100%", borderRadius: 6}}/>
      </View>
      <View style={{width: "95%"}}>
        <Text style={{fontFamily: "Satoshi-Medium", fontSize: 15, marginVertical: 3, textAlign: "left"}}>{data.name}</Text>
      </View>
      {/* <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 3, alignItems: "center", width: "100%"}}>
        <View style={{backgroundColor: color.light.primary, paddingHorizontal: "5%", paddingVertical: 3, borderRadius: 3}}>
          <Text style={{color: "#fff", fontFamily: "Satoshi-Regular"}}>Bids: 5</Text>
        </View>
        <Text style={{fontFamily: "Satoshi-Medium", fontSize: 10, color: "rgb(179, 15, 15)"}}>Ends in 1:02:34</Text>
      </View>
      <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 3, alignItems: "center", width: "100%"}}>
        <View style={{}}>
          <Text>Current Bid</Text>
          <Text style={{fontSize: 25,color: color.light.primary}}>${`${9}`}</Text>
        </View>
        <Image source={require('@/assets/images/auction_icon.png')} style={{width: 35, height: 35}}/>
      </View> */}
    </View>
  )
}

export default ProductTile;
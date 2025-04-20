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
const image = "https://i.ytimg.com/vi/S6lQa9LoJNo/maxresdefault.jpg"

const ProductTile = ({data}:{data: DataProps}) => {
  return (
    <View style={{width: "48%", padding: 10, height: 220, backgroundColor: "rgba(60, 199, 136, 0.1)", borderRadius: 5, marginTop: 10, alignItems: "center", borderWidth: 1, borderColor: "rgb(60, 199, 136)"}}>
      <View style={{ width: "95%", height: 80, alignSelf: "center" }}>
        <Image source={{uri: image || data.image_url}} resizeMode='cover' style={{width: "100%", height: "100%", borderRadius: 5}}/>
      </View>
      <Text style={{fontFamily: "Satoshi-Medium", fontSize: 12, marginVertical: 3, flex: 1, textAlign: "center"}}>{data.name}</Text>
      <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 3, alignItems: "center", width: "100%"}}>
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
      </View>
    </View>
  )
}

export default ProductTile
// <View style={{width: "48%", padding: 10, height: 170, backgroundColor: "rgb(211, 224, 205)", borderRadius: 5, marginTop: 10}}>
//   <Text style={{color: "#fff", fontFamily: "Satoshi-Bold", fontSize: 10}}>{data.name}</Text>
//   <Text style={{color: "#fff", fontFamily: "Satoshi-Medium", fontSize: 8, opacity: 0.5}}>{data.date +" "+ data.time}</Text>
//   <View style={{marginTop: 6, flexDirection: "row", justifyContent: "space-between"}}>
//     <Image source={{uri: data.image_url}} style={{ borderRadius: 6, width: 70, height: 70}}/>
//     <View style={{alignItems:"flex-end", gap: 3.5}}>
//       <Image source={{uri: image}} style={{ borderRadius: 6, width: 30, height: 30}}/>
//       <View style={{alignItems:"flex-end"}}>
//         <Text style={{fontFamily: "Satoshi-Bold", color: "#fff", fontSize: 8}}>Recycler</Text>
//         <Text style={{color: "#3CC687", fontFamily: "Satoshi-Regular", fontSize: 8}}>Spectra Gee</Text>
//       </View>
//       <View style={{flexDirection: "row", alignItems: "center", gap: 2}}>
//         <Image source={require("@/assets/images/location_1.png")} style={{width: 8, height: 8}} resizeMode='contain'/>
//         <Text style={{fontFamily: "Satoshi-Medium", fontSize: 8, color: "#fff"}}>{data.location.split(" ")[data.location.split(" ").length-1]}</Text>
//       </View>
//     </View>
//   </View>
//     <Text style={{fontSize: 8.5, color: "#fff", position: "absolute", bottom: 10, left: 10, height: "25%"}}>{data.content.split(" ").slice(0, 20).join(" ")}...<Text style={{color: "#3CC687"}}>readmore</Text></Text>
// </View>
import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

interface DataProps {
  id: number
  name: string
  date: string
  time: string
  location: string
  image_url: string
  content: string
}
const image = "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww"

const ProductTile = ({data}:{data: DataProps}) => {
  return (
    <View style={{width: "48%", padding: 10, height: 170, backgroundColor: "rgba(21, 232, 119,0.2)", borderRadius: 5, marginTop: 10, borderWidth: 1, borderColor: "rgba(21, 232, 119,0.5)"}}>
      <Text style={{color: "#fff", fontFamily: "Satoshi-Bold", fontSize: 10}}>{data.name}</Text>
      <Text style={{color: "#fff", fontFamily: "Satoshi-Medium", fontSize: 8, opacity: 0.5}}>{data.date +" "+ data.time}</Text>
      <View style={{marginTop: 6, flexDirection: "row", justifyContent: "space-between"}}>
        <Image source={{uri: data.image_url}} style={{ borderRadius: 6, width: 70, height: 70}}/>
        <View style={{alignItems:"flex-end", gap: 3.5}}>
          <Image source={{uri: image}} style={{ borderRadius: 6, width: 30, height: 30}}/>
          <View style={{alignItems:"flex-end"}}>
            <Text style={{fontFamily: "Satoshi-Bold", color: "#fff", fontSize: 8}}>Recycler</Text>
            <Text style={{color: "#3CC687", fontFamily: "Satoshi-Regular", fontSize: 8}}>Spectra Gee</Text>
          </View>
          <View style={{flexDirection: "row", alignItems: "center", gap: 2}}>
            <Image source={require("@/assets/images/location_1.png")} style={{width: 8, height: 8}} resizeMode='contain'/>
            <Text style={{fontFamily: "Satoshi-Medium", fontSize: 8, color: "#fff"}}>{data.location.split(" ")[data.location.split(" ").length-1]}</Text>
          </View>
        </View>
      </View>
        <Text style={{fontSize: 8.5, color: "#fff", position: "absolute", bottom: 10, left: 10, height: "25%"}}>{data.content.split(" ").slice(0, 20).join(" ")}...<Text style={{color: "#3CC687"}}>readmore</Text></Text>
    </View>
  )
}

export default ProductTile
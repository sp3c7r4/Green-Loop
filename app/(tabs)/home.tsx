import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/color'
import HomeHeader from '@/components/HomeHeader'
import FontSize from '@/constants/FontSize'
import ProductTile from '@/components/ProductTile'
import data from '@/data.json'
// import {FlashList} from '@shopify/flash-list'

const home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#111"}}>
        <View style={{marginHorizontal: 16, marginTop: 10}}>
          <Text style={{color: "#fff", fontFamily: "Satoshi-Bold", fontSize: 19}}>Hello <Text style={{color: Colors.light.primary}}>Satar</Text></Text>
          <Text style={{color: "#fff", fontFamily: "Satoshi-Medium", fontSize: 10}}>{"Welcome to Greenloop"}</Text>
        </View>
      <View style={{ height: "20%", backgroundColor: "#111"}}>
        {/* <HomeHeader/> */}
        <Image source={require('@/assets/images/header_1.png')} resizeMode='contain' style={{width: "100%", height: "100%"}}/>
      </View>
      <View>
        <View style={{ paddingTop: 10, marginHorizontal: 16 }}>
          <Text style={{color: "#fff", fontFamily: "Satoshi-Bold", fontSize: 15}}>Sustaining communities, one recycle at a time.</Text>
          <Text style={{color: "#fff", fontFamily: "Satoshi-Medium", fontSize: 10, opacity: 0.2}}>Turn trash into cash the IDEAL way.</Text>
        </View>
        <View style={{ paddingTop: 10, marginHorizontal: 16 }}>
          <Text style={{color: Colors.light.primary, fontFamily: "Satoshi-Medium", fontSize: 15}}>Products</Text>
          <FlatList
          ListHeaderComponent={<View style={{height: 20}}/>}
            data={data} // Assuming your data.json has a "products" array
            renderItem={({ item }) => <ProductTile data={item} />} // Pass each product to ProductTile
            keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
            // estimatedItemSize={100} // Provide an estimated size for better performance
            contentContainerStyle={{ paddingBottom: 20 }} // Add padding for better spacing
          />
        </View>
      </View>
      <StatusBar style="light" backgroundColor='#111'/>
    </SafeAreaView>
  )
}

export default home
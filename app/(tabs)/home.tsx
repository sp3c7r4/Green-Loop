import { View, Text, Image, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/color'
import HomeHeader from '@/components/HomeHeader'
import FontSize from '@/constants/FontSize'
import ProductTile from '@/components/ProductTile'
import data from '@/data.json'
import SearchBox from '@/components/SearchBox'
// import {FlashList} from '@shopify/flash-list'
const headerTiles = [
  { "id": "trade", "image": require("@/assets/images/trade.png") },
  { "id": "market", "image": require("@/assets/images/market.png") },
  { "id": "recycling", "image": require("@/assets/images/ewaste-recycling.png") },
  { "id": "programs", "image": require("@/assets/images/programs.png") },
  { "id": "rebuild", "image": require("@/assets/images/rebuild.png") }
]


const home = () => {
  const[searchText, setSearchText] = useState("")
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#111"}}>
      <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 16, marginTop: 10}}>
        <View style={{}}>
          <Text style={{color: "#fff", fontFamily: "Satoshi-Bold", fontSize: 19}}>Hello <Text style={{color: Colors.light.primary}}>Satar</Text></Text>
          <Text style={{color: "#fff", fontFamily: "Satoshi-Medium", fontSize: 10}}>{"Welcome to Greenloop"}</Text>
        </View>
        <SearchBox value={searchText} onPress={() => console.log(searchText)} onChangeText={(value)=>setSearchText(value)}/>
      </View>
      <View style={{ height: 120, backgroundColor: "#111"}}>
        {/* <HomeHeader/> */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <FlatList 
            data={headerTiles}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 1 }} // Ensure the FlatList has a defined height
            contentContainerStyle={{ paddingHorizontal: 10, marginTop: 10, height: 120 }} // Add padding for better spacing
            renderItem={({item, index}) => (
            <Pressable style={{ marginHorizontal: 3}}>
              <Image 
              key={index} 
              source={item.image} 
              resizeMode='contain' 
              style={{ width: 100, height: 110 }}
              />
            </Pressable>)}
            />
        </View>
      </View>
      <View>
        <View style={{ paddingTop: 10, marginHorizontal: 16 }}>
          <Text style={{color: "#fff", fontFamily: "Satoshi-Bold", fontSize: 15}}>Sustaining communities, one recycle at a time.</Text>
          <Text style={{color: "#fff", fontFamily: "Satoshi-Medium", fontSize: 10, opacity: 0.2}}>Turn trash into cash the IDEAL way.</Text>
        </View>
        <View style={{ paddingTop: 10, marginHorizontal: 16 }}>
          <Text style={{color: Colors.light.primary, fontFamily: "Satoshi-Bold", fontSize: 18 }}>Products</Text>
           <FlatList
            ListFooterComponent={<View style={{height: 300}}/>}
            ListHeaderComponent={<View style={{height: 10}}/>}
            data={data} // Assuming your data.json has a "products" array
            keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
            numColumns={2} // Set the number of columns for the grid
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 20,
            }}
            columnWrapperStyle={{
              justifyContent: "space-between", // Add spacing between columns
              marginBottom: 5, // Add spacing between rows
            }}
            renderItem={({ item }) => (
              <ProductTile data={item}/> // Pass the product data to ProductTile
            )}
          />
          {/* <FlatList
            ListHeaderComponent={<View style={{height: 20}}/>}
            ListFooterComponent={<View style={{height: 270}}/>}
            showsVerticalScrollIndicator={false}
            data={data} // Assuming your data.json has a "products" array
            renderItem={({ item }) => <ProductTile data={item} />} // Pass each product to ProductTile
            keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
            // estimatedItemSize={100} // Provide an estimated size for better performance
            contentContainerStyle={{ paddingBottom: 20 }} // Add padding for better spacing
          /> */}
        </View>
      </View>
      <StatusBar style="light" backgroundColor='#111'/>
    </SafeAreaView>
  )
}

export default home
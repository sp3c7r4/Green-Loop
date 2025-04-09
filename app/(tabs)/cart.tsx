import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/color'
import SearchBox from '@/components/SearchBox'
import CartContainer from '@/components/CartContainer'
import AiBubble from '@/components/AiBubble'
import data from '@/data.json'


interface DataProps {
  id: number
  name: string
  date: string
  time: string
  location: string
  image_url: string
  content: string
}

const cart = () => {
  const [cartItems, setCartItems] = useState<DataProps[]>([])
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    setCartItems((prev) => {
      return [...prev, ...(data as DataProps[])]
    })
  }, [])
  function onPressDelete(id: number): void {
    setCartItems(prev => {
      const filter = prev.filter((item) => item.id !== id)
      return filter
    })
  }
  
  function onPressRequest(id: number): void {
    console.log(id)
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#111", paddingHorizontal: 16}}>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
        <View>
          <Text style={{color: "#fff", fontFamily: "Satoshi-Bold", fontSize: 17}}>Welcome to <Text style={{color: Colors.light.primary}}>Carts</Text></Text>
          <Text style={{color: "#fff", fontFamily: "Satoshi-Medium", fontSize: 8}}> Easily review and manage your items here. </Text>
        </View>
        <SearchBox onChangeText={(value) => setSearchText(value)} value={searchText} onPress={() => console.log(searchText)}/>
      </View>
      <View>
        <FlatList
          ListFooterComponent={<View style={{height: 50}}/>}
          ListHeaderComponent={<View style={{height: 10}}/>}
          data={cartItems} // Assuming your data.json has a "products" array
          keyExtractor={(item) => item?.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
          renderItem={({ item }) => (
            <CartContainer data={item} onPressDelete={() => onPressDelete(item.id)} onPressRequest={() => onPressRequest(item.id)}/> // Pass the product data to ProductTile
          )}
        />
        { cartItems.length === 0 && 
        <View style={{ justifyContent: "center", alignItems: "center"}}>
          <Text style={{color: "#fff", fontSize: 15}}>🚫 No items in the cart</Text>
        </View> }
      </View>
      <AiBubble/>
      <StatusBar/>
    </SafeAreaView>
  )
}

export default cart
import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/color'
import CartContainer from '@/components/CartContainer'
import AiBubble from '@/components/AiBubble'
import data from '@/data.json'
import SmallSearchBox from '@/components/SmallSearchBox'
import Button from '@/components/Button'


interface DataProps {
  id: number
  name: string
  date: string
  time: string
  location: string
  image_url: string
  content: string
}

const catalogue = () => {
  const [catalogueItems, setCatalogueItems] = useState<DataProps[]>([])
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    setCatalogueItems((prev) => {
      return [...prev, ...(data as DataProps[])]
    })
  }, [])
  function onPressDelete(id: number): void {
    setCatalogueItems(prev => {
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
          <Text style={{color: "#fff", fontFamily: "Satoshi-Bold", fontSize: 17}}>Welcome to <Text style={{color: Colors.light.primary}}>Catalogue</Text></Text>
          <Text style={{color: "#fff", fontFamily: "Satoshi-Medium", fontSize: 8}}> Easily review and manage your items here. </Text>
        </View>
        <SmallSearchBox onChangeText={(value) => setSearchText(value)} value={searchText} onPress={() => console.log(searchText)}/>
      </View>
      <View>
        { catalogueItems.length > 0 ? 
        <FlatList
          ListFooterComponent={<View style={{height: 50}}/>}
          ListHeaderComponent={<View style={{height: 10}}/>}
          data={catalogueItems} // Assuming your data.json has a "products" array
          keyExtractor={(item) => item?.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
          renderItem={({ item }) => (
            <CartContainer data={item} onPressDelete={() => onPressDelete(item.id)} onPressRequest={() => onPressRequest(item.id)}/> // Pass the product data to ProductTile
          )}
        /> : <Button type='normal' title='Create Catalogue'/>
        }
        { catalogueItems.length === 0 && 
        <View style={{ justifyContent: "center", alignItems: "center"}}>
          <Text style={{color: "#fff", fontSize: 15}}>🚫 No items in the cart</Text>
        </View> }
      </View>
      <StatusBar/>
    </SafeAreaView>
  )
}

export default catalogue
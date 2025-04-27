import { View, Text, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { color } from '@/constants/color';
import SmallSearchBox from '@/components/SmallSearchBox';
import AuctionTile from '@/components/AuctionTile';
import useAuthStore from '@/auth/authStore';

const auction = () => {
    const { auctions } = useAuthStore()
    console.log("Auctions: ", JSON.stringify(auctions))
    const [searchText, setSearchText] = useState("");
    const onPressDelete = useCallback((id: number): void => {
    }, []);
  
    function onPressRequest(id: number): void {
      console.log(id);
    }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.greensync.background, paddingHorizontal: 16 }} >
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10, }}>
      <View>
        <Text
          style={{ color: "#000", fontFamily: "Satoshi-Bold", fontSize: 25 }}
        >
          Auctions
        </Text>
        <Text style={{color: "#000",fontFamily: "Satoshi-Medium", fontSize: 8 }}>
          Easily review and manage your items here.{" "}
        </Text>
      </View>
      {/* <SmallSearchBox
        onChangeText={(value) => setSearchText(value)}
        value={searchText}
        onPress={() => console.log(searchText)}
      /> */}
    </View>
    <View>
      {
        auctions?.data?.length === 0 ?
        <Text>No Auctions</Text> :
        <FlatList data={auctions?.data} renderItem={({ item }) => (
          <AuctionTile data={item}/>
        )}/>
        // console.log("AUCTION: \n", auctions.data)
      }
    </View>
    <StatusBar />
  </SafeAreaView>
  );
}

export default auction
import { View, Text, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { color } from '@/constants/color';
import SmallSearchBox from '@/components/SmallSearchBox';
import AuctionTile from '@/components/AuctionTile';

const auction = () => {
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
          style={{ color: "#000", fontFamily: "Satoshi-Bold", fontSize: 17 }}
        >
          Welcome to <Text style={{ color: color.light.primary }}>Auction</Text>
        </Text>
        <Text
          style={{ color: "#000", fontFamily: "Satoshi-Medium", fontSize: 8 }}
        >
          {" "}
          Easily review and manage your auctions.{" "}
        </Text>
      </View>
      <SmallSearchBox
        onChangeText={(value) => setSearchText(value)}
        value={searchText}
        onPress={() => console.log(searchText)}
      />
    </View>
    <View>
        <FlatList data={Array.from({ length: 4 }, (_, index) => index)} renderItem={({ item }) => (
          <AuctionTile data={item}/>
        )}/>
    </View>
    <StatusBar />
  </SafeAreaView>
  );
}

export default auction
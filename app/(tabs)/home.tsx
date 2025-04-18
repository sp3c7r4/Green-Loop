import { View, Text, Image, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "@/constants/color";
import ProductTile from "@/components/ProductTile";
import data from "@/data.json";
import SearchBox from "@/components/SearchBox";
import useAuthStore from "@/auth/authStore";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
// import {FlashList} from '@shopify/flash-list'
const headerTiles = [
  { id: "trade", image: require("@/assets/images/trade.png") },
  { id: "market", image: require("@/assets/images/refurbish.png") },
  { id: "recycling", image: require("@/assets/images/recycle.png") },
  { id: "programs", image: require("@/assets/images/programs.png") },
  { id: "rebuild", image: require("@/assets/images/rebuild.png") },
];

const home = () => {
  const { logout, startTokenExpirationCheck } = useAuthStore();
  const [searchText, setSearchText] = useState("");
  function handleLogout() {
    logout();
    // router.replace("/(onboarding)");
  }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.greensync.background }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 16,
          marginTop: 10,
        }}
      >
        <View style={{}}>
          <Text
            style={{ color: "#000", fontFamily: "Satoshi-Bold", fontSize: 19 }}
          >
            Hello <Text style={{ color: color.light.primary }}>Satar</Text>
          </Text>
          <Text
            style={{
              color: "#000",
              fontFamily: "Satoshi-Medium",
              fontSize: 10,
            }}
          >
            {"Welcome to Greenloop"}
          </Text>
        </View>
        <SearchBox
          value={searchText}
          onPress={() => handleLogout()}
          onChangeText={(value) => setSearchText(value)}
        />
      </View>
      <View style={{ height: 120, backgroundColor: color.greensync.background }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 100,
              alignItems: "center",
              justifyContent: "center",
              height: 110,
              marginLeft: 16,
              marginTop: 10,
              backgroundColor: "#50D699",
              borderWidth: 1,
              borderColor: "rgba(21, 232, 119, 0.5)",
              borderRadius: 4,
            }}
          >
            <Text style={{ fontFamily: "Satoshi-Medium" }}>Blog Posts</Text>
          </View>
          <FlatList
            data={headerTiles}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 1 }} // Ensure the FlatList has a defined height
            contentContainerStyle={{
              paddingHorizontal: 2,
              marginTop: 10,
              height: 120,
            }} // Add padding for better spacing
            renderItem={({ item, index }) => (
              <Pressable style={{ marginHorizontal: 0 }}>
                <Image
                  key={index}
                  source={item.image}
                  resizeMode="contain"
                  style={{ width: 100, height: 110 }}
                />
              </Pressable>
            )}
          />
        </View>
      </View>
      <View>
        <View style={{ paddingTop: 10, marginHorizontal: 16 }}>
          <Text
            style={{ color: "#000", fontFamily: "Satoshi-Bold", fontSize: 15 }}
          >
            Sustaining communities, one recycle at a time.
          </Text>
          <Text
            style={{
              color: "#000",
              fontFamily: "Satoshi-Medium",
              fontSize: 10,
              opacity: 0.2,
            }}
          >
            Turn trash into cash the IDEAL way.
          </Text>
        </View>
        <View style={{ paddingTop: 10, marginHorizontal: 16 }}>
          <Text
            style={{
              color: color.light.primary,
              fontFamily: "Satoshi-Bold",
              fontSize: 18,
            }}
          >
            Products
          </Text>
          <FlatList
            ListFooterComponent={<View style={{ height: 300 }} />}
            ListHeaderComponent={<View style={{ height: 10 }} />}
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
              <ProductTile data={item} /> // Pass the product data to ProductTile
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
      <StatusBar style="dark"/>
    </SafeAreaView>
  );
};

export default home;

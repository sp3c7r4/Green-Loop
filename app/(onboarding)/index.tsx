import { View, Text, Image } from "react-native";
import React, { useRef, useState } from "react";
import { color } from "@/constants/color";
import Button from "@/components/Button";
import garbage from "@/assets/images/garbage.png";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import FontSize from "@/constants/FontSize";
import { router } from "expo-router";

import { StyleSheet } from "react-native";

import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#edfae6",
  },
  slide1: {
    flex: 1,
    backgroundColor: "#edfae6",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edfae6",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edfae6",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

const index = () => {
  // return (
  //   <SafeAreaView style={{backgroundColor: color.greensync.light_green, flex: 1, paddingHorizontal: 16, alignItems: "center"}}>
  //     {/* <Text>index</Text> */}
  //     <View style={{ justifyContent: "space-between", gap: 20}}>
  //       <View style={{marginVertical: 30}}>
  //         <Text style={{fontFamily: "Satoshi-Black", fontSize: FontSize.heading_two_fblack, color: "#000", textAlign: "center"}}>Reviving <Text style={{color: color.dark.primary}}>E-Waste</Text> for a
  //         Sustainable Future</Text>
  //       </View>
  //       <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
  //         <Image source={require('@/assets/images/hand_holding_phone.png')} style={{width: 200, height: 200, marginLeft: -10}} resizeMode='contain'/>
  //         <Image source={require('@/assets/images/man_carrying_brokentv.png')} style={{width: 200, height: 230 }} resizeMode='contain'/>
  //       </View>
  //     </View>
  //     <View style={{ bottom: 0, position: "absolute", flex: 1, marginVertical: 20, zIndex: 1, gap:10 }}>
  //       <Text style={{flex:1, fontSize: FontSize.paragraph_fmedium, color: "#000", fontFamily: "Satoshi-Light"}}>Let's Embark on your journey towards a cleaner, greener future by taking the first step today. <Text style={{color: color.dark.primary, fontFamily: "Satoshi-Medium"}}>Greenloopers</Text>!</Text>
  //       <View style={{width: "100%"}}>
  //         <Button title='Register' type="normal" onPress={() => router.navigate("/(auth)/signup")}/>
  //         <Button title='Login' type="outline" buttonTextColor='#000' onPress={() => router.navigate("/(auth)/signin")}/>
  //       </View>
  //     </View>
  //     <StatusBar style='auto'/>
  //   </SafeAreaView>
  // )
  const swiperRef = useRef(null);
  const goToNextSlide = () => {
    swiperRef?.current?.scrollBy(1); // Move to the next slide
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = activeIndex === 2 ? true : false;
  return (
    <View style={{ flex: 1, backgroundColor: "#edfae6" }}>
      <Swiper
        ref={swiperRef}
        loop={false}
        pagingEnabled={true}
        onIndexChanged={(index) => setActiveIndex(index)}
        activeDot={
          <View
            style={{
              backgroundColor: color.light.primary,
              width: 15,
              height: 15,
              borderRadius: 4,
              marginHorizontal: 5,
            }}
          ></View>
        }
        dot={
          <View
            style={{
              backgroundColor: "#000",
              width: 20,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 5,
            }}
          ></View>
        }
        style={styles.wrapper}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Image
              source={require("@/assets/images/hand_holding_phone.png")}
              style={{ width: 170, height: 200, marginLeft: -30 }}
              resizeMode="contain"
            />
            <Image
              source={require("@/assets/images/man_carrying_brokentv.png")}
              style={{ width: 180, height: 230 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ alignItems: "center", gap: 10, width: "80%" }}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Satoshi-Bold",
                textAlign: "center",
              }}
            >
              Capture an image of an electronic device
            </Text>
            <Text
              style={{
                fontSize: FontSize.paragraph_fmedium,
                fontFamily: "Satoshi-Regular",
                color: "rgba(0,0,0, 0.6)",
                textAlign: "center",
              }}
            >
              📸 Take a very nice picture of your electronic device! 🌟
            </Text>
          </View>
        </View>
        <View style={styles.slide2}>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("@/assets/images/multiple_arms.png")}
              style={{ width: 190, height: 200 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ alignItems: "center", gap: 10, width: "80%" }}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Satoshi-Bold",
                textAlign: "center",
              }}
            >
              Wait for fellow users to place their bids
            </Text>
            <Text
              style={{
                fontSize: FontSize.paragraph_fmedium,
                fontFamily: "Satoshi-Regular",
                color: "rgba(0,0,0, 0.6)",
                textAlign: "center",
              }}
            >
              💬 Sit back and relax while other Greenloopers bid on your device!
              🛠️
            </Text>
          </View>
        </View>
        <View style={styles.slide3}>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("@/assets/images/reloop.png")}
              style={{ width: 250, height: 200 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ alignItems: "center", gap: 10, width: "80%" }}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Satoshi-Bold",
                textAlign: "center",
              }}
            >
              Receive payments for your bidded product
            </Text>
            <Text
              style={{
                fontSize: FontSize.paragraph_fmedium,
                fontFamily: "Satoshi-Regular",
                color: "rgba(0,0,0, 0.6)",
                textAlign: "center",
              }}
            >
              💵 Congratulations! Collect your earnings securely and
              effortlessly. 🎉
            </Text>
          </View>
        </View>
      </Swiper>
      <View style={{ marginBottom: 10, marginHorizontal: 10 }}>
        <Button
          type="normal"
          title={lastIndex ? "Get Started" : "Next"}
          onPress={
            !lastIndex ? goToNextSlide : () => router.replace("/(auth)/signup")
          }
        />
        {lastIndex && (
          <Button
            title={"Sign In"}
            type="normal"
            color="#000"
            onPress={() => router.replace("/(auth)/signin")}
          />
        )}
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default index;

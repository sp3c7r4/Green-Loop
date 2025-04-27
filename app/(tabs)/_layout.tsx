import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Home from "@/svgs/tabs/homeSvg";
import CatalogueSVG from "@/svgs/tabs/catalogueSvg";
import CartSvg from "@/svgs/tabs/cartSvg";
import { color } from "@/constants/color";
import ProfileSvg from "@/svgs/tabs/profileSvg";
import AuctionSvg from "@/svgs/tabs/auctionSvg";
import { Pressable } from 'react-native';

export default function HapticTab(props) {
  const { children, style, ...rest } = props;

  return (
    <Pressable
      {...rest} // pass all important props like onPress, accessibility, etc.
      android_ripple={null}
      style={style} // keep the style
    >
      {children}
    </Pressable>
  );
}
const _layout = () => {
  return (
    <Tabs
    
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: color.light.overlay,
          shadowOpacity: 0,
          elevation: 0,
          paddingTop: 5,
        },
        tabBarButton: (props) => <HapticTab {...props} />, // use your custom Pressable
        animation: "fade",
        headerPressColor: "transparent"
      }}
      
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <View>
                <Home size={size} state={focused} />
                {focused && (
                  <View
                    style={{
                      width: 25,
                      borderTopLeftRadius: 50,
                      borderTopRightRadius: 50,
                      height: 3,
                      marginTop: 2,
                      backgroundColor: color.light.primary,
                    }}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <View>
                <CartSvg state={focused} size={size} />
                {focused ? (
                  <View
                    style={{
                      width: 25,
                      borderTopLeftRadius: 50,
                      borderTopRightRadius: 50,
                      height: 3,
                      marginTop: 2,
                      backgroundColor: color.light.primary,
                    }}
                  />
                ) : (
                  ""
                )}
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="catalogue"
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <View>
                <CatalogueSVG size={size} state={focused} />
                {focused ? (
                  <View
                    style={{
                      width: 25,
                      borderTopLeftRadius: 50,
                      borderTopRightRadius: 50,
                      height: 3,
                      marginTop: 2,
                      backgroundColor: color.light.primary,
                    }}
                  />
                ) : (
                  ""
                )}
              </View>
            );
          },
        }}
      />
      <Tabs.Screen name="auction" options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <View>
                <AuctionSvg size={size} state={focused} />
                {focused ? (
                  <View
                    style={{
                      width: 25,
                      borderTopLeftRadius: 50,
                      borderTopRightRadius: 50,
                      height: 3,
                      marginTop: 2,
                      backgroundColor: color.light.primary,
                    }}
                  />
                ) : (
                  ""
                )}
              </View>
            );
          },
        }}/>
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <View>
                <ProfileSvg size={size} state={focused} />
                {focused ? (
                  <View
                    style={{
                      width: 25,
                      borderTopLeftRadius: 50,
                      borderTopRightRadius: 50,
                      height: 3,
                      marginTop: 2,
                      backgroundColor: color.light.primary,
                    }}
                  />
                ) : (
                  ""
                )}
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;

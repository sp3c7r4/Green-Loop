import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { color } from "@/constants/color";

const Header = ({ onPress }: { onPress: () => void }) => {
  return (
      <Pressable onPress={onPress}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: color.light.overlay,
            borderRadius: 50,
            height: 40,
            width: 40,
          }}
        >
          <Ionicons name="arrow-back" size={24} color={color.light.primary} />
        </View>
      <StatusBar style="auto" />
      </Pressable>
  );
};

export default Header;
